const $=id=>document.getElementById(id);

// floating decorations
['🎈','✨','💙','🦋','⭐','🎀'].forEach(e=>{for(let k=0;k<3;k++){const s=document.createElement('div');s.className='fl';s.textContent=e;
 s.style.left=Math.random()*95+'vw';s.style.fontSize=16+Math.random()*22+'px';
 s.style.animationDuration=14+Math.random()*14+'s';s.style.animationDelay=-Math.random()*20+'s';document.body.appendChild(s)}});

function confetti(){const c=['#2f6bff','#8ec5ff','#fff','#1a3fa8'];
 for(let i=0;i<90;i++){const d=document.createElement('div');d.className='cf';
  d.style.left=Math.random()*100+'vw';d.style.background=c[i%4];d.style.animationDuration=2+Math.random()*2.5+'s';
  document.body.appendChild(d);setTimeout(()=>d.remove(),5000)}}

// saved name (set on the login page)
function getName(){try{return localStorage.getItem('b18name')||''}catch(e){return ''}}

// pop-up viewer (used by gallery and videos)
function openM(h){let m=$('modal');
 if(!m){m=document.createElement('div');m.id='modal';
  m.innerHTML='<div class="in"><div id="mc"></div><button class="btn" onclick="closeM()">Close ✕</button></div>';
  m.onclick=e=>{if(e.target===m)closeM()};document.body.appendChild(m)}
 $('mc').innerHTML=h;m.style.display='flex'}
function closeM(){$('mc').innerHTML='';$('modal').style.display='none'}
