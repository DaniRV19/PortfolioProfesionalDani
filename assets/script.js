// Typed.js animation
document.addEventListener('DOMContentLoaded', () => {
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
});




// Skills data
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
            {name: 'Laravel', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png', desc: 'Framework PHP elegante y potente.'}
        ];

        // Populate skills
        function populateSkills() {
            const languagesGrid = document.getElementById('languages-grid');
            const toolsGrid = document.getElementById('tools-grid');

            languages.forEach(lang => {
                const skillCard = createSkillCard(lang);
                languagesGrid.appendChild(skillCard);
            });

            tools.forEach(tool => {
                const skillCard = createSkillCard(tool);
                toolsGrid.appendChild(skillCard);
            });
        }

        function createSkillCard(skill) {
            const card = document.createElement('div');
            card.className = 'bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 text-center group cursor-pointer';
            card.innerHTML = `
                <img src="${skill.icon}" alt="${skill.name}" class="h-12 mx-auto mb-3 group-hover:scale-110 transition" />
                <p class="text-md font-semibold">${skill.name}</p>
            `;
            
            card.addEventListener('click', () => openModal(skill.name, skill.desc));
            return card;
        }

        function openModal(title, desc) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDesc').textContent = desc;
            document.getElementById('skillModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('skillModal').classList.add('hidden');
        }

        // Event listeners
        document.getElementById('closeModal').addEventListener('click', closeModal);
        document.getElementById('skillModal').addEventListener('click', (e) => {
            if (e.target.id === 'skillModal') closeModal();
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', populateSkills);














// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")

      // Toggle icon
      const icon = mobileMenuBtn.querySelector("i")
      if (mobileMenu.classList.contains("hidden")) {
        icon.className = "fas fa-bars text-xl"
      } else {
        icon.className = "fas fa-times text-xl"
      }
    })
  }

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu?.querySelectorAll("a")
  mobileLinks?.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
      const icon = mobileMenuBtn.querySelector("i")
      icon.className = "fas fa-bars text-xl"
    })
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to navigation
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav")
  if (window.scrollY > 50) {
    nav?.classList.add("bg-white/95")
    nav?.classList.remove("bg-white/90")
  } else {
    nav?.classList.add("bg-white/90")
    nav?.classList.remove("bg-white/95")
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in-up")
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".hover-lift, .bg-white").forEach((el) => {
  observer.observe(el)
})

// Form validation
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]")
  let isValid = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false
      input.classList.add("border-red-500")
      input.classList.remove("border-gray-300")
    } else {
      input.classList.remove("border-red-500")
      input.classList.add("border-gray-300")
    }
  })

  return isValid
}

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Add loading state to buttons
function addLoadingState(button) {
  const originalText = button.textContent
  button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Enviando...'
  button.disabled = true
  button.classList.add("opacity-75")

  return () => {
    button.textContent = originalText
    button.disabled = false
    button.classList.remove("opacity-75")
  }
}

// Utility function for showing notifications
function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = `fixed top-20 right-4 p-4 rounded-lg shadow-lg z-50 ${
    type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
  }`
  notification.textContent = message

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 5000)
}

// Keyboard navigation for modals
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.querySelector(".fixed.inset-0:not(.hidden)")
    if (modal) {
      modal.classList.add("hidden")
    }
  }
})

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      if (img.dataset.src) {
        img.src = img.dataset.src
        img.removeAttribute("data-src")
        imageObserver.unobserve(img)
      }
    }
  })
})

document.querySelectorAll("img[data-src]").forEach((img) => {
  imageObserver.observe(img)
})

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
  // Scroll handling logic here
}, 10)

window.addEventListener("scroll", debouncedScrollHandler)
