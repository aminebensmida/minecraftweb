document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const table = entry.target.querySelector('.animated-table');
                table.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
