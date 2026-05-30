export function setupTiktok(translations) {
    const form = document.getElementById('tiktok-form');
    const urlInput = document.getElementById('tiktok-url');
    const errorDiv = document.getElementById('tiktok-error');
    const loader = document.getElementById('tiktok-loader');
    const resultDiv = document.getElementById('tiktok-result');
    
    const coverImg = document.getElementById('tiktok-cover');
    const descText = document.getElementById('tiktok-desc');
    const authorSpan = document.getElementById('tiktok-author-name');
    
    const dlNoWm = document.getElementById('tiktok-dl-nowatermark');
    const dlWm = document.getElementById('tiktok-dl-watermark');
    const dlAudio = document.getElementById('tiktok-dl-audio');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const url = urlInput.value.trim();
        errorDiv.classList.add('hide');
        resultDiv.classList.add('hide');
        
        // Simple TikTok URL regex validation
        const tiktokRegex = /https?:\/\/(www\.)?(tiktok\.com|doubleclick\.net|vm\.tiktok\.com|vt\.tiktok\.com|v\.doubleclick\.net)\/.+/i;
        if (!tiktokRegex.test(url)) {
            showError('errorInvalidUrl');
            return;
        }

        showLoader(true);

        try {
            // Fetching from tikwm API
            const response = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
            if (!response.ok) {
                throw new Error('Network response not ok');
            }

            const json = await response.json();
            
            if (json.code === 0 && json.data) {
                renderResult(json.data);
            } else {
                showError('errorApi');
            }
        } catch (error) {
            console.error('TikTok fetch error:', error);
            showError('errorApi');
        } finally {
            showLoader(false);
        }
    });

    function showLoader(show) {
        if (show) {
            loader.classList.remove('hide');
            form.querySelector('button[type="submit"]').disabled = true;
        } else {
            loader.classList.add('hide');
            form.querySelector('button[type="submit"]').disabled = false;
        }
    }

    function showError(key) {
        const lang = document.getElementById('lang-select').value;
        const msg = translations[lang]?.[key] || translations['en'][key] || key;
        errorDiv.textContent = msg;
        errorDiv.classList.remove('hide');
    }

    function renderResult(data) {
        // Securely render content via textContent to prevent DOM XSS
        coverImg.src = data.cover || '';
        descText.textContent = data.title || 'TikTok Video';
        
        const nickname = data.author?.nickname || '';
        const uniqueId = data.author?.unique_id || '';
        authorSpan.textContent = nickname && uniqueId ? `${nickname} (@${uniqueId})` : (uniqueId || 'Unknown');

        // Set download URLs. Tikwm API provides direct MP4 and MP3 links.
        // We prepend https: if urls are protocol-relative
        const sanitizeUrl = (link) => {
            if (!link) return '#';
            return link.startsWith('//') ? `https:${link}` : link;
        };

        dlNoWm.href = sanitizeUrl(data.play);
        dlNoWm.setAttribute('download', `tiktok_video_nowm_${data.id || 'download'}.mp4`);
        
        dlWm.href = sanitizeUrl(data.wmplay);
        dlWm.setAttribute('download', `tiktok_video_wm_${data.id || 'download'}.mp4`);

        dlAudio.href = sanitizeUrl(data.music);
        dlAudio.setAttribute('download', `tiktok_audio_${data.id || 'download'}.mp3`);

        resultDiv.classList.remove('hide');
    }
}
