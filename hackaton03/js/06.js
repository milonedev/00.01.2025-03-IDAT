let numero = parseInt(prompt("Ingrese un número del 1 al 10:"));
let linea = "---------------------------------- \n";
if (numero >= 1 && numero <= 10) {
    for (let i = 1; i <= 12; i++) {
        linea += (numero + " x " + i + " = " + (numero * i) + "\n");
    }

    alert(linea);
} else {
    alert("Número fuera de rango.");
}