
// Writing value form key to display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// getting input field value
function getInputValue() {
    let inputField = document.getElementById("display");
    let inputValue = parseFloat(inputField.value);
    return inputValue;
}

// settting result to input field
function setResult(name, result) {
    let inputField = document.getElementById('display');
    inputField.value = name + ' : ' + result;
}

// for general calculation
function calculate() {
    try {
        var inputField = document.getElementById("display");
        var inputText = eval(inputField.value);
        inputField.value = "Output: " + inputText;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}

// convert Number
function convertNumber(base) {
    let num = getInputValue();
    let result = num.toString(base);
    return result;
}

// convert fractional number
function fractionToDecimal(fraction, base) {
    let pow = -1;
    decimalValue = 0;
    for (let i = 0; i < fraction.length; i++) {
        if (fraction[i] !== '0') {
            let val = parseInt(fraction[i]);
            let power = Math.pow(base, pow);
            decimalValue += (val * power);
        }
        pow--;
    }
    return decimalValue;
}

// Error handleing
function printError() {
    document.getElementById("result").innerHTML = "Error";
}

// for binary
function binary() {
    try {
        setResult('Binary', convertNumber(2));
    } catch (error) {
        printError();
    }
}

// for octal
function octal() {
    try {
        setResult('Octal', convertNumber(8));
    } catch (error) {
        printError();
    }
}

// for hexaDecimal
function hexaDecimal() {
    try {
        setResult('Hexadecimal', convertNumber(16));
    } catch (error) {
        printError();
    }
}

// for binaryToDecimal
function binaryToDecimal() {
    try {
        let inputField = document.getElementById('display').value.split('.');
        let decimal = parseInt(inputField[0], 2);
        let fraction = fractionToDecimal(inputField[1], 2);
        let result = decimal + (fraction !== 0 ? fraction : '');
        setResult('Binary-Deci', result);

    } catch (error) {
        printError();
    }
}

// for octalToDecimal
function octalToDecimal() {
    try {
        let inputField = document.getElementById('display').value.split('.');
        let decimal = parseInt(inputField[0], 8);
        let fraction = fractionToDecimal(inputField[1], 8);
        let result = decimal + (fraction !== 0 ? fraction : '');
        setResult('Octal-Deci', result);

    } catch (error) {
        printError();
    }
}

// for hexaToDecimal
function hexaToDecimal() {
    try {
        let inputField = document.getElementById('display').value.split('.');
        let decimal = parseInt(inputField[0], 16);
        let fraction = inputField[1];
        let decimalValue = 0;
        let pow = -1;
        for (let i = 0; i < fraction.length; i++) {
            const hexDigitValue = parseInt(fraction[i], 16);
            let power = Math.pow(16, pow);
            decimalValue += hexDigitValue * power;
            pow--;
        }

        let result = decimal + (decimalValue !== 0 ? decimalValue : '');
        setResult('Hexa-Deci', result);

    } catch (error) {
        printError();
    }

}
// for binaryToOctal
function binaryToOctal() {
    try {
        function binaryToOctal(binary) {
            const parts = binary.split('.');
            const integerPart = parseInt(parts[0], 2);
            const octalIntegerPart = integerPart.toString(8);

            let fractionalPart = parts[1] || '';

            // Convert fractional binary part to decimal
            let decimalFraction = 0;
            for (let i = 0; i < fractionalPart.length; i++) {
                decimalFraction += parseInt(fractionalPart[i]) * Math.pow(2, -i - 1);
                // console.log(decimalFraction);
            }
            // Convert the integer and fractional parts to octal

            let octalFractionalPart = '';
            while (decimalFraction > 0 && octalFractionalPart.length < 10) { // You can adjust the precision
                decimalFraction *= 8;
                const intPart = Math.floor(decimalFraction);
                octalFractionalPart += intPart;
                decimalFraction -= intPart;
            }

            return fractionalPart ? `${octalIntegerPart}.${octalFractionalPart}` : octalIntegerPart;
        }

        const binaryNumber = document.getElementById('display').value;
        const octalRepresentation = binaryToOctal(binaryNumber);
        setResult('Binary-Octal', octalRepresentation);

    } catch (error) {
        printError();
    }
}
// for octalToBinary
function octalToBinary() {
    try {
        function octalFractionToBinary(octalFraction) {
            let binaryValue = "";
            for (let i = 0; i < octalFraction.length; i++) {
                const octalDigit = parseInt(octalFraction[i], 8);
                const binaryDigit = octalDigit.toString(2).padStart(3, '0');
                binaryValue += binaryDigit;
            }
            return binaryValue;
        }

        function octalToBinary(octal) {
            const parts = octal.split('.');
            const integerPart = parseInt(parts[0], 8);
            const binaryIntegerPart = integerPart.toString(2);

            const fractionalPart = parts[1] || "";
            const binaryFractionalPart = octalFractionToBinary(fractionalPart);

            return fractionalPart ? `${binaryIntegerPart}.${binaryFractionalPart}` : binaryIntegerPart;
        }

        const octalNumber = document.getElementById('display').value;
        const binaryRepresentation = octalToBinary(octalNumber);
        setResult('Octal-Binary', binaryRepresentation);

    } catch (error) {
        printError();
    }
}

// for binaryToHexadecimal
function binaryToHexadecimal() {
    try {

        function binaryFractionToHexadecimal(binaryFraction) {
            let hexadecimalValue = "";

            for (let i = 0; i < binaryFraction.length; i += 4) {
                const chunk = binaryFraction.substr(i, 4);
                const decimalValue = parseInt(chunk, 2);
                const hexDigit = decimalValue.toString(16).toUpperCase();
                hexadecimalValue += hexDigit;
            }

            return hexadecimalValue;
        }

        function binaryToHexadecimal(binary) {
            const parts = binary.split('.');
            const integerPart = parseInt(parts[0], 2);
            const hexadecimalIntegerPart = integerPart.toString(16).toUpperCase();

            const fractionalPart = parts[1] || "";
            const binaryFractionalPart = fractionalPart.padEnd(Math.ceil(fractionalPart.length / 4) * 4, '0');
            const hexadecimalFractionalPart = binaryFractionToHexadecimal(binaryFractionalPart);

            return fractionalPart ? `${hexadecimalIntegerPart}.${hexadecimalFractionalPart}` : hexadecimalIntegerPart;
        }

        const binaryNumber = document.getElementById('display').value;
        const hexadecimalRepresentation = binaryToHexadecimal(binaryNumber);
        setResult('Binary-Hexa', hexadecimalRepresentation);


    } catch (error) {
        printError();
    }
}

// for hexadecimalToBinary
function hexadecimalToBinary() {
    try {
        function hexadecimalFractionToBinary(hexFraction) {
            let binaryValue = "";
            for (let i = 0; i < hexFraction.length; i++) {
                const hexDigit = parseInt(hexFraction[i], 16);
                const binaryDigit = hexDigit.toString(2).padStart(4, '0');
                binaryValue += binaryDigit;
            }
            return binaryValue;
        }

        function hexadecimalToBinary(hex) {
            const parts = hex.split('.');
            const integerPart = parseInt(parts[0], 16);
            const binaryIntegerPart = integerPart.toString(2);

            const fractionalPart = parts[1] || "";
            const binaryFractionalPart = hexadecimalFractionToBinary(fractionalPart);

            return fractionalPart ? `${binaryIntegerPart}.${binaryFractionalPart}` : binaryIntegerPart;
        }

        const hexadecimalNumber = document.getElementById('display').value;
        const binaryRepresentation = hexadecimalToBinary(hexadecimalNumber);
        setResult('Hexa-Binary', binaryRepresentation);

    } catch (error) {
        printError();
    }
}

// for octalToHexadecimal
function octalToHexadecimal() {
    try {
        var inputField = document.getElementById("display");
        let octal = inputField.value;
        let octalToHexaNum = parseInt(octal, 8).toString(16);
        setResult('Octal-Hexa', octalToHexaNum);

    } catch (error) {
        printError();
    }
}


// for hexadecimalToOctal
function hexadecimalToOctal() {
    try {
        var inputField = document.getElementById("display");
        let hexadecimal = inputField.value;
        let hexadecimalToOctalNum = parseInt(hexadecimal, 16).toString(8);
        print('Hexa-Octal', hexadecimalToOctalNum);

    } catch (error) {
        printError();
    }
}


// clear button
function clearDisplay() {
    document.getElementById("display").value = "";
}

function del() {
    const inputField = document.getElementById('display');
    inputField.value = inputField.value.slice(0, -1);
}