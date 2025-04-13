// 3.
let usuario = "admin";
let contrasena = "1234";

let intento = 3;
let bloqueado = false;

while(intento > 0 && !bloqueado) {
    let usuarioIngresado = prompt("Ingrese su usuario:");
    let contrasenaIngresada = prompt("Ingrese su contraseña:");

    if (usuarioIngresado === usuario && contrasenaIngresada === contrasena) {
        alert("Inicio de sesión exitoso");
        break;
    } else {
        intento = intento - 1;
        alert("Usuario o contraseña incorrectos. Intento "+intento+" de 3.");
    }

    if (intento === 0) {
        bloqueado = true;
        alert("Usuario bloqueado por 3 intentos fallidos.");
    }
}