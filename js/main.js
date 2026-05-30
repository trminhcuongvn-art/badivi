import { translations } from './translations.js';
import { setupTiktok } from './tools/tiktok.js';
import { setupImageCompressor } from './tools/image.js';
import { setupPasswordGenerator, updatePasswordStrengthLabel } from './tools/password.js';
import { setupTextTools } from './tools/text.js';
import { setupQrCode } from './tools/qrcode.js';
import { setupDevTools } from './tools/devtools.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Theme Manager
    initTheme();

    // 2. Setup Language Selector
    initLanguage();

    // 3. Setup SPA Router
    initRouter();

    // 4. Setup Individual Tools
    setupTiktok(translations);
    setupImageCompressor();
    setupPasswordGenerator(translations);
    setupTextTools(translations);
    setupQrCode(translations);
    setupDevTools(translations);

    // 5. Initialize Search Filter
    initSearch();
});

/* ==========================================================================
   THEME MANAGER
   ========================================================================== */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const defaultTheme = savedTheme || (prefersLight ? 'light' : 'dark');

    applyTheme(defaultTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });
}

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
}

/* ==========================================================================
   LOCALIZATION ENGINE
   ========================================================================== */
function initLanguage() {
    const langSelect = document.getElementById('lang-select');
    if (!langSelect) return;

    // Supported languages
    const supportedLangs = ['en', 'es', 'pt', 'fr', 'vi'];

    // 1. Get from URL query parameter ?lang=
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get('lang')?.toLowerCase();

    // 2. Detect browser language or saved preference
    const savedLang = localStorage.getItem('lang');
    let browserLang = navigator.language || navigator.userLanguage || '';
    browserLang = browserLang.substring(0, 2).toLowerCase(); // get 'en', 'es', etc.

    let defaultLang = 'en';
    if (queryLang && supportedLangs.includes(queryLang)) {
        defaultLang = queryLang;
    } else if (savedLang && supportedLangs.includes(savedLang)) {
        defaultLang = savedLang;
    } else if (browserLang && supportedLangs.includes(browserLang)) {
        defaultLang = browserLang;
    }

    langSelect.value = defaultLang;
    applyLanguage(defaultLang, true);

    langSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        applyLanguage(selectedLang, true);
    });
}

function applyLanguage(lang, updateUrl = true) {
    const dict = translations[lang] || translations['en'];
    document.documentElement.lang = lang;

    // 1. Translate normal text elements with data-i18n
    const textElements = document.querySelectorAll('[data-i18n]');
    textElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // 2. Translate placeholders with data-i18n-placeholder
    const inputElements = document.querySelectorAll('[data-i18n-placeholder]');
    inputElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });

    // 3. Translate SEO meta attributes
    const metaElements = document.querySelectorAll('[data-i18n-content]');
    metaElements.forEach(el => {
        const key = el.getAttribute('data-i18n-content');
        if (dict[key]) {
            el.setAttribute('content', dict[key]);
        }
    });

    // 4. Update Document Title
    if (dict['metaTitle']) {
        document.title = dict['metaTitle'];
    }

    // Save choice
    localStorage.setItem('lang', lang);

    // Update dynamic sub-components
    updatePasswordStrengthLabel(translations, lang);

    // Update URL query parameters dynamically if requested
    if (updateUrl) {
        const url = new URL(window.location.href);
        if (url.searchParams.get('lang') !== lang) {
            url.searchParams.set('lang', lang);
            window.history.replaceState(null, '', url.pathname + url.search + url.hash);
        }
    }
}

/* ==========================================================================
   SPA ROUTER
   ========================================================================== */
function initRouter() {
    const navBrand = document.getElementById('nav-brand');
    const navItems = document.querySelectorAll('.nav-item');
    const pageSections = document.querySelectorAll('.page-section');
    const toolCards = document.querySelectorAll('.tool-card');
    const backButtons = document.querySelectorAll('.back-btn');

    // Route handler
    function handleRoute() {
        let hash = window.location.hash.substring(1); // remove '#'
        
        // Allowed route targets
        const allowedRoutes = ['home', 'tiktok', 'image', 'password', 'text', 'qrcode', 'devtools'];
        if (!allowedRoutes.includes(hash)) {
            hash = 'home';
            window.location.hash = '#home';
        }

        // 1. Show matching section, hide others
        pageSections.forEach(section => {
            if (section.id === `page-${hash}`) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // 2. Set navigation active item
        navItems.forEach(item => {
            const navTarget = item.getAttribute('data-nav');
            // Edge case: if we target sub-route tool names (tiktokTitle, imageTitle), map back-nav
            if (navTarget === hash || (hash === 'home' && navTarget === 'home')) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Scroll to top smoothly on page swap
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Bind event listeners
    window.addEventListener('hashchange', handleRoute);
    
    // Bind card clicks to set route hash
    toolCards.forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-target');
            window.location.hash = `#${target}`;
        });
    });

    // Bind back buttons
    backButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.hash = '#home';
        });
    });

    // Brand logo returns to home
    if (navBrand) {
        navBrand.addEventListener('click', () => {
            window.location.hash = '#home';
        });
    }

    // Trigger initial route match
    handleRoute();
}

/* ==========================================================================
   TOAST NOTIFICATION DISPATCHER
   ========================================================================== */
export function showToast(messageKey, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    // Select icon SVG based on type
    let iconSvg = '';
    if (type === 'success') {
        iconSvg = `<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>`;
    } else if (type === 'error') {
        iconSvg = `<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>`;
    } else {
        iconSvg = `<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2v-3a1 1 0 00-1-1H9a1 1 0 100 2v3a1 1 0 001 1h1z" clip-rule="evenodd"/>
        </svg>`;
    }

    // Get translation message
    const lang = document.getElementById('lang-select').value;
    const message = translations[lang]?.[messageKey] || translations['en']?.[messageKey] || messageKey;

    toast.innerHTML = `
        ${iconSvg}
        <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.add('hide-toast');
        // Remove from DOM after fade animation completes (300ms)
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2700);
}

// Bind to window to allow global tool scripts access
window.showToast = showToast;

/* ==========================================================================
   DYNAMIC SEARCH FILTER
   ========================================================================== */
function initSearch() {
    const searchInput = document.getElementById('tool-search');
    const cards = document.querySelectorAll('.tool-card');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const desc = card.querySelector('.card-desc').textContent.toLowerCase();
            
            if (title.includes(query) || desc.includes(query)) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
}
