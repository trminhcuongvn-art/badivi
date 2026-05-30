export function setupDevTools(translations) {
    const base64TabBtn = document.getElementById('dev-type-base64-btn');
    const urlTabBtn = document.getElementById('dev-type-url-btn');
    
    const inputArea = document.getElementById('dev-input');
    const outputArea = document.getElementById('dev-output');
    
    const encodeBtn = document.getElementById('dev-encode-btn');
    const decodeBtn = document.getElementById('dev-decode-btn');
    const copyBtn = document.getElementById('dev-copy-btn');
    const copyText = document.getElementById('dev-copy-text');
    const clearBtn = document.getElementById('dev-clear-btn');

    if (!encodeBtn || !inputArea) return;

    let activeMode = 'base64'; // 'base64' or 'url'

    // Tab Switches
    base64TabBtn.addEventListener('click', () => {
        activeMode = 'base64';
        base64TabBtn.classList.add('active');
        urlTabBtn.classList.remove('active');
    });

    urlTabBtn.addEventListener('click', () => {
        activeMode = 'url';
        urlTabBtn.classList.add('active');
        base64TabBtn.classList.remove('active');
    });

    // Operation handlers
    encodeBtn.addEventListener('click', () => {
        const text = inputArea.value;
        if (!text) return;

        try {
            if (activeMode === 'base64') {
                outputArea.value = utf8ToBase64(text);
            } else {
                outputArea.value = encodeURIComponent(text);
            }
            if (window.showToast) window.showToast('toastDevSuccess', 'success');
        } catch (error) {
            console.error('Encoding error:', error);
            if (window.showToast) window.showToast('toastError', 'error');
        }
    });

    decodeBtn.addEventListener('click', () => {
        const text = inputArea.value;
        if (!text) return;

        try {
            if (activeMode === 'base64') {
                outputArea.value = base64ToUtf8(text);
            } else {
                outputArea.value = decodeURIComponent(text);
            }
            if (window.showToast) window.showToast('toastDevSuccess', 'success');
        } catch (error) {
            console.error('Decoding error:', error);
            if (window.showToast) window.showToast('toastError', 'error');
        }
    });

    // Clear handler
    clearBtn.addEventListener('click', () => {
        inputArea.value = '';
        outputArea.value = '';
    });

    // Copy handler
    copyBtn.addEventListener('click', () => {
        const text = outputArea.value;
        if (!text) return;

        navigator.clipboard.writeText(text).then(() => {
            const lang = document.getElementById('lang-select').value;
            const copiedLabel = translations[lang]?.copied || translations['en']?.copied || 'Copied!';
            const copyLabel = translations[lang]?.copy || translations['en']?.copy || 'Copy';

            copyText.textContent = copiedLabel;
            copyBtn.classList.add('btn-success');
            
            setTimeout(() => {
                copyText.textContent = copyLabel;
                copyBtn.classList.remove('btn-success');
            }, 1500);

            if (window.showToast) window.showToast('toastCopied', 'success');
        });
    });

    // UTF-8 Safe Base64 Helpers
    function utf8ToBase64(str) {
        // Safe conversion of UTF-8 strings (handles Vietnamese characters, etc.)
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
            return String.fromCharCode(parseInt('0x' + p1, 16));
        }));
    }

    function base64ToUtf8(str) {
        // Safe decoding of UTF-8 strings
        return decodeURIComponent(atob(str).split('').map((c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
}
