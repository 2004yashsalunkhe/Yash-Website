document.addEventListener('DOMContentLoaded',()=>{
 const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
 const menu=document.getElementById('mobile-menu'),menuBtn=document.getElementById('menu-btn');
 menuBtn?.addEventListener('click',()=>menu.classList.toggle('open'));
 menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
 if(typeof gsap!=='undefined'&&!reduced){
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.loader i:after',{width:'100%',duration:1.1,ease:'power2.inOut'});
  gsap.to('#loader',{autoAlpha:0,duration:.6,delay:1.15,onComplete:()=>document.getElementById('loader')?.remove()});
  gsap.timeline({delay:1.35}).from('.eyebrow',{y:20,opacity:0,duration:.5}).from('h1',{y:70,opacity:0,duration:.9,ease:'power4.out'},'-.2').from('.hero-text',{y:25,opacity:0,duration:.6},'-.45').from('.actions .btn',{y:20,opacity:0,stagger:.12,duration:.5},'-.25').from('.meta',{opacity:0,duration:.4},'-.2');
  gsap.to('.orbit.a',{rotation:5,duration:8,repeat:-1,yoyo:true,ease:'sine.inOut'});gsap.to('.orbit.b',{rotation:28,duration:6,repeat:-1,yoyo:true,ease:'sine.inOut'});gsap.to('.art-square',{y:15,x:-10,duration:4,repeat:-1,yoyo:true,ease:'sine.inOut'});
  document.querySelectorAll('.reveal').forEach(el=>gsap.to(el,{opacity:1,y:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 87%',once:true}}));
  if(matchMedia('(pointer:fine)').matches){const dot=document.querySelector('.cursor-dot'),ring=document.querySelector('.cursor-ring');addEventListener('mousemove',e=>{gsap.to(dot,{x:e.clientX,y:e.clientY,duration:.05});gsap.to(ring,{x:e.clientX,y:e.clientY,duration:.18});dot.style.opacity=1;ring.style.opacity=.65});document.querySelectorAll('a,button').forEach(x=>{x.addEventListener('mouseenter',()=>gsap.to(ring,{scale:1.5,duration:.2}));x.addEventListener('mouseleave',()=>gsap.to(ring,{scale:1,duration:.2}))});}
 }else{document.getElementById('loader')?.remove();document.querySelectorAll('.reveal').forEach(x=>{x.style.opacity=1;x.style.transform='none'})}
});
