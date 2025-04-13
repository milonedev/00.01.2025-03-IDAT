// 4.

let edad = parseInt(prompt("Ingrese su edad:"));

if (edad < 12) {
    alert("Niño");
} else if (edad >= 12 && edad <= 17) {
    alert("Adolescente");
} else if (edad >= 18 && edad <= 59) {
    alert("Adulto");
} else {
    alert("Adulto mayor");
}
