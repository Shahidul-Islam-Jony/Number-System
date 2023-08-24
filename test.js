


// const binaryNumber = "1101.101";
// const decimalRepresentation = parseInt(binaryNumber, 2) + parseFloat(`0.${binaryNumber.split('.')[1] || '0'}`);

// console.log(decimalRepresentation); // Output: 13.625


function binaryFractionToDecimal(binaryFraction) {
    let decimalValue = 0;
    let power = -1;

    for (let i = 0; i < binaryFraction.length; i++) {
        if (binaryFraction[i] === '1') {
            decimalValue += Math.pow(2, power);
        }
        power--;
    }
    return decimalValue;
}

function binaryToDecimal(binary) {
    const parts = binary.split('.');
    const integerPart = parseInt(parts[0], 2);
    const fractionalPart = binaryFractionToDecimal(parts[1]);

    return integerPart + (fractionalPart !== 0 ? fractionalPart : '');
}

const binaryNumber = "1101.101";
const decimalRepresentation = binaryToDecimal(binaryNumber);
console.log(decimalRepresentation); // Output: 13.625



