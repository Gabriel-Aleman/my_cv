const { not } = require("xstate");

// Add smooth scrolling and entrance animations
document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Add click effects to interest cards
    document.querySelectorAll('.interest-card').forEach(card => {
        card.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Add hover effect to postgrad tags
    document.querySelectorAll('.postgrad-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });

        tag.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(-2px) scale(1)';
        });
    });

    // Parallax effect for floating elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-element');

        parallaxElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
});

//SIDEBAR:
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
    // Obtener el botón
    const boton = document.getElementById("botonDescargaCV");

    // Alternar visibilidad
    if (boton.style.visibility === "hidden") {
        boton.style.visibility = "visible";
    } else {
        boton.style.visibility = "hidden";
    }

    console.log("Hola mundo");
}
