const menuToggle=document.getElementById('menuToggle');
const navMenu=document.getElementById('navMenu');
menuToggle.addEventListener('click',()=>{
  const open=navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',open);
});
navMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  navMenu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');
}));
window.addEventListener('scroll',()=>{
  const total=document.documentElement.scrollHeight-window.innerHeight;
  const pct=total>0?(window.scrollY/total)*100:0;
  document.getElementById('scrollProgress').style.width=pct+'%';
});
const videos=['1000208320.mp4','1000208324.mp4','1000208849.mp4'];
const videoGrid=document.getElementById('videoGrid');
videos.forEach((name,index)=>{
  const video=document.createElement('video');
  video.src='videos/'+name;
  video.controls=true;
  video.preload='metadata';
  video.playsInline=true;
  video.setAttribute('aria-label','Vídeo da preparação de 2026 '+(index+1));
  videoGrid.appendChild(video);
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll('.section-label,.chapter-head,.chapter-story,.gallery figure,.begin-gallery,.belief-text,.video-heading').forEach(el=>{
  el.classList.add('reveal');observer.observe(el);
});
const lightbox=document.getElementById('lightbox');
const lightboxImage=document.getElementById('lightboxImage');
document.querySelectorAll('.gallery img,.begin-gallery img,.rio-photo img').forEach(img=>{
  img.style.cursor='zoom-in';
  img.addEventListener('click',()=>{lightboxImage.src=img.src;lightboxImage.alt=img.alt;lightbox.showModal()});
});
document.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()});
