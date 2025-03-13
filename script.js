document.getElementById('convertButton').addEventListener('click', function () {
    const temp = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitInput').value;

    if (isNaN(temp)) {
        document.getElementById('output').textContent = 'Please enter a valid number.';
        return;
    }

    let convertedTemp, convertedUnit;

    if (unit === 'Celsius') {
        convertedTemp = (temp * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else if (unit === 'Fahrenheit') {
        convertedTemp = (temp - 32) * 5/9;
        convertedUnit = 'Celsius';
    } else if (unit === 'Kelvin') {
        convertedTemp = temp - 273.15;
        convertedUnit = 'Celsius';
    }

    document.getElementById('output').textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${convertedUnit}`;
});
