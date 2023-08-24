


// const binaryNumber = "1101.101";
// const decimalRepresentation = parseInt(binaryNumber, 2) + parseFloat(`0.${binaryNumber.split('.')[1] || '0'}`);

// console.log(decimalRepresentation); // Output: 13.625




// function binaryFractionToDecimal(binaryFraction) {
//     let decimalValue = 0;
//     let power = -1;

//     for (let i = 0; i < binaryFraction.length; i++) {
//         if (binaryFraction[i] === '1') {
//             decimalValue += Math.pow(2, power);
//         }
//         power--;
//     }
//     return decimalValue;
// }

// function binaryToDecimal(binary) {
//     const parts = binary.split('.');
//     const integerPart = parseInt(parts[0], 2);
//     const fractionalPart = binaryFractionToDecimal(parts[1]);

//     return integerPart + (fractionalPart !== 0 ? fractionalPart : '');
// }

// const binaryNumber = "1101.101";
// const decimalRepresentation = binaryToDecimal(binaryNumber);
// console.log(decimalRepresentation); // Output: 13.625



// function binaryToOctal(binary) {
//     const decimalValue = parseInt(binary, 2); // Convert binary to decimal
//     const octalValue = decimalValue.toString(8); // Convert decimal to octal
//     return octalValue;
// }

// const binaryNumber = "1101.101";
// const octalRepresentation = binaryToOctal(binaryNumber);
// console.log(octalRepresentation); // Output: 15.54




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

const binaryNumber = "1101.101";
const octalRepresentation = binaryToOctal(binaryNumber);
console.log(octalRepresentation); // Output: 15.54



