
// // FUNCION: Ejectuar un pedazo de codigo

// // 1.- declarar una funcion
// // 2.- nombre de la funcion
// // 3.- parametros
// // 4.- retorno de valor

// // Funciones basicas o de primer grado.
// function sumar(a, b) {
//     return a + b;
// }

// // sumar(2, 2)

// // Una funcion que retorne un string capilizado 
// // "erick" a "Erick"
// // juaN12 esto esta mal juan
// function capitalizar(str) {
//     if (typeof str !== "string" && str.length === 0) {
//         return "No es una cadena de texto o esta vacio";
//     }

//     str = str.toLowerCase();

//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// // console.log(capitalizar("erick"))
// // console.log(capitalizar("juaN"))

// // Funciones de 2 grado
// // Funciones que order superior
// // Recibe una funcion como argumento o parametro

// function verificarEdad(edad, callback) {
//     if (edad >= 18) {
//         return callback(true);
//     } else {
//         return callback(false);
//     }
// }

// function mayorDeEdad(isMayor) {
//     if (isMayor) {
//         return "Es mayor de edad";
//     } else {
//         return "Es menor de edad";
//     }
// }

// function menorDeEdad(isMenor) {
//     if (isMenor) {
//         return isMenor;
//     } else {
//         return isMenor;
//     }
// }

// // console.log(verificarEdad(18, mayorDeEdad));
// // console.log(verificarEdad(18, menorDeEdad));

// // Funciones Asincronas

// async function obtenerDatos() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hola mundo");
//         }, 10000);
//     });
// }

// async function obtenerDatoSimulados() {
    
//     try {
//         console.log('Obteniendo datos...');
//         const datos = await obtenerDatos();
//         console.log(datos);
//     } catch (error) {
//         console.error("Error al obtener los datos", error);
//     }
// }

// obtenerDatoSimulados();


// METODOS: 

// son funciones que pertenecen a un tipo de varaible en javascript

// METODOS DE CADENA

// length

console.log("JuaN".toLowerCase())
console.log("juan".toUpperCase())
console.log("juan".length)


const listPersonas = [
    {
        nombre: "Erick",
        apellido: "Juarez",
        edad: 22,
        ciudad: "Mexico",
        profesion: "Desarrollador",
    },
    {
        nombre: "Juan",
        apellido: "Juarez",
        edad: 22,
        ciudad: "Mexico",
        profesion: "Desarrollador",
    },
]

// console.log(persona.toUpperCase())
// console.log(listPersonas.toUpperCase())


// Funcion para validar la existe de una propiedad hasOwnProperty

// console.log(persona.hasOwnProperty("city"))

// persona.valueOf = () => persona.nombre;

// const newPerson = persona.valueOf()
// console.log(newPerson)
// console.log(persona.valueOf())

// // Metodo para ver todas las llaves(keys) de un objeto 

// const llaves = Object.keys(persona);
// console.log(llaves)

// // Metodo para ver todos los valores de un objeto
// const valores = Object.values(persona);
// console.log(valores)

const persona = {
    nombre: "Erick",
    apellido: "Juarez",
    edad: 22,
    ciudad: "Mexico",
    profesion: "Desarrollador",
    saludar: function() {
        return `Hola ${this.nombre}`;
    },
}

// console.log(persona.saludar())

// // METODOS DE ARREGLOS
// // 1.- push
// // Agregar un elemento al final de un arreglo
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// numeros.push(6);

// console.log(numeros);

// // 2.- pop
// // Eliminar el ultimo elemento de un arreglo
// numeros.pop();
// console.log(numeros);

// // 3.- shift
// // Eliminar el primer elemento de un arreglo
// numeros.shift();
// console.log(numeros);

// // 4.- unshift
// // Agregar un elemento al inicio de un arreglo
// numeros.unshift(0);
// console.log(numeros);

// // 5.- splice
// // Agregar o eliminar elementos de un arreglo
// numeros.splice(1, 0, "X");
// console.log(numeros);

// METODOS PARA BUSCAR O FILTRAR ELEMENTOS EN UN ARREGLO

// // 1.- find
// // Buscar un elemento en un arreglo
// Econtrar al numero 5 

// let msg;

// const encontrado = numeros.find((num, indice, obj) => 
//  {

//     if (num === 5) {
//         msg = "Encontrado en la posicion " + indice;
//     } else {
//         msg = "No encontrado";
//     }


//    return num === 5;
//  });


//  findIndex
// Retorna el indeice del primer elemento que cumple la condicion 

// const encontradoIndex = numeros.findIndex((num) => num === 3);
// console.log(encontradoIndex);

// filter
// Retorna un nuevo arreglo con los elementos que cumplen la condicion
// const numerosFiltrados = numeros.filter((num) => num % 2 === 0);

// console.log(numeros);
// console.log(numerosFiltrados);

// Metoos de transformacion de arreglos

// Metodo map: Crea un nuevo array aplciando una funcion a cada elemento del array
const numerosMap = numeros.map((num) => num * 2);

// const encontrado = numeros.find((num, indice, obj) => {
//     // num * 7
//     if (num === 5) {
//         return true;
//     } else {
//         return false;
//     }
// }
//  );

// console.log('numeros: ', numeros);
// console.log('numeroaMap: ', numerosMap);
// console.log('encontrado: ', encontrado)
// console.log('numeros: ', numeros);

// Reduce
// Acumula los valores de un arreglo en un solo valor
// const suma = numeros.reduce((acumulador, num) => {
//     return acumulador + num;
// }, 0);

// console.log(suma);

// // forEach
// // Itera sobre cada elemento de un arreglo
// numeros.forEach((num, index) => {
//     console.log(`El numero ${num} esta en la posicion ${index}`);
// });

// Metodos para ordenar arreglos
// sort
// Ordena los elementos de un arreglo
numeros.sort((a, b) => a - b);
console.log(numeros);

numeros.reverse();
console.log(numeros);

// Metodos para convertir los valores a string
// join
const numerosString = numeros.join();
console.log(numerosString);

// toString

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
console.log(typeof dias);
const numerosString2 = dias.toString();
console.log(typeof numerosString2);

// slice    
// Retorna una copia de una parte del arreglo
const numerosSlice = dias.slice(1, 3);
console.log(numerosSlice);