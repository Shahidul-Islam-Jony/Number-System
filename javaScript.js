
// const button = document.getElementById('binary');

// // Add a click event listener
// button.addEventListener('click', function () {
//     // Display "Hello" when clicked
//     const num=parseInt(prompt("Enter any number: "));
//     let binaryNum=num.toString(2);
//     document.write(binaryNum);
// });


function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("result").innerHTML = "= " + result;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
    }
}
function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("result").innerHTML = "";
}