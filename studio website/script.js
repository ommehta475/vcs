// ================================
// NAVIGATION & SMOOTH SCROLLING
// ================================
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
    }
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

function toggleMenu() {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
}

function closeMenu() {
    navMenu.style.display = 'none';
    hamburger.classList.remove('active');
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        closeMenu();
    }
});

// ================================
// CONTACT FORM HANDLING
// ================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[placeholder="Your Name"]').value;
        const email = this.querySelector('input[placeholder="Your Email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Validate form
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        console.log('Form submitted:', { name, email, message });
        alert(`Thank you, ${name}! We will get back to you soon at ${email}`);
        
        // Reset form
        this.reset();
    });
}

// ================================
// SCROLL ANIMATIONS
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe pricing cards
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ================================
// NAVBAR SCROLL EFFECT
// ================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ================================
// ADD RIPPLE EFFECT TO BUTTONS
// ================================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (e.target.tagName !== 'FORM') {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            // Remove any existing ripple
            const existingRipple = this.querySelector('.ripple');
            if (existingRipple) existingRipple.remove();
            
            this.appendChild(ripple);
        }
    });
});

// Add ripple styling dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ================================
// SMOOTH PARALLAX EFFECT
// ================================
const hero = document.querySelector('.hero');

if (hero) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        if (scrollPosition < window.innerHeight) {
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
}

// ================================
// PAGE LOAD ANIMATION
// ================================
window.addEventListener('load', () => {
    // Trigger fade-in animations on page load
    document.body.style.opacity = '1';
    
    // Add loading complete class
    document.body.classList.add('loaded');
});

// ================================
// UTILITY: LOG ANALYTICS
// ================================
function trackEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // You can integrate with Google Analytics or other tracking services here
    // Example: gtag('event', eventName, eventData);
}

// Track section views
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackEvent('section_viewed', { section: entry.target.id });
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(section);
});

console.log('Visual Capture Studio - Website loaded successfully');
