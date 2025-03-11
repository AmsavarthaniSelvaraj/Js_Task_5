function validateInput(input) {
    input.value = input.value.replace(/[^0-9.]/g, ''); 
}

function findMinMax(action) {
    let num1 = document.getElementById("num1").value.trim();
    let num2 = document.getElementById("num2").value.trim();
    let resultElement = document.getElementById("result");

    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = "Please enter valid numbers!";
        return;
    }

    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);

    let result = (action === 'max') ? Math.max(number1, number2) : Math.min(number1, number2);
    
    resultElement.innerText = (action === 'max') ? `Maximum Value: ${result}` : `Minimum Value: ${result}`;
}
