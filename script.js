document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const form = document.querySelector("form");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const animatedElements = document.querySelectorAll(
        ".card, .price-card, .checklist p, .process span, .hero-stats div"
    );

    animatedElements.forEach((el) => {
        el.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.15
    });

    animatedElements.forEach((el) => observer.observe(el));

    if (form) {
        form.addEventListener("submit", () => {
            const button = form.querySelector("button");
            button.textContent = "Demande en cours d'envoi...";
        });
    }
});
