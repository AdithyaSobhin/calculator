function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const displayValue = document.getElementById('display').value;
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}



document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9+\-*/.=c]/.test(key)) {
        if (key === 'c') {
            clearDisplay();
        } else if (key === '=') {
            calculateResult();
        } else {
            addToDisplay(key);
        }
        event.preventDefault(); // Prevent the default behavior of the key press
    }
});