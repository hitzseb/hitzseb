document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');

    function updateActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Check if the section is in the viewport
            if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active', 'text-secondary-emphasis', 'text-decoration-underline');
            link.querySelector('.visually-hidden').textContent = '';

            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active', 'text-secondary-emphasis', 'text-decoration-underline');
                link.querySelector('.visually-hidden').textContent = '(current)';
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // Initial update to set the active link based on the current scroll position
    updateActiveLink();

    // Add click event to update the active link when clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => {
                link.classList.remove('active', 'text-secondary-emphasis', 'text-decoration-underline');
                link.querySelector('.visually-hidden').textContent = '';
            });

            link.classList.add('active', 'text-secondary-emphasis', 'text-decoration-underline');
            link.querySelector('.visually-hidden').textContent = '(current)';
        });
    });
});

const skills = [
    { src: "/images/java.svg", name: "Java" },
    { src: "/images/php.svg", name: "PHP" },
    { src: "/images/javascript.svg", name: "JavaScript" },
    { src: "/images/html.svg", name: "HTML" },
    { src: "/images/css.svg", name: "CSS" },
    { src: "/images/mysql.svg", name: "MySQL" },
    { src: "/images/spring.svg", name: "Spring" },
    { src: "/images/wordpress.svg", name: "Wordpress" },
    { src: "/images/bootstrap.svg", name: "Bootstrap" },
    { src: "/images/git.svg", name: "Git" }
  ];