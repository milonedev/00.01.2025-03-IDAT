// Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

const power = (base, exponente) => base ** exponente;
// console.log(power(2, 3)); // 8

// Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3
function area(num1, num2) {
    let area = (num1 * num2)/2;
    let resultado = "El area del traingulo es:  "  + area;
 
    return resultado;
 
}
 
// console.log(area(3,2));

// Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

const calculator = (num1, operacion, num2) => {
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "No se puede dividir entre 0";
        case "%":
            return num2 !== 0 ? num1 % num2 : "No se puede dividir entre 0";
        default:
            return "El parámetro no es reconocido";
    }
} 

console.log(calculator(2, "/", 0)); // 4