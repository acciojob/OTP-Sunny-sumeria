//your JS code here. If required.

const codes = document.querySelectorAll('.code');

// Automatically focus the first input on page load
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            // Clear current value to ensure only one digit per box
            codes[idx].value = '';
            // Move to next input after a tiny delay to allow value to be set
            setTimeout(() => codes[idx + 1]?.focus(), 10);
        } else if (e.key === 'Backspace') {
            // Move to previous input on backspace
            setTimeout(() => codes[idx - 1]?.focus(), 10);
        }
    });

    // Optional: Prevent typing non-numbers and handle "paste" events
    code.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.length > 1) {
            e.target.value = value.slice(0, 1); // Keep only one digit
        }
    });
});
