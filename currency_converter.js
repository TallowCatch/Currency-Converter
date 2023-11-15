document.addEventListener('DOMContentLoaded', () => {

    async function fetchCurrencies() {
        try {
            const response = await fetch('https://v6.exchangerate-api.com/v6/16947c81da979880bacde4f5/latest/USD');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const currencies = Object.keys(data.conversion_rates).sort();
            populateDatalists(currencies);
        } catch (error) {
            console.error('Error fetching currency data:', error);
        }
    }

    function populateDatalists(currencies) {
        const sourceCurrency = document.getElementById('sourceCurrency');
        const destinationCurrency = document.getElementById('destinationCurrency');

    currencies.forEach(currency => {
        const sourceOption = document.createElement('option');
        sourceOption.value = currency;
        sourceOption.textContent = currency; // This line sets the text inside the option
        sourceCurrency.appendChild(sourceOption);

        const destinationOption = document.createElement('option');
        destinationOption.value = currency;
        destinationOption.textContent = currency; 
        destinationCurrency.appendChild(destinationOption);
    });
}

    // Handle User Input and Conversion
    const amountInput = document.getElementById('amount');
    const sourceCurrency = document.getElementById('sourceCurrency');
    const destinationCurrency = document.getElementById('destinationCurrency');
    const resultDiv = document.getElementById('result');

    async function convertCurrency() {
        const amount = amountInput.value;
        const source = sourceCurrency.value;
        const destination = destinationCurrency.value;

        if (isNaN(amount) || amount === '') {
            alert('Please enter a valid number');
            return;
        }

        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/16947c81da979880bacde4f5/latest/${source}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const rate = data.conversion_rates[destination];
            const convertedAmount = (amount * rate).toFixed(2);

            resultDiv.textContent = `${convertedAmount} ${destination}`;
        } catch (error) {
            console.error('Error in conversion:', error);
        }
    }

    amountInput.addEventListener('input', convertCurrency);
    sourceCurrency.addEventListener('change', convertCurrency);
    destinationCurrency.addEventListener('change', convertCurrency);

    
    const swapButton = document.getElementById('swap');
    swapButton.addEventListener('click', () => {
        const temp = sourceCurrency.value;
        sourceCurrency.value = destinationCurrency.value;
        destinationCurrency.value = temp;
        convertCurrency();
    });

    // Initialize
    fetchCurrencies();
});
