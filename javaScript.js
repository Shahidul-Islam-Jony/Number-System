
// Writing value form key to display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// getting input field value
function getInputValue() {
    let inputField = document.getElementById("display");
    let inputValue = parseInt(inputField.value);
    return inputValue;
}

// settting result to input field
function setResult(name ,result){
    let inputField = document.getElementById('display');
    inputField.value = name+' : '+result;
    inputField.setAttribute = 'onclick';
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
function convertNumber(base){
    let num =getInputValue();
    let result = num.toString(base);
    return result;
}
// Error handleing
function printError(){
    document.getElementById("result").innerHTML = "Error";
}

// for binary
function binary() {
    try {
        setResult('Binary',convertNumber(2));
    } catch (error) {
        printError();
    }
}

// for octal
function octal() {
    try {
        setResult('Octal',convertNumber(8));
    } catch (error) {
        printError();
    }
}

// for hexaDecimal
function hexaDecimal() {
    try {
        setResult('Hexadecimal',convertNumber(16));
    } catch (error) {
        printError();
    }
}

// for binaryToDecimal
function binaryToDecimal() {
    try {
        let desimalNum = parseInt((getInputValue().toString()),2);
        setResult('Binary-Deci',desimalNum);
    } catch (error) {
        printError();
    }
}

// for octalToDecimal
function octalToDecimal() {
    try {
        let desimalNum = parseInt((getInputValue().toString()), 8);
        setResult('Octal-Deci',desimalNum)
    } catch (error) {
        printError();
    }
}

// for hexaToDecimal
function hexaToDecimal() {
    try {
        let inputField = document.getElementById("display");
        let desimalNum = parseInt(inputField.value, 16);
        setResult('Hexa-deci',desimalNum);
    } catch (error) {
        printError();
    }
}
// for binaryToOctal
function binaryToOctal() {
    try {
        var inputField = document.getElementById("display");
        let binary = inputField.value;
        let binaryToOctalNum = parseInt(binary, 2).toString(8);
        setResult('Binary-Octal',binaryToOctalNum);

    } catch (error) {
       printError();
    }
}
// for octalToBinary
function octalToBinary() {
    try {
        var inputField = document.getElementById("display");
        let octal = inputField.value;
        let octalToBinaryNum = parseInt(octal, 8).toString(2);
        setResult('Octal-Binary',octalToBinaryNum);

    } catch (error) {
        printError();
    }
}

// for binaryToHexadecimal
function binaryToHexadecimal() {
    try {
        var inputField = document.getElementById("display");
        let binary = inputField.value;
        let binaryToHexaNum = parseInt(binary, 2).toString(16);
        setResult('Binary-Hexa',binaryToHexaNum);

    } catch (error) {
        printError();
    }
}

// for hexadecimalToBinary
function hexadecimalToBinary() {
    try {
        var inputField = document.getElementById("display");
        let hexadecimal = inputField.value;
        let hexadecimalToBinaryNum = parseInt(hexadecimal, 16).toString(2);
        setResult('Hexa-Binary',hexadecimalToBinaryNum);

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
        setResult('Octal-Hexa',octalToHexaNum);

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
        print('Hexa-Octal',hexadecimalToOctalNum);

    } catch (error) {
        printError();
    }
}


// clear button
function clearDisplay() {
    document.getElementById("display").value = "";
}

function del(){
    const inputField = document.getElementById('display');
    inputField.value = inputField.value.slice(0,-1);
}