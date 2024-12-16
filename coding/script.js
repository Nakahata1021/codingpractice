document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
});

document.querySelectorAll('.accordion-collapse').forEach((accordion) => {
    accordion.addEventListener('shown.bs.collapse', (event) => {
        const items = event.target.querySelectorAll('li');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 200); // 各行200msずつ遅らせる
        });
    });

    accordion.addEventListener('hide.bs.collapse', (event) => {
        const items = event.target.querySelectorAll('li');
        items.forEach((item) => {
            item.classList.remove('animate');
        });
    });
});

document.querySelectorAll('.navbar-toggler').forEach(button => {
    button.addEventListener('click', () => {
        const navbarContent = document.getElementById('navbarContent');
        if (navbarContent.classList.contains('show')) {
            navbarContent.classList.add('show');
        }
    });
});