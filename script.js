const elements = document.querySelectorAll('.item-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-load');
            // Optional: stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 }); // trigger when 10% of the element is visible
elements.forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Optionally update active class
            document.querySelectorAll('.category-nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        }
    });
});
