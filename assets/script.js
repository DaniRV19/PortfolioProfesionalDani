// ===========================
// Inicialización general
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    initTyped();
    initSkills();
    initMobileMenu();
    initSmoothScroll();
    initNavbarScrollEffect();
    initIntersectionObserver();
    initFormValidation();
    initKeyboardModalClose();
    initLazyLoading();
});

// ===========================
// Typed.js (solo en index)
// ===========================

function initTyped() {
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        new Typed('#typed-text', {
            strings: [
                "Apasionado por la tecnología y la creatividad.",
                "Con actitud proactiva, resolutiva y positiva.",
                "¿Buscas talento? ¡Aquí tienes a tu desarrollador!"
            ],
            typeSpeed: 45,
            backSpeed: 20,
            loop: true
        });
    }
}

// ===========================
// Habilidades (solo en skills.html)
// ===========================

function initSkills() {
    if (!document.getElementById('languages-grid')) return;

    const languages = [
        {name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', desc: 'Lenguaje de marcado utilizado para estructurar páginas web.'},
        {name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', desc: 'Lenguaje de estilo que da diseño a las páginas web.'},
        {name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: 'Lenguaje de programación que añade interactividad a las webs.'},
        {name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', desc: 'Lenguaje de backend ampliamente usado en desarrollo web.'},
        {name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', desc: 'Lenguaje para gestionar bases de datos.'},
        {name: 'COBOL', icon: 'https://cdn.goconqr.com/uploads/slide_property/image/611324/desktop_ea5b95f6-8283-4618-8a97-26066b893687.jpg', desc: 'Lenguaje clásico usado en banca y grandes sistemas legacy.'},
        {name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', desc: 'Lenguaje multiplataforma muy utilizado en empresas.'},
        {name: 'JSON', icon: 'https://img.icons8.com/color/48/json--v1.png', desc: 'Formato ligero para intercambio de datos.'}
    ];

    const tools = [
        {name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', desc: 'Framework CSS para desarrollar sitios web responsive.'},
        {name: 'Tailwind', icon: 'https://cdnblog.webkul.com/blog/wp-content/uploads/2024/05/tailwindcss-1633184775.webp', desc: 'Framework CSS utility-first moderno.'},
        {name: 'VirtualBox', icon: 'https://img.icons8.com/color/48/virtualbox.png', desc: 'Herramienta de virtualización de sistemas operativos.'},
        {name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', desc: 'Plataforma para contenedores que facilita el despliegue.'},
        {name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', desc: 'Sistema de gestión de bases de datos relacionales.'},
        {name: 'Alpine', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/alpinejs/alpinejs-original.svg', desc: 'Framework ligero para interactividad con JavaScript.'},
        {name: 'Node', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', desc: 'Entorno para ejecutar JS en el servidor.'},
        {name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', desc: 'Sistema de control de versiones distribuido.'},
        {name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', desc: 'Plataforma para alojar y colaborar en código.'},
        {name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', desc: 'Herramienta de diseño colaborativo para UI.'},
        {name: 'Laravel', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png', desc: 'Framework PHP elegante y potente.'},
        {name: 'Vue.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', desc: 'Framework progresivo de JavaScript para construir interfaces de usuario.'}
    ];

    populateSkills(languages, 'languages-grid');
    populateSkills(tools, 'tools-grid');

    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('skillModal').addEventListener('click', e => {
        if (e.target.id === 'skillModal') closeModal();
    });
}

function populateSkills(skillsArray, gridId) {
    const grid = document.getElementById(gridId);
    skillsArray.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition text-center group cursor-pointer';
        card.innerHTML = `<img src="${skill.icon}" alt="${skill.name}" class="h-12 mx-auto mb-3 group-hover:scale-110 transition" /><p class="text-md font-semibold">${skill.name}</p>`;
        card.addEventListener('click', () => openModal(skill.name, skill.desc));
        grid.appendChild(card);
    });
}

function openModal(title, desc) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('skillModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('skillModal').classList.add('hidden');
}

// ===========================
// Menú móvil
// ===========================

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        const icon = btn.querySelector('i');
        icon.className = menu.classList.contains('hidden') ? 'fas fa-bars text-xl' : 'fas fa-times text-xl';
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            btn.querySelector('i').className = 'fas fa-bars text-xl';
        });
    });
}

// ===========================
// Smooth scroll (solo si hay anclas internas)
// ===========================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ===========================
// Cambio de opacidad nav al hacer scroll
// ===========================

function initNavbarScrollEffect() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav?.classList.add('bg-white/95');
            nav?.classList.remove('bg-white/90');
        } else {
            nav?.classList.add('bg-white/90');
            nav?.classList.remove('bg-white/95');
        }
    });
}

// ===========================
// Intersection observer (animaciones)
// ===========================

function initIntersectionObserver() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.hover-lift, .bg-white').forEach(el => observer.observe(el));
}

// ===========================
// Validación de formularios (si los usas en futuro)
// ===========================

function initFormValidation() {
    // Aquí puedes añadir validaciones de formulario si creas un form más adelante.
}

// ===========================
// Cerrar modales con Escape
// ===========================

function initKeyboardModalClose() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.fixed.inset-0:not(.hidden)');
            if (modal) modal.classList.add('hidden');
        }
    });
}

// ===========================
// Lazy loading imágenes
// ===========================

function initLazyLoading() {
    const imageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
