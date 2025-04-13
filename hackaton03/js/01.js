// 1. 

let numero = prompt("Ingrese un número:"); // campo para capturar el número

numero = parseInt(numero); // convertir a entero para poder ahcer operaciones matemáticas

if (numero % 3 === 0 && numero % 5 === 0) {
    alert("Múltiplo 3 y 5");
} else if (numero % 3 === 0) {
    alert("Múltiplo 3");
} else if (numero % 5 === 0) {
    alert("Múltiplo 5");
} else {
    alert("No es múltiplo de 3 ni de 5");
}