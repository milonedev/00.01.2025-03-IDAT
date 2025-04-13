// 9.
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));
let mayor;

if (num1 > num2 && num1 > num3) {
    mayor = num1;
} else if (num2 > num1 && num2 > num3) {
    mayor = num2;
} else {
    mayor = num3;
}

alert("El número mayor es: " + mayor);
