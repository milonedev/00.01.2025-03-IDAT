// 8.
let opcion;

do {
    opcion = prompt("Seleccione una opción:\n1. Sumar\n2. Restar\n3. Salir");
    let num1, num2;
    switch (opcion) {
        case "1":
            num1 = parseInt(prompt("Ingrese el primer número:"));
            num2 = parseInt(prompt("Ingrese el segundo número:"));
            alert("Resultado: " + (num1 + num2));
            break;
        case "2":
            num1 = parseInt(prompt("Ingrese el primer número:"));
            num2 = parseInt(prompt("Ingrese el segundo número:"));
            alert("Resultado: " + (num1 - num2));
            break;
        case "3":
            alert("Saliendo...");
            break;
        default:
            alert("Opción no válida.");
    }
} while (opcion !== "3");
