// ===== Mobile Navigation =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Number Counter Animation =====
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target === 98 ? '%' : '+');
        }
    };
    
    updateCounter();
};

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    counterObserver.observe(stat);
});

// ===== Chart Animation =====
const chartBars = document.querySelectorAll('.chart-bar');

const animateChart = () => {
    chartBars.forEach(bar => {
        const height = bar.getAttribute('data-height');
        const fill = bar.querySelector('.bar-fill');
        fill.style.height = height + '%';
    });
};

const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateChart();
            chartObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

chartBars.forEach(bar => {
    chartObserver.observe(bar);
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for scroll animation
document.querySelectorAll('.about-card, .course-card, .teacher-card, .testimonial-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    scrollObserver.observe(el);
});

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Show success modal
        successModal.classList.add('active');
        
        // Reset form
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// ===== Close Modal =====
function closeModal() {
    successModal.classList.remove('active');
}

// Close modal when clicking outside
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeModal();
    }
});

// ===== Phone Input Mask =====
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
        if (value.length <= 2) {
            value = '+998 ' + value;
        } else if (value.length <= 5) {
            value = '+998 ' + value.slice(0, 2) + ' ' + value.slice(2);
        } else if (value.length <= 8) {
            value = '+998 ' + value.slice(0, 2) + ' ' + value.slice(2, 5) + ' ' + value.slice(5);
        } else {
            value = '+998 ' + value.slice(0, 2) + ' ' + value.slice(2, 5) + ' ' + value.slice(5, 7) + ' ' + value.slice(7, 9);
        }
    }
    
    e.target.value = value;
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Parallax Effect for Hero Shapes =====
const shapes = document.querySelectorAll('.shape');

window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const x = (window.innerWidth / 2 - e.clientX) / speed;
        const y = (window.innerHeight / 2 - e.clientY) / speed;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===== Preloader (Optional) =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body for any initial animations
    document.body.classList.add('loaded');
});
