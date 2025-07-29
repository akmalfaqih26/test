const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggle.innerHTML = document.body.classList.contains('light')
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

document.querySelectorAll('header nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const sections = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => io.observe(section));

const text = "Akmal";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

window.addEventListener('scroll', () => {
  const bars = document.querySelectorAll('.bar div');
  const scrollPos = window.scrollY + window.innerHeight;
  bars.forEach(bar => {
    if (scrollPos > bar.parentElement.offsetTop + 100) {
      bar.style.width = bar.style.width;
    }
  });
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    document.querySelectorAll('.item').forEach(item => {
      item.style.display =
        filter === 'all' || item.classList.contains(filter)
          ? 'block'
          : 'none';
    });
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

const skillBars = document.querySelectorAll('.bar div');
const ioBars = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.dataset.width;
      entry.target.style.width = width + '%';
      ioBars.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => ioBars.observe(bar));

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Pesan terkirim!');
});

//akmalnibos
