export function setupPasswordGenerator(translations) {
    const outputInput = document.getElementById('pwd-output');
    const copyBtn = document.getElementById('pwd-copy-btn');
    const copyText = document.getElementById('pwd-copy-text');
    const lengthSlider = document.getElementById('pwd-length');
    const lengthVal = document.getElementById('pwd-length-val');
    
    const upperCheck = document.getElementById('pwd-upper');
    const lowerCheck = document.getElementById('pwd-lower');
    const numbersCheck = document.getElementById('pwd-numbers');
    const symbolsCheck = document.getElementById('pwd-symbols');
    
    const strengthTxt = document.getElementById('pwd-strength-txt');
    const strengthBar = document.getElementById('pwd-strength-bar');
    const generateBtn = document.getElementById('pwd-generate-btn');

    if (!outputInput || !lengthSlider) return;

    // Load settings from localStorage
    loadSettings();

    // Listeners
    lengthSlider.addEventListener('input', (e) => {
        lengthVal.textContent = e.target.value;
        saveSettings();
        generatePassword();
    });

    [upperCheck, lowerCheck, numbersCheck, symbolsCheck].forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            // Prevent all unchecked
            const checkedCount = [upperCheck, lowerCheck, numbersCheck, symbolsCheck].filter(c => c.checked).length;
            if (checkedCount === 0) {
                lowerCheck.checked = true;
            }
            saveSettings();
            generatePassword();
        });
    });

    generateBtn.addEventListener('click', () => {
        generatePassword();
    });

    function loadSettings() {
        const cachedLength = localStorage.getItem('pwd_length');
        if (cachedLength) {
            lengthSlider.value = cachedLength;
            lengthVal.textContent = cachedLength;
        }

        const cachedUpper = localStorage.getItem('pwd_upper');
        if (cachedUpper !== null) upperCheck.checked = cachedUpper === 'true';

        const cachedLower = localStorage.getItem('pwd_lower');
        if (cachedLower !== null) lowerCheck.checked = cachedLower === 'true';

        const cachedNumbers = localStorage.getItem('pwd_numbers');
        if (cachedNumbers !== null) numbersCheck.checked = cachedNumbers === 'true';

        const cachedSymbols = localStorage.getItem('pwd_symbols');
        if (cachedSymbols !== null) symbolsCheck.checked = cachedSymbols === 'true';
    }

    function saveSettings() {
        localStorage.setItem('pwd_length', lengthSlider.value);
        localStorage.setItem('pwd_upper', upperCheck.checked);
        localStorage.setItem('pwd_lower', lowerCheck.checked);
        localStorage.setItem('pwd_numbers', numbersCheck.checked);
        localStorage.setItem('pwd_symbols', symbolsCheck.checked);
    }

    copyBtn.addEventListener('click', () => {
        const password = outputInput.value;
        if (!password) return;

        navigator.clipboard.writeText(password).then(() => {
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

            // Trigger dynamic Toast notification
            if (window.showToast) {
                window.showToast('toastCopied', 'success');
            }
        });
    });

    // Auto-generate on load
    generatePassword();

    function generatePassword() {
        const length = parseInt(lengthSlider.value);
        const hasUpper = upperCheck.checked;
        const hasLower = lowerCheck.checked;
        const hasNumbers = numbersCheck.checked;
        const hasSymbols = symbolsCheck.checked;

        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/';

        let allowedChars = '';
        let guaranteedChars = [];

        if (hasUpper) {
            allowedChars += uppercaseChars;
            guaranteedChars.push(getRandomCharFromString(uppercaseChars));
        }
        if (hasLower) {
            allowedChars += lowercaseChars;
            guaranteedChars.push(getRandomCharFromString(lowercaseChars));
        }
        if (hasNumbers) {
            allowedChars += numberChars;
            guaranteedChars.push(getRandomCharFromString(numberChars));
        }
        if (hasSymbols) {
            allowedChars += symbolChars;
            guaranteedChars.push(getRandomCharFromString(symbolChars));
        }

        let passwordArray = [...guaranteedChars];
        const remainingLength = length - guaranteedChars.length;

        // Fill remaining length
        for (let i = 0; i < remainingLength; i++) {
            passwordArray.push(getRandomCharFromString(allowedChars));
        }

        // Cryptographically secure shuffle
        passwordArray = secureShuffle(passwordArray);

        const password = passwordArray.join('');
        outputInput.value = password;

        updateStrengthMeter(password, length, hasUpper, hasLower, hasNumbers, hasSymbols);
    }

    function getRandomCharFromString(str) {
        const randomValues = new Uint32Array(1);
        window.crypto.getRandomValues(randomValues);
        const randomIndex = randomValues[0] % str.length;
        return str.charAt(randomIndex);
    }

    // Fisher-Yates shuffle using crypto API
    function secureShuffle(array) {
        const n = array.length;
        const randomValues = new Uint32Array(n);
        window.crypto.getRandomValues(randomValues);

        for (let i = n - 1; i > 0; i--) {
            const j = randomValues[i] % (i + 1);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function updateStrengthMeter(password, length, upper, lower, num, sym) {
        const checkedCount = [upper, lower, num, sym].filter(Boolean).length;
        
        let strength = 'weak';
        
        if (length >= 16 && checkedCount === 4) {
            strength = 'secure';
        } else if (length >= 12 && checkedCount >= 3) {
            strength = 'strong';
        } else if (length >= 8 && checkedCount >= 2) {
            strength = 'medium';
        }

        // Apply classes
        strengthBar.className = 'strength-bar-fill';
        strengthBar.classList.add(strength);

        // Translate strength text
        const lang = document.getElementById('lang-select').value;
        let labelKey = 'pwdWeak';
        if (strength === 'medium') labelKey = 'pwdMedium';
        if (strength === 'strong') labelKey = 'pwdStrong';
        if (strength === 'secure') labelKey = 'pwdSecure';

        const label = translations[lang]?.[labelKey] || translations['en']?.[labelKey] || labelKey;
        strengthTxt.textContent = label;
        
        // Match color classes for text
        strengthTxt.className = 'strength-val-text';
        if (strength === 'weak') strengthTxt.style.color = 'var(--danger-color)';
        if (strength === 'medium') strengthTxt.style.color = '#f59e0b';
        if (strength === 'strong') strengthTxt.style.color = 'var(--success-color)';
        if (strength === 'secure') strengthTxt.style.color = '#06b6d4';
    }
}
export function updatePasswordStrengthLabel(translations, lang) {
    // Helper to refresh strength label translation on language switch
    const outputInput = document.getElementById('pwd-output');
    const lengthSlider = document.getElementById('pwd-length');
    const upperCheck = document.getElementById('pwd-upper');
    const lowerCheck = document.getElementById('pwd-lower');
    const numbersCheck = document.getElementById('pwd-numbers');
    const symbolsCheck = document.getElementById('pwd-symbols');
    const strengthTxt = document.getElementById('pwd-strength-txt');

    if (!outputInput || !lengthSlider) return;

    const length = parseInt(lengthSlider.value);
    const checkedCount = [upperCheck.checked, lowerCheck.checked, numbersCheck.checked, symbolsCheck.checked].filter(Boolean).length;
    
    let strength = 'weak';
    if (length >= 16 && checkedCount === 4) {
        strength = 'secure';
    } else if (length >= 12 && checkedCount >= 3) {
        strength = 'strong';
    } else if (length >= 8 && checkedCount >= 2) {
        strength = 'medium';
    }

    let labelKey = 'pwdWeak';
    if (strength === 'medium') labelKey = 'pwdMedium';
    if (strength === 'strong') labelKey = 'pwdStrong';
    if (strength === 'secure') labelKey = 'pwdSecure';

    const label = translations[lang]?.[labelKey] || translations['en']?.[labelKey] || labelKey;
    if (strengthTxt) strengthTxt.textContent = label;
}
