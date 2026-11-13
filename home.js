'use strict';
(()=>{
 const header=document.querySelector('.home-navigation');
 document.addEventListener('click',event=>{
  if(event.target.closest('[data-go-courses]'))location.href='courses.html';
  const menu=event.target.closest('.home-menu-toggle');
  if(menu){const open=header.toggleAttribute('data-open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');}
  const motion=event.target.closest('.motion-toggle');
  if(motion){const paused=document.querySelector('.belong-home').classList.toggle('motion-paused');motion.setAttribute('aria-pressed',String(paused));motion.setAttribute('aria-label',paused?'Resume portrait animation':'Pause portrait animation');motion.querySelector('span').textContent=paused?'Resume motion':'Pause motion';motion.querySelector('svg').innerHTML=paused?'<path d="m7 4 9 6-9 6Z" fill="currentColor"/>':'<path d="M7 5v10M13 5v10" stroke="currentColor" stroke-width="2"/>';}
 });
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&header.hasAttribute('data-open')){header.removeAttribute('data-open');const toggle=header.querySelector('.home-menu-toggle');toggle.setAttribute('aria-expanded','false');toggle.focus();}});
})();