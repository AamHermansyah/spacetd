// Start - Untuk animasi text parallax

// Target elemen yang akan diamati dengan class tertentu.
const observerElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, button, .parallax-text-init');

// Konfigurasi Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px 0px',
  threshold: 0
};

// Fungsi callback Intersection Observer
function handleIntersect(entries) {
  entries.forEach((entry) => {
    // Jika terjadi intersect
    if (entry.isIntersecting) {
      entry.target.classList.add('parallax-text');
    }
  });
}

// Membuat objek Intersection Observer untuk setiap elemen
observerElements.forEach((element) => {
  const observer = new IntersectionObserver(handleIntersect, observerOptions);
  observer.observe(element);
});

// End - Untuk animasi text parallax

// Start - menambahkan bg pada header ketika scroll
window.addEventListener('scroll', function(e) {
  const header = this.document.querySelector('header');
  header.classList.toggle('with-bg', window.scrollY > 0);
});
// End - menambahkan bg pada header ketika scroll