// 10.
let numero = parseInt(prompt("Ingrese un número inicial:"));

let linea = "---------------------------------- \n";

if (numero > 0) {
    while (numero >= 0) {
        linea += numero+"\n";
        numero--;
    }
} else {
    alert("Número inicial debe ser mayor a 0.");
}

alert(linea);