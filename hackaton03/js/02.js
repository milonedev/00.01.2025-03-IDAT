let operacion = prompt("Ingrese una operación (+, -, *, /):");

let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

switch (operacion) {
    case "+":
        alert("Resultado: " + (num1 + num2));
        break;
    case "-":
        alert("Resultado: " + (num1 - num2));
        break;
    case "*":
        alert("Resultado: " + (num1 * num2));
        break;
    case "/":
        if (num2 !== 0) {
            alert("Resultado: " + (num1 / num2));
        } else {
            alert("Error: División por cero no permitida.");
        }
        break;
    default:
        alert("Operación no válida.");
}