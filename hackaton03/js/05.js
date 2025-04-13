// 5
// let anio = parseInt(prompt("Ingrese un año:"));

if (anio % 4 === 0) {
    if (anio % 100 === 0) {
        if (anio % 400 === 0) {
            alert(anio + " es un año bisiesto.");
        } else {
            alert(anio + " no es un año bisiesto.");
        }
    } else {
        alert(anio + " es un año bisiesto.");
    }
} else {
    alert(anio + " no es un año bisiesto.");

}
