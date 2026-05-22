// hero waveform — deterministic bars
const wave = document.getElementById('wave');
if (wave){
  for (let i=0;i<64;i++){
    const b=document.createElement('i');
    const h=0.2+0.8*Math.abs(Math.sin(i*0.5)*Math.cos(i*0.17));
    b.style.height=(h*100)+'%';
    b.style.animationDelay=(i*0.045)+'s';
    b.style.animationDuration=(1.1+(i%5)*0.18)+'s';
    wave.appendChild(b);
  }
}
// scroll reveals
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
