const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.nav nav a')];
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(s=>{if(scrollY>=s.offsetTop-180) current=s.id});
  navLinks.forEach(a=>a.style.color=a.getAttribute('href')==='#'+current?'#fff':'');
});
