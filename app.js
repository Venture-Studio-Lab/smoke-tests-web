(()=>{
const env=window.SMOKE_CONFIG||{},concepts=window.CONCEPTS||{};
const qs=new URLSearchParams(location.search);
const cut=(v,n)=>{v=(v||"").trim();return v?v.slice(0,n):null};
const pathSlug=location.pathname.match(/^\/concepts\/([^/?#]+)/i)?.[1]||"";
const slug=(qs.get("concept")||pathSlug).toLowerCase();
const cfg=concepts[slug];
if(!cfg){document.querySelector("#invalidApp")?.classList.remove("hide");return;}
const uuid=()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,c=>{const r=Math.random()*16|0,v=c==="x"?r:(r&3|8);return v.toString(16)});
let sessionId;
const prefix=`vs6c:${slug}:`;
if(typeof window.name==="string"&&window.name.startsWith(prefix)){sessionId=window.name.slice(prefix.length)}
if(!/^[0-9a-f-]{36}$/i.test(sessionId||"")){sessionId=uuid();window.name=prefix+sessionId}
const hash=s=>{let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0};
const forced=qs.get("variant");
const plan=cfg.plans.find(p=>p.id===forced)||cfg.plans[hash(sessionId)%cfg.plans.length];
const tc=()=>["targeted","adjacent","unknown"].includes((qs.get("tc")||"").toLowerCase())?(qs.get("tc")||"").toLowerCase():"unknown";
const attr=()=>({source:cut(qs.get("utm_source"),120),medium:cut(qs.get("utm_medium"),120),campaign:cut(qs.get("utm_campaign"),160),term:cut(qs.get("utm_term"),200)});
const api=`${env.supabaseUrl}/rest/v1`;
async function insert(table,row){return fetch(`${api}/${table}`,{method:"POST",headers:{apikey:env.publishableKey,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(row),keepalive:true})}
function baseEvent(event){return{experiment_version:env.experimentVersion,event,concept:slug,root:cfg.root,variant:plan.id,session_id:sessionId,event_ts:new Date().toISOString(),traffic_class:tc(),...attr(),path:cut(location.pathname,300)}}
function track(event,extra={}){insert("smoke_events",{...baseEvent(event),...extra}).catch(()=>{})}
function txt(id,v){const el=document.getElementById(id);if(el)el.textContent=v}
function render(){
 document.title=`${cfg.label} — Early access concept`;txt("rootBadge",cfg.root);txt("audience",cfg.audience);txt("headline",cfg.headline);txt("subheadline",cfg.subheadline);txt("planName",plan.name);txt("planPrice",plan.price);txt("planDetail",plan.detail);txt("roleLabel",cfg.rolePrompt);
 const ul=document.getElementById("bullets");cfg.bullets.forEach(b=>{const li=document.createElement("li");li.textContent=b;ul.appendChild(li)});
 const rs=document.getElementById("roleSelect");cfg.roles.forEach(r=>{const o=document.createElement("option");o.value=r;o.textContent=r;rs.appendChild(o)});
 document.getElementById("conceptApp").classList.remove("hide");
}
render();track("page_view");track("pricing_view");
const form=document.getElementById("reserveForm"),cta=document.getElementById("reserve"),status=document.getElementById("status");
cta.addEventListener("click",()=>{track("price_cta_click");form.classList.add("open");form.scrollIntoView({behavior:"smooth",block:"center"})});
form.addEventListener("submit",async e=>{
 e.preventDefault();const fd=new FormData(form),data=Object.fromEntries(fd.entries());
 if(data.consent!=="yes"){status.textContent="Please confirm the consent box to reserve.";return}
 const email=String(data.email||"").trim().toLowerCase();
 const lead={experiment_version:env.experimentVersion,concept:slug,variant:plan.id,session_id:sessionId,email,role:cut(data.role,200),current_tool:cut(data.current_tool,200),frequency:cut(data.frequency,120),consent:true,traffic_class:tc(),...attr()};
 cta.disabled=true;status.textContent="Saving reservation…";
 try{
   const r=await insert("smoke_leads",lead);
   if(!r.ok&&r.status!==409)throw new Error(String(r.status));
   track("reserve_submit",{role:lead.role,current_tool:lead.current_tool,frequency:lead.frequency});
   status.textContent=r.status===409?"This email is already reserved for this concept.":"Reserved. No charge was made. Early-access details will be sent only if this concept moves forward.";
   if(r.ok)form.reset();
 }catch(_){status.textContent="Your reservation could not be sent. Please try again later."}
 finally{cta.disabled=false}
});
})();
