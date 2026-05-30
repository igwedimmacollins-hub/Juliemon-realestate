const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const cta = document.querySelector('.header__cta');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  
  if (menuOpen) {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '72px';
    nav.style.left = '0';
    nav.style.width = '100%';
    nav.style.background = 'white';
    nav.style.padding = '24px';
    nav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    cta.style.display = 'block';
    hamburger.classList.add('active');
  } else {
    nav.style.display = 'none';
    cta.style.display = 'none';
    hamburger.classList.remove('active');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && menuOpen) {
    nav.removeAttribute('style');
    cta.removeAttribute('style');
    hamburger.classList.remove('active');
    menuOpen = false;
  }
});
