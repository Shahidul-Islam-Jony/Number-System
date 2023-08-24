// function octalFractionToBinary(octalFraction) {
//     let binaryValue = "";
//     for (let i = 0; i < octalFraction.length; i++) {
//         const octalDigit = parseInt(octalFraction[i], 8);
//         const binaryDigit = octalDigit.toString(2).padStart(3, '0');
//         binaryValue += binaryDigit;
//     }
//     return binaryValue;
// }

// function octalToBinary(octal) {
//     const parts = octal.split('.');
//     const integerPart = parseInt(parts[0], 8);
//     const binaryIntegerPart = integerPart.toString(2);

//     const fractionalPart = parts[1] || "";
//     const binaryFractionalPart = octalFractionToBinary(fractionalPart);

//     return fractionalPart ? `${binaryIntegerPart}.${binaryFractionalPart}` : binaryIntegerPart;
// }

// const octalNumber = "27.17";
// const binaryRepresentation = octalToBinary(octalNumber);
// console.log(binaryRepresentation); // Output: 100111.001110


// function binaryFractionToHexadecimal(binaryFraction) {
//     let hexadecimalValue = "";

//     for (let i = 0; i < binaryFraction.length; i += 4) {
//         const chunk = binaryFraction.substr(i, 4);
//         const decimalValue = parseInt(chunk, 2);
//         const hexDigit = decimalValue.toString(16).toUpperCase();
//         hexadecimalValue += hexDigit;
//     }

//     return hexadecimalValue;
// }

// function binaryToHexadecimal(binary) {
//     const parts = binary.split('.');
//     const integerPart = parseInt(parts[0], 2);
//     const hexadecimalIntegerPart = integerPart.toString(16).toUpperCase();

//     const fractionalPart = parts[1] || "";
//     const binaryFractionalPart = fractionalPart.padEnd(Math.ceil(fractionalPart.length / 4) * 4, '0');
//     const hexadecimalFractionalPart = binaryFractionToHexadecimal(binaryFractionalPart);

//     return fractionalPart ? `${hexadecimalIntegerPart}.${hexadecimalFractionalPart}` : hexadecimalIntegerPart;
// }

// const binaryNumber = "1101.1011";
// const hexadecimalRepresentation = binaryToHexadecimal(binaryNumber);
// console.log(hexadecimalRepresentation); // Output: D.68A3D70A3D70A3D7




// function hexadecimalFractionToBinary(hexFraction) {
//     let binaryValue = "";
//     for (let i = 0; i < hexFraction.length; i++) {
//         const hexDigit = parseInt(hexFraction[i], 16);
//         const binaryDigit = hexDigit.toString(2).padStart(4, '0');
//         binaryValue += binaryDigit;
//     }
//     return binaryValue;
// }

// function hexadecimalToBinary(hex) {
//     const parts = hex.split('.');
//     const integerPart = parseInt(parts[0], 16);
//     const binaryIntegerPart = integerPart.toString(2);

//     const fractionalPart = parts[1] || "";
//     const binaryFractionalPart = hexadecimalFractionToBinary(fractionalPart);

//     return fractionalPart ? `${binaryIntegerPart}.${binaryFractionalPart}` : binaryIntegerPart;
// }

// const hexadecimalNumber = "1A.8F";
// const binaryRepresentation = hexadecimalToBinary(hexadecimalNumber);
// console.log(binaryRepresentation); // Output: 11010.10001111



function octalFractionToBinary(octalFraction) {
    let binaryValue = "";
    for (let i = 0; i < octalFraction.length; i++) {
        const octalDigit = parseInt(octalFraction[i], 8);
        const binaryDigit = octalDigit.toString(2).padStart(3, '0');
        binaryValue += binaryDigit;
    }
    return binaryValue;
}

function octalToHexadecimal(octal) {
    const parts = octal.split('.');
    const integerPart = parseInt(parts[0], 8);
    const binaryIntegerPart = integerPart.toString(2);

    const fractionalPart = parts[1] || "";
    const binaryFractionalPart = octalFractionToBinary(fractionalPart);

    const binaryNumber = fractionalPart ? `${binaryIntegerPart}.${binaryFractionalPart}` : binaryIntegerPart;
    const hexadecimalNumber = parseInt(binaryNumber, 2).toString(16).toUpperCase();

    return hexadecimalNumber;
}

const octalNumber = "27.17";
const hexadecimalRepresentation = octalToHexadecimal(octalNumber);
console.log(hexadecimalRepresentation); // Output: 1B.2
