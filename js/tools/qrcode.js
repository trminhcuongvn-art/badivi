export function setupQrCode(translations) {
    const textTabBtn = document.getElementById('qr-type-text-btn');
    const wifiTabBtn = document.getElementById('qr-type-wifi-btn');
    
    const textGroup = document.getElementById('qr-input-text-group');
    const wifiGroup = document.getElementById('qr-input-wifi-group');
    
    const textInput = document.getElementById('qr-text');
    const wifiSsidInput = document.getElementById('qr-wifi-ssid');
    const wifiPasswordInput = document.getElementById('qr-wifi-password');
    const wifiEncryptionSelect = document.getElementById('qr-wifi-encryption');
    
    const generateBtn = document.getElementById('qr-generate-btn');
    const qrImage = document.getElementById('qr-image');
    const placeholderText = document.getElementById('qr-placeholder-text');
    const downloadBtn = document.getElementById('qr-download-btn');

    if (!generateBtn || !qrImage) return;

    let activeType = 'text'; // 'text' or 'wifi'
    let currentQrUrl = '';

    // Switch between input tabs
    textTabBtn.addEventListener('click', () => {
        activeType = 'text';
        textTabBtn.classList.add('active');
        wifiTabBtn.classList.remove('active');
        textGroup.classList.remove('hide');
        wifiGroup.classList.add('hide');
    });

    wifiTabBtn.addEventListener('click', () => {
        activeType = 'wifi';
        wifiTabBtn.classList.add('active');
        textTabBtn.classList.remove('active');
        wifiGroup.classList.remove('hide');
        textGroup.classList.add('hide');
    });

    // Generate QR Code
    generateBtn.addEventListener('click', () => {
        let qrData = '';

        if (activeType === 'text') {
            const val = textInput.value.trim();
            if (!val) {
                if (window.showToast) window.showToast('errorInvalidUrl', 'error');
                return;
            }
            qrData = val;
        } else {
            const ssid = wifiSsidInput.value.trim();
            const password = wifiPasswordInput.value.trim();
            const encryption = wifiEncryptionSelect.value;

            if (!ssid) {
                if (window.showToast) window.showToast('errorInvalidUrl', 'error');
                return;
            }

            // Escape special chars for WiFi specification
            const escapeWifiString = (str) => {
                return str.replace(/\\/g, '\\\\')
                          .replace(/;/g, '\\;')
                          .replace(/:/g, '\\:')
                          .replace(/,/g, '\\,');
            };

            // WIFI:S:SSID;T:WPA;P:PASSWORD;;
            let wifiStr = `WIFI:S:${escapeWifiString(ssid)};`;
            if (encryption !== 'nopass') {
                wifiStr += `T:${encryption};P:${escapeWifiString(password)};`;
            } else {
                wifiStr += 'T:nopass;';
            }
            wifiStr += ';';
            qrData = wifiStr;
        }

        // Show loading state (placeholder changes)
        const lang = document.getElementById('lang-select').value;
        const loadingLabel = translations[lang]?.loading || translations['en']?.loading || 'Processing...';
        placeholderText.textContent = loadingLabel;
        placeholderText.classList.remove('hide');
        qrImage.classList.add('hide');
        downloadBtn.classList.add('hide');

        // Formulate API URL
        const size = 300;
        currentQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrData)}`;

        // Load image client-side to ensure it is generated
        const tempImg = new Image();
        tempImg.onload = () => {
            qrImage.src = currentQrUrl;
            qrImage.classList.remove('hide');
            placeholderText.classList.add('hide');
            downloadBtn.classList.remove('hide');
            
            if (window.showToast) window.showToast('toastQrGen', 'success');
        };
        
        tempImg.onerror = () => {
            const errorLabel = translations[lang]?.errorApi || translations['en']?.errorApi || 'Error';
            placeholderText.textContent = errorLabel;
            if (window.showToast) window.showToast('toastError', 'error');
        };
        
        tempImg.src = currentQrUrl;
    });

    // Handle QR code download
    downloadBtn.addEventListener('click', async () => {
        if (!currentQrUrl) return;

        try {
            // Attempt to fetch file with CORS to make a blob download trigger
            const response = await fetch(currentQrUrl);
            if (!response.ok) throw new Error('Fetch failed');
            
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = 'qrcode.png';
            document.body.appendChild(a);
            a.click();
            
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(blobUrl);
            }, 100);
        } catch (error) {
            console.warn('CORS download blocked, falling back to new tab:', error);
            // Fallback: Open image in new window
            window.open(currentQrUrl, '_blank');
        }
    });
}
