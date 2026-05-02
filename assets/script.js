// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  const y = window.scrollY + 80;
  sections.forEach(sec => {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${sec.id}`));
    }
  });
}

// Scroll-to-top
const scrollBtn = document.getElementById('scrollTop');
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Reveal on scroll
document.querySelectorAll('.about-wrapper, .tl-item, .proj-card, .ach-card, .contact-info-box, .contact-form, .edu-item').forEach(el => {
  el.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open'));
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('form-msg').textContent = "Thank you! I'll get back to you soon.";
  e.target.reset();
  setTimeout(() => document.getElementById('form-msg').textContent = '', 5000);
}

window.addEventListener('scroll', () => {
  setActiveLink();
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

setActiveLink();
