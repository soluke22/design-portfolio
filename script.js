document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Collapsible Project Sections
    const projectHeaders = document.querySelectorAll('.project-header');
    projectHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // Dropdown functionality
    const dropbtn = document.querySelector('.dropbtn');
    if (dropbtn) {
        dropbtn.addEventListener('click', () => {
            window.location.href = 'index.html#projects';
        });
    }
});
