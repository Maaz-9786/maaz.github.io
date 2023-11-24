gsap.registerPlugin(ScrollTrigger)
gsap.from(".up", {
    scrollTrigger: {
        trigger: ".up",
        start: " 80%",
    },
    y: 200,
    duration: 1,
    opacity: 0,
});

gsap.from(".projectsect", {
    scrollTrigger: {
        trigger: ".projectsect",
        start: " 80%",
    },
    y: 200,
    duration: 1,
    opacity: 0,
});



gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".project-card",
    },
    x: function (index) {
        // Set the initial x position based on the index
        return index % 2 === 0 ? -100 : 100;
    },
    duration: 0.5,
    opacity: 0,
    stagger: 0.5
}
);





document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            if (targetId) {
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
