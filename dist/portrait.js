const drawer=document.getElementById('drawer');
function showDrawer(){setTimeout(()=>{drawer.classList.add('open');},0);}
document.querySelector('.drawer-close').onclick=()=>drawer.classList.remove('open');
drawer.addEventListener('click',e=>{if(e.target===drawer){const r=drawer.getBoundingClientRect();if(e.clientY<r.top||e.clientX<r.left||e.clientX>r.right)drawer.classList.remove('open');}});
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||b.disabled)return;if(b.dataset.seed){drawer.classList.remove('open');toast('씨앗을 골랐어요. 빈 화분을 톡 눌러주세요.');}if(b.dataset.pot!==undefined){const p=state.pots[Number(b.dataset.pot)];if(!p&&state.seeds.every(s=>s.id!==selected||s.count<=0)){showDrawer();return;}const slot=document.querySelectorAll('.pot-slot')[Number(b.dataset.pot)];if(slot){const fx=document.createElement('span');fx.className='care-fx';fx.textContent=p?.pruned?'✦':p?.watered?'💧':'🌱';slot.appendChild(fx);setTimeout(()=>fx.remove(),1100);}}});
function sizeGame(){const scale=Math.min(1,window.innerWidth/390,window.innerHeight/740);const game=document.querySelector('.game');game.style.height=Math.min(920,window.innerHeight/scale)+'px';game.style.transform='translate(-50%,-50%) scale('+scale+')';}sizeGame();window.addEventListener('resize',sizeGame);





document.addEventListener('keydown',e=>{if(e.key==='Escape')drawer.classList.remove('open');});
