/* NEXORA interactions: countdown, schedule tabs, speaker modal and mobile nav. */
document.addEventListener("DOMContentLoaded",()=>{countdown();tabs();speakers();nav();newsletter()});

/* Change this ISO date to the exact event start time. */
function countdown(){
 const target=new Date("2027-10-14T09:00:00-05:00").getTime();
 const ids=["d","h","m","s"];
 let timer=null;
 function tick(){
  const remaining=Math.max(0,target-Date.now());
  const totalSeconds=Math.floor(remaining/1000);
  const values=[Math.floor(totalSeconds/86400),Math.floor(totalSeconds%86400/3600),Math.floor(totalSeconds%3600/60),totalSeconds%60];
  ids.forEach((id,i)=>{const el=document.getElementById(id);if(el)el.textContent=String(values[i]).padStart(2,"0")});
  if(!remaining&&timer){clearInterval(timer);timer=null}
 }
 tick();
 if(target>Date.now())timer=setInterval(tick,1000);
}

/* Each button's data-day matches a schedule panel's data-panel. */
function tabs(){
 const buttons=document.querySelectorAll(".tabs button");
 const panels=document.querySelectorAll(".schedule");
 buttons.forEach(button=>button.addEventListener("click",()=>{
  buttons.forEach(item=>{item.classList.remove("active");item.setAttribute("aria-selected","false");item.setAttribute("tabindex","-1")});
  panels.forEach(panel=>{panel.classList.remove("active");panel.setAttribute("hidden","")});
  button.classList.add("active");
  button.setAttribute("aria-selected","true");
  button.setAttribute("tabindex","0");
  const panel=document.querySelector(`[data-panel="${button.dataset.day}"]`);
  if(panel){panel.classList.add("active");panel.removeAttribute("hidden");button.setAttribute("aria-controls",panel.id)}
 }));
 buttons.forEach((button,index)=>button.addEventListener("keydown",event=>{
  if(!["ArrowRight","ArrowLeft","Home","End"].includes(event.key))return;
  event.preventDefault();
  let next=index;
  if(event.key==="ArrowRight")next=(index+1)%buttons.length;
  if(event.key==="ArrowLeft")next=(index-1+buttons.length)%buttons.length;
  if(event.key==="Home")next=0;
  if(event.key==="End")next=buttons.length-1;
  buttons[next].focus();
  buttons[next].click();
 }));
}

/* Speaker data is kept here so cards stay lightweight and reusable. */
function speakers(){
 const data={
  maya:["Maya Chen","Founder, Northstar AI","Maya builds practical AI systems for teams turning emerging technology into useful products."],
  james:["James Okoro","Design Director, Vertex","James leads product teams focused on making complex technology feel simple."],
  rhea:["Rhea Nair","Creator & Researcher","Rhea explores how technology changes culture, creativity and the way people learn."],
  tomas:["Tomás Silva","Founder, FWD_ Labs","Tomás works on tools that give small teams the leverage of much larger organizations."],
  lena:["Lena Moreau","CEO, Common Ground","Lena turns ambitious missions into durable companies, with a focus on leadership and sustainable growth."],
  niko:["Niko Vale","Artist & Technologist","Niko creates interactive installations exploring the boundary between physical and digital systems."]
 };
 const modal=document.getElementById("modal");
 const dialog=modal?.querySelector(".dialog");
 const close=document.getElementById("close");
 if(!modal||!dialog||!close)return;
 let opener=null;

 function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
  if(opener){opener.focus();opener=null}
 }

 document.querySelectorAll(".speakers button").forEach(card=>card.addEventListener("click",()=>{
  const d=data[card.dataset.speaker];
  if(!d)return;
  opener=card;
  document.getElementById("name").textContent=d[0];
  document.getElementById("role").textContent=d[1];
  document.getElementById("bio").textContent=d[2];
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
  close.focus();
 }));

 close.addEventListener("click",closeModal);
 modal.addEventListener("click",event=>{if(event.target===modal)closeModal()});
 modal.addEventListener("keydown",event=>{
  if(event.key==="Escape"){event.preventDefault();closeModal();return}
  if(event.key!=="Tab")return;
  const focusable=dialog.querySelectorAll("a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex='-1'])");
  if(!focusable.length)return;
  const first=focusable[0];
  const last=focusable[focusable.length-1];
  if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
  else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
 });
}

/* Mobile navigation includes Escape/outside-click dismissal, focus management and scroll locking. */
function nav(){
 const menu=document.getElementById("menu");
 const navigation=document.getElementById("nav");
 if(!menu||!navigation)return;
 const links=[...navigation.querySelectorAll("a")];
 let previousFocus=null;

 function closeNav({restoreFocus=true}={}){
  const wasOpen=navigation.classList.contains("open");
  navigation.classList.remove("open");
  document.body.classList.remove("nav-open");
  menu.textContent="☰";
  menu.setAttribute("aria-expanded","false");
  menu.setAttribute("aria-label","Open navigation");
  if(restoreFocus&&wasOpen)menu.focus();
 }

 function openNav(){
  previousFocus=document.activeElement;
  navigation.classList.add("open");
  document.body.classList.add("nav-open");
  menu.textContent="×";
  menu.setAttribute("aria-expanded","true");
  menu.setAttribute("aria-label","Close navigation");
  links[0]?.focus();
 }

 menu.addEventListener("click",()=>navigation.classList.contains("open")?closeNav():openNav());
 links.forEach(link=>link.addEventListener("click",()=>closeNav({restoreFocus:false})));

 document.addEventListener("click",event=>{
  if(!navigation.classList.contains("open"))return;
  if(navigation.contains(event.target)||menu.contains(event.target))return;
  closeNav();
 });

 document.addEventListener("keydown",event=>{
  if(!navigation.classList.contains("open"))return;
  if(event.key==="Escape"){event.preventDefault();closeNav();return}
  if(event.key!=="Tab")return;
  const focusable=[menu,...links].filter(el=>el&&el.offsetParent!==null);
  const first=links[0];
  const last=links.at(-1);
  if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();return}
  if(!event.shiftKey&&document.activeElement===last){event.preventDefault();menu.focus();return}
  if(previousFocus&&!navigation.contains(document.activeElement)&&document.activeElement!==menu){first?.focus()}
 });

 window.addEventListener("resize",()=>{
  if(window.innerWidth>650)closeNav({restoreFocus:false});
 });
}

/* Demo-only newsletter behavior. */
function newsletter(){
 const form=document.querySelector("footer form");
 if(!form)return;
 form.addEventListener("submit",event=>{
  event.preventDefault();
  const input=form.querySelector("input");
  const button=form.querySelector("button");
  if(!input.checkValidity()){input.reportValidity();return}
  input.value="You're on the list!";
  input.disabled=true;
  button.textContent="✓";
  button.disabled=true;
  form.setAttribute("aria-label","Subscription confirmed");
 });
}
