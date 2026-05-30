export function setupTextTools(translations) {
    const txtInput = document.getElementById('txt-input');
    const wordCountSpan = document.getElementById('txt-word-count');
    const charCountSpan = document.getElementById('txt-char-count');
    const sentenceCountSpan = document.getElementById('txt-sentence-count');
    const paragraphCountSpan = document.getElementById('txt-paragraph-count');
    const readTimeSpan = document.getElementById('txt-read-time');
    
    const upperBtn = document.getElementById('txt-upper-btn');
    const lowerBtn = document.getElementById('txt-lower-btn');
    const titleBtn = document.getElementById('txt-title-btn');
    const sentenceBtn = document.getElementById('txt-sentence-btn');
    
    const copyBtn = document.getElementById('txt-copy-btn');
    const copyText = document.getElementById('txt-copy-text');
    const clearBtn = document.getElementById('txt-clear-btn');
    
    const repeatCountInput = document.getElementById('txt-repeat-count');
    const repeatSeparator = document.getElementById('txt-repeat-separator');
    const repeatBtn = document.getElementById('txt-repeat-btn');

    if (!txtInput) return;

    // Listeners
    txtInput.addEventListener('input', updateCounts);

    upperBtn.addEventListener('click', () => {
        txtInput.value = txtInput.value.toUpperCase();
        updateCounts();
    });

    lowerBtn.addEventListener('click', () => {
        txtInput.value = txtInput.value.toLowerCase();
        updateCounts();
    });

    titleBtn.addEventListener('click', () => {
        txtInput.value = toTitleCase(txtInput.value);
        updateCounts();
    });

    sentenceBtn.addEventListener('click', () => {
        txtInput.value = toSentenceCase(txtInput.value);
        updateCounts();
    });

    clearBtn.addEventListener('click', () => {
        txtInput.value = '';
        updateCounts();
    });

    copyBtn.addEventListener('click', () => {
        const text = txtInput.value;
        if (!text) return;

        navigator.clipboard.writeText(text).then(() => {
            const lang = document.getElementById('lang-select').value;
            const copiedLabel = translations[lang]?.copied || translations['en']?.copied || 'Copied!';
            const copyLabel = translations[lang]?.copy || translations['en']?.copy || 'Copy';

            copyText.textContent = copiedLabel;
            copyBtn.classList.add('btn-success');
            copyBtn.classList.remove('btn-gradient');
            
            setTimeout(() => {
                copyText.textContent = copyLabel;
                copyBtn.classList.remove('btn-success');
                copyBtn.classList.add('btn-gradient');
            }, 1500);

            if (window.showToast) {
                window.showToast('toastCopied', 'success');
            }
        });
    });

    repeatBtn.addEventListener('click', () => {
        const text = txtInput.value;
        if (!text) return;

        const rawCount = parseInt(repeatCountInput.value);
        // Constrain count so browser doesn't freeze (max 10000)
        const count = Math.min(Math.max(1, isNaN(rawCount) ? 10 : rawCount), 10000);
        repeatCountInput.value = count;

        const sepVal = repeatSeparator.value;
        let separator = '';
        if (sepVal === 'space') separator = ' ';
        if (sepVal === 'newline') separator = '\n';

        const repeated = new Array(count).fill(text).join(separator);
        txtInput.value = repeated;
        updateCounts();
    });

    function updateCounts() {
        const text = txtInput.value;
        
        // Character count
        charCountSpan.textContent = text.length;

        // Word count (split by spaces/tabs/newlines, filter out empty elements)
        const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        wordCountSpan.textContent = words;

        // Sentence count (split on . ! ? followed by space or end of line)
        const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+(?=\s|$)/).filter(s => s.trim().length > 0).length;
        if (sentenceCountSpan) sentenceCountSpan.textContent = sentences;

        // Paragraph count (split on double newline or more)
        const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n+/).filter(p => p.trim().length > 0).length;
        if (paragraphCountSpan) paragraphCountSpan.textContent = paragraphs;

        // Read time estimation (average 200 words per minute)
        const readTimeMinutes = Math.ceil(words / 200);
        if (readTimeSpan) {
            readTimeSpan.textContent = words === 0 ? "0m" : `${readTimeMinutes}m`;
        }
    }

    function toTitleCase(str) {
        // Capitalizes first letter of each word
        return str.replace(/\b\w+/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
        });
    }

    function toSentenceCase(str) {
        // Lowercase everything first, then capitalize first letter of sentences
        return str.toLowerCase().replace(/(^\s*|[.!?]\s+)([a-z\u00C0-\u00FF])/g, (match, p1, p2) => {
            return p1 + p2.toUpperCase();
        });
    }
}
