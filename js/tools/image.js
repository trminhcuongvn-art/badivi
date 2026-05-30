export function setupImageCompressor() {
    const dropZone = document.getElementById('img-drop-zone');
    const fileInput = document.getElementById('img-input');
    const dropText = document.getElementById('img-drop-text');
    const workArea = document.getElementById('img-work-area');
    const previewImg = document.getElementById('img-preview');
    
    const origSizeSpan = document.getElementById('img-orig-size');
    const compSizeSpan = document.getElementById('img-comp-size');
    const savingsSpan = document.getElementById('img-saved-pct');
    
    const qualitySlider = document.getElementById('img-quality');
    const qualityVal = document.getElementById('img-quality-val');
    const formatSelect = document.getElementById('img-format');
    const downloadBtn = document.getElementById('img-download-btn');

    if (!dropZone || !fileInput) return;

    let originalFile = null;
    let originalImage = null;
    let compressedBlob = null;

    // Load settings from localStorage
    loadSettings();

    function loadSettings() {
        const cachedQuality = localStorage.getItem('img_quality');
        if (cachedQuality) {
            qualitySlider.value = cachedQuality;
            qualityVal.textContent = `${cachedQuality}%`;
        }

        const cachedFormat = localStorage.getItem('img_format');
        if (cachedFormat) {
            formatSelect.value = cachedFormat;
        }
    }

    function saveSettings() {
        localStorage.setItem('img_quality', qualitySlider.value);
        localStorage.setItem('img_format', formatSelect.value);
    }

    // Trigger file browser on click
    dropZone.addEventListener('click', () => fileInput.click());

    // Drag-and-drop events
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.classList.add('dragover');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
        }, false);
    });

    dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length > 0) {
            handleImageSelect(files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleImageSelect(e.target.files[0]);
        }
    });

    // Handle inputs changes
    qualitySlider.addEventListener('input', (e) => {
        qualityVal.textContent = `${e.target.value}%`;
        saveSettings();
        if (originalImage) {
            compressImage();
        }
    });

    formatSelect.addEventListener('change', () => {
        saveSettings();
        if (originalImage) {
            compressImage();
        }
    });

    // Handle Download
    downloadBtn.addEventListener('click', () => {
        if (!compressedBlob || !originalFile) return;
        
        const mimeType = formatSelect.value;
        const extension = mimeType === 'image/webp' ? '.webp' : (mimeType === 'image/jpeg' ? '.jpg' : '.png');
        const originalName = originalFile.name.substring(0, originalFile.name.lastIndexOf('.')) || originalFile.name;
        const newFileName = `${originalName}_compressed${extension}`;

        const url = URL.createObjectURL(compressedBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = newFileName;
        document.body.appendChild(a);
        a.click();
        
        // Clean up URL object
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);

        // Trigger success Toast notification
        if (window.showToast) {
            window.showToast('toastImgComp', 'success');
        }
    });

    function handleImageSelect(file) {
        if (!file.type.match('image.*')) return;
        originalFile = file;

        const reader = new FileReader();
        reader.onload = (e) => {
            originalImage = new Image();
            originalImage.onload = () => {
                // Show work area
                previewImg.src = e.target.result;
                origSizeSpan.textContent = formatBytes(originalFile.size);
                workArea.classList.remove('hide');
                
                // Set default formats based on original type
                if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/webp') {
                    // PNG is heavy, converting to WebP is great. If they want PNG, canvas can output PNG.
                }
                
                compressImage();
            };
            originalImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    function compressImage() {
        if (!originalImage) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Draw original dimensions
        canvas.width = originalImage.naturalWidth;
        canvas.height = originalImage.naturalHeight;

        ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);

        const quality = parseInt(qualitySlider.value) / 100;
        const mimeType = formatSelect.value;

        // Perform compression in canvas
        canvas.toBlob((blob) => {
            if (!blob) return;
            compressedBlob = blob;
            
            // Render Stats
            compSizeSpan.textContent = formatBytes(blob.size);
            
            const savings = originalFile.size - blob.size;
            if (savings > 0) {
                const savingsPct = Math.round((savings / originalFile.size) * 100);
                savingsSpan.textContent = `${savingsPct}%`;
                savingsSpan.className = 'highlight-val text-green';
            } else {
                savingsSpan.textContent = '0%';
                savingsSpan.className = 'highlight-val';
            }
        }, mimeType, quality);
    }

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
}
