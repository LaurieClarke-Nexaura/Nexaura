
const btn=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
if(btn&&links){
  btn.addEventListener('click',()=>{
    const open=links.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    links.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  }));
}
