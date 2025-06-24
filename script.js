document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      if (entry.target.classList.contains('profile-img')) {
        entry.target.classList.remove('hidden');
        entry.target.classList.add('reveal');
      }
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.section-heading').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

document.querySelectorAll('.stack-category, .main-heading, .lead, .profile-img').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#1c1429';
  } else {
    navbar.style.backgroundColor = 'rgb(38, 31, 51)';
  }
});

window.addEventListener('load', function () {
  const toggleBtn = document.getElementById('toggleReadMore');
  const readMoreCollapse = document.getElementById('readMore');
  const toggleText = toggleBtn.querySelector('.toggle-text');
  const toggleIcon = toggleBtn.querySelector('.toggle-icon');

  if (!toggleBtn || !readMoreCollapse) return;

  readMoreCollapse.addEventListener('shown.bs.collapse', function () {
    toggleText.textContent = 'Show Less';
    toggleIcon.classList.remove('bi-chevron-down');
    toggleIcon.classList.add('bi-chevron-up');

    setTimeout(() => {
      readMoreCollapse.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  });

  readMoreCollapse.addEventListener('hidden.bs.collapse', function () {
    toggleText.textContent = 'Read More';
    toggleIcon.classList.remove('bi-chevron-up');
    toggleIcon.classList.add('bi-chevron-down');
  });
});

document.querySelectorAll('.icon-card').forEach(card => {
  card.classList.add('hidden'); 
  observer.observe(card); 
});