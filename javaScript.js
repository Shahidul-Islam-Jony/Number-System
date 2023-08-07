
// Writing value form key to display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
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

// for binary
function binary() {
    try {
        var inputField = document.getElementById("display");
        var inputText = parseInt(inputField.value);
        let binaryNum= inputText.toString(2);
        inputField.value = "Output: " + binaryNum;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}

// for octal
function octal() {
    try {
        var inputField = document.getElementById("display");
        var inputText = parseInt(inputField.value);
        let octalNum= inputText.toString(8);
        inputField.value = "Output: " + octalNum;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}

// for hexaDecimal
function hexaDecimal() {
    try {
        var inputField = document.getElementById("display");
        var inputText = parseInt(inputField.value);
        let hexaDecimalNum= inputText.toString(16);
        inputField.value = "Output: " + hexaDecimalNum;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}

// for binaryToDecimal
function binaryToDecimal() {
    try {
        var inputField = document.getElementById("display");
        let desimalNum1 = parseInt(inputField.value,2);
        inputField.value = "binary-desi: " + desimalNum1;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}

// for octalToDecimal
function octalToDecimal() {
    try {
        var inputField = document.getElementById("display");
        let desimalNum2 = parseInt(inputField.value,8);
        inputField.value = "octal-desi: " + desimalNum2;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}

// for hexaToDecimal
function hexaToDecimal() {
    try {
        var inputField = document.getElementById("display");
        let desimalNum3 = parseInt(inputField.value,16);
        inputField.value = "hexa-desi: " + desimalNum3;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}
// for binaryToOctal
function binaryToOctal() {
    try {
        var inputField = document.getElementById("display");
        let binary=inputField.value;
        let binaryToOctalNum = parseInt(binary,2).toString(8);
        inputField.value = "binaryToOctal: " + binaryToOctalNum;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}
// for octalToBinary
function octalToBinary() {
    try {
        var inputField = document.getElementById("display");
        let octal=inputField.value;
        let octalToBinaryNum = parseInt(octal,8).toString(2);
        inputField.value = "octalToBinary: " + octalToBinaryNum;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}

// for binaryToHexadecimal
function binaryToHexadecimal() {
    try {
        var inputField = document.getElementById("display");
        let binary=inputField.value;
        let binaryToHexaNum = parseInt(binary,2).toString(16);
        inputField.value = "binaryToHexadecimal: " + binaryToHexaNum;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}

// for hexadecimalToBinary
function hexadecimalToBinary() {
    try {
        var inputField = document.getElementById("display");
        let hexadecimal=inputField.value;
        let hexadecimalToBinaryNum = parseInt(hexadecimal,16).toString(2);
        inputField.value = "hexadecimalToBinary: " + hexadecimalToBinaryNum;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}

// for octalToHexadecimal
function octalToHexadecimal() {
    try {
        var inputField = document.getElementById("display");
        let octal=inputField.value;
        let octalToHexaNum = parseInt(octal,8).toString(16);
        inputField.value = "octalToHexadecimal: " + octalToHexaNum;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}


// for hexadecimalToOctal
function hexadecimalToOctal() {
    try {
        var inputField = document.getElementById("display");
        let hexadecimal=inputField.value;
        let hexadecimalToOctalNum = parseInt(hexadecimal,16).toString(8);
        inputField.value = "hexadecimalToOctal: " + hexadecimalToOctalNum;

    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}


// clear button
function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("result").innerHTML = "";
}