/**
 * Portfolio - Interactive Features
 * Handles: mobile navigation, scroll animations, active nav highlighting
 */

(function () {
    'use strict';

    // ==========================================
    // DOM Elements
    // ==========================================

    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');
    const currentYearEl = document.getElementById('current-year');

    // ==========================================
    // Current Year
    // ==========================================

    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // ==========================================
    // Mobile Navigation Toggle
    // ==========================================

    function toggleMobileNav() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    function closeMobileNav() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }

    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }

    // Close mobile nav when a link is clicked
    navLinks.forEach(function (link) {
        link.addEventListener('click', closeMobileNav);
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function (event) {
        if (
            navMenu.classList.contains('active') &&
            !navMenu.contains(event.target) &&
            !navToggle.contains(event.target)
        ) {
            closeMobileNav();
        }
    });

    // Close mobile nav on Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileNav();
            navToggle.focus();
        }
    });

    // ==========================================
    // Navbar Scroll Effect
    // ==========================================

    let lastScrollY = 0;
    let ticking = false;

    function onScroll() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function () {
                handleScroll(lastScrollY);
                ticking = false;
            });
            ticking = true;
        }
    }

    function handleScroll(scrollY) {
        // Add scrolled class after 50px
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link
        updateActiveNav(scrollY);
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ==========================================
    // Active Navigation Link
    // ==========================================

    function updateActiveNav(scrollY) {
        let currentSection = '';

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop - 100;
            var sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Initial check
    updateActiveNav(window.scrollY);

    // ==========================================
    // Scroll Reveal Animation
    // ==========================================

    // Check for reduced motion preference
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!prefersReducedMotion.matches) {
        // Add fade-in class to elements that should animate
        var animatableElements = document.querySelectorAll(
            '.section-title, .section-subtitle, .about-text p, .skill-category, ' +
            '.project-card, .lab-card, .education-card, .cert-card, .contact-content, ' +
            '.hero-greeting, .hero-name, .hero-title, .hero-description, .hero-buttons'
        );

        animatableElements.forEach(function (el) {
            el.classList.add('fade-in');
        });

        // Intersection Observer for reveal
        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(function (el) {
            observer.observe(el);
        });
    }

    // ==========================================
    // Smooth Scroll for anchor links (fallback)
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                event.preventDefault();
                var navHeight = navbar.offsetHeight;
                var targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
                });
            }
        });
    });

    // ==========================================
    // Certificate Lightbox
    // ==========================================

    var lightbox = document.getElementById('cert-lightbox');
    var lightboxImage = lightbox ? lightbox.querySelector('.lightbox-image') : null;
    var lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

    function openLightbox(src, alt) {
        if (!lightbox || !lightboxImage) return;
        lightboxImage.src = src;
        lightboxImage.alt = alt || 'Certificate preview';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Click on cert card to open lightbox
    document.querySelectorAll('.cert-card[data-cert-src]').forEach(function (card) {
        card.addEventListener('click', function (event) {
            // Don't open lightbox if user clicked the View Credential link
            if (event.target.closest('.cert-btn')) return;
            var src = card.getAttribute('data-cert-src');
            var alt = card.getAttribute('data-cert-alt') || 'Certificate preview';
            if (src) {
                openLightbox(src, alt);
            }
        });
    });

    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

})();