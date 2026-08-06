// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Tutup menu saat klik link di mobile
document.querySelectorAll('.nav-menu ul li a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

// ===== NAVBAR ACTIVE LINK (scroll spy) =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-menu ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 90;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

  // ===== TOMBOL PANAH KE ATAS =====
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (window.scrollY > 400) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

// ===== SCROLL TO TOP =====
document.getElementById('scrollTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== ANIMASI KETIKA ELEMEN MASUK VIEWPORT (Intersection Observer) =====
const animateElements = document.querySelectorAll('.tentang-card, .galeri-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -20px 0px'
});

animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});

// ===== PREVENT DEFAULT UNTUK GAMBAR YANG MUNGKIN MISS =====
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    this.style.display = 'none';
  });
});

console.log('🚀 Pemuda Pemudi RW 06 | BTN Lintas Asri');
console.log('📍 Muara Bungo · Bungo Dani · Sungai Kerjan');