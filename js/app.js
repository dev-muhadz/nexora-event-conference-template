/* NEXORA interactions: countdown, schedule tabs, speaker modal and mobile nav. */
document.addEventListener("DOMContentLoaded",()=>{countdown();tabs();speakers();nav();newsletter()});

/* Change this ISO date to the exact event start time. */
function countdown(){
 const target=new Date("2027-10-14T09:00:00-05:00").getTime();
 const ids=["d","h","m","s"];
 function tick(){let x=Math.max(0,target-Date.now()),t=Math.floor(x/1000);
  let v=[Math.floor(t/86400),Math.floor(t%86400/3600),Math.floor(t%3600/60),t%60];
  ids.forEach((id,i)=>document.getElementById(id).textContent=String(v[i]).padStart(2,"0"));
  if(!x) clearInterval(timer);
 } tick(); const timer=setInterval(tick,1000);
}
/* Each button's data-day matches a schedule panel's data-panel. */
function tabs(){const b=document.querySelectorAll(".tabs button"),p=document.querySelectorAll(".schedule");b.forEach(x=>x.onclick=()=>{b.forEach(y=>{y.classList.remove("active");y.setAttribute("aria-selected","false")});p.forEach(y=>y.classList.remove("active"));x.classList.add("active");x.setAttribute("aria-selected","true");document.querySelector(`[data-panel="${x.dataset.day}"]`).classList.add("active")})}
/* Speaker data is kept here so cards stay lightweight and reusable. */
function speakers(){
 const data={maya:["Maya Chen","Founder, Northstar AI","Maya builds practical AI systems for teams turning emerging technology into useful products."],james:["James Okoro","Design Director, Vertex","James leads product teams focused on making complex technology feel simple."],rhea:["Rhea Nair","Creator & Researcher","Rhea explores how technology changes culture, creativity and the way people learn."],tomas:["Tomás Silva","Founder, FWD_ Labs","Tomás works on tools that give small teams the leverage of much larger organizations."],lena:["Lena Moreau","CEO, Common Ground","Lena turns ambitious missions into durable companies, with a focus on leadership and sustainable growth."],niko:["Niko Vale","Artist & Technologist","Niko creates interactive installations exploring the boundary between physical and digital systems."]};
 const modal=document.getElementById("modal"),close=document.getElementById("close");
 document.querySelectorAll(".speakers button").forEach(c=>c.onclick=()=>{let d=data[c.dataset.speaker];document.getElementById("name").textContent=d[0];document.getElementById("role").textContent=d[1];document.getElementById("bio").textContent=d[2];modal.classList.add("open");close.focus()});
 close.onclick=()=>modal.classList.remove("open");modal.onclick=e=>{if(e.target===modal)modal.classList.remove("open")};document.onkeydown=e=>{if(e.key==="Escape")modal.classList.remove("open")}
}
function nav(){let m=document.getElementById("menu"),n=document.getElementById("nav");m.onclick=()=>{let o=n.classList.toggle("open");m.textContent=o?"×":"☰";m.setAttribute("aria-expanded",o);m.setAttribute("aria-label",o?"Close navigation":"Open navigation")};n.querySelectorAll("a").forEach(a=>a.onclick=()=>{n.classList.remove("open");m.textContent="☰";m.setAttribute("aria-expanded","false");m.setAttribute("aria-label","Open navigation")})}
function newsletter(){let f=document.querySelector("footer form");f.onsubmit=e=>{e.preventDefault();let i=f.querySelector("input"),b=f.querySelector("button");if(!i.checkValidity())return i.reportValidity();i.value="You're on the list!";i.disabled=true;b.textContent="✓";b.disabled=true}}
