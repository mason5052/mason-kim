document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initParticles();
    initSmoothScroll();
    initActiveNavigation();
    sortProjects();
    initScrollAnimations();
    initProjectFilters();
});

function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 5000);
    }

    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => createParticle(), i * 100);
    }

    setInterval(createParticle, 200);
}

function initSmoothScroll() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
        });
    });

    const logo = document.querySelector('.nav-logo');
    logo.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

function sortProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    const cards = Array.from(container.querySelectorAll('.project-card'));
    cards.sort((a, b) => {
        const weightA = parseInt(a.dataset.weight) || 0;
        const weightB = parseInt(b.dataset.weight) || 0;
        return weightB - weightA;
    });
    cards.forEach(card => container.appendChild(card));
}

function initProjectFilters() {
    const container = document.getElementById('projects-container');
    const filtersBar = document.getElementById('projects-filters');
    if (!container || !filtersBar) return;

    const cards = Array.from(container.querySelectorAll('.project-card'));
    const searchInput = document.getElementById('project-search');
    const categorySelect = document.getElementById('filter-category');
    const statusSelect = document.getElementById('filter-status');
    const startInput = document.getElementById('filter-start');
    const endInput = document.getElementById('filter-end');
    const clearBtn = document.getElementById('filter-clear');

    // Build category options from tags (dedupe, case-insensitive)
    const categorySet = new Set();
    cards.forEach(card => {
        card.querySelectorAll('.tech-tag').forEach(tag => {
            const raw = tag.textContent.trim();
            if (!raw) return;
            // Preserve label for display, standardize value in map
            const key = raw.toLowerCase();
            if (!Array.from(categorySet).some(x => x.key === key)) {
                categorySet.add({ key, label: raw });
            }
        });
    });
    const categories = Array.from(categorySet).sort((a,b) => a.label.localeCompare(b.label));
    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat.key;
        opt.textContent = cat.label;
        categorySelect.appendChild(opt);
    });

    function normal(text) {
        return (text || '').toLowerCase();
    }

    function matchSearch(card, q) {
        if (!q) return true;
        const title = normal(card.querySelector('.project-header h3')?.textContent);
        const desc = normal(card.querySelector('.project-description')?.textContent);
        const tags = Array.from(card.querySelectorAll('.tech-tag')).map(t => normal(t.textContent)).join(' ');
        return [title, desc, tags].some(s => s.includes(q));
    }

    function matchCategory(card, catVal) {
        if (!catVal || catVal === 'all') return true;
        const tags = Array.from(card.querySelectorAll('.tech-tag')).map(t => normal(t.textContent));
        return tags.includes(catVal);
    }

    function matchStatus(card, statusVal) {
        if (!statusVal || statusVal === 'all') return true;
        const status = normal(card.dataset.status);
        return status === statusVal;
    }

    function monthToNum(v) {
        // v like YYYY-MM
        if (!v) return null;
        const [y, m] = v.split('-').map(n => parseInt(n, 10));
        if (!y || !m) return null;
        return y * 12 + (m - 1);
    }

    function cardStartMonth(card) {
        // Prefer data-start; fallback by parsing .project-period text when possible
        const ds = card.dataset.start;
        if (ds) return monthToNum(ds);
        const periodText = card.querySelector('.project-period')?.textContent || '';
        // Try parse patterns like 'Jan 2025 - Present' or single year/month in text
        const m = periodText.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4})/i);
        if (m) {
            const map = {jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};
            return (parseInt(m[2],10) * 12) + (map[m[1].toLowerCase()] - 1);
        }
        const y = periodText.match(/(\d{4})/);
        if (y) return parseInt(y[1], 10) * 12; // assume January
        return null;
    }

    function applyFilters() {
        const q = normal(searchInput.value);
        const catVal = categorySelect.value;
        const statusVal = statusSelect.value;
        const from = monthToNum(startInput.value);
        const to = monthToNum(endInput.value);

        cards.forEach(card => {
            const matches = (
                matchSearch(card, q) &&
                matchCategory(card, catVal) &&
                matchStatus(card, statusVal) &&
                (function() {
                    if (from == null && to == null) return true;
                    const startNum = cardStartMonth(card);
                    if (startNum == null) return false;
                    if (from != null && startNum < from) return false;
                    if (to != null && startNum > to) return false;
                    return true;
                })()
            );
            card.style.display = matches ? '' : 'none';
        });

        const emptyEl = document.getElementById('projects-empty');
        if (emptyEl) {
            const anyVisible = cards.some(c => c.style.display !== 'none');
            emptyEl.style.display = anyVisible ? 'none' : 'block';
        }
    }

    searchInput.addEventListener('input', applyFilters);
    categorySelect.addEventListener('change', applyFilters);
    statusSelect.addEventListener('change', applyFilters);
    startInput.addEventListener('change', applyFilters);
    endInput.addEventListener('change', applyFilters);
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        categorySelect.value = 'all';
        statusSelect.value = 'all';
        startInput.value = '';
        endInput.value = '';
        applyFilters();
    });

    applyFilters();
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/mason-kim/sw.js')
            .catch(function(err) { console.log('SW registration failed:', err); });
    });
}

