
const display = document.getElementById("display");


const buttons = document.querySelectorAll("#calculadora button");


let currentOperation = "";

// para actualizar el display
function updateDisplay(value) {
    display.value = value;
}


function calculate() {
    try {
        let result = eval(currentOperation);
        updateDisplay(result);
        // actualiza la operación actual
        currentOperation = result.toString();
    } catch (error) {
        updateDisplay("Error");
        currentOperation = "";
    }
}


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.innerText;

        if (buttonText === "C") {
            // limpiar todo, el display y la oepracion 
            currentOperation = "";
            updateDisplay("");
        } else if (buttonText === "DE") {
            // eliminar el ultimo caracter 
            currentOperation = currentOperation.slice(0, -1);
            updateDisplay(currentOperation);
        } else if (buttonText === "=") {
            // calcular
            calculate();
        } else if (buttonText === ",") {
            currentOperation += ".";
            updateDisplay(currentOperation);
        } else {
            // agregar el texto al display
            currentOperation += buttonText;
            updateDisplay(currentOperation);
        }
    });
});


