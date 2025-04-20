// Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”


const saludar = (nombre, apellido, edad) => {
    return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
}

console.log(saludar("Sebastian", "Yabiku", 33))


// Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// const cuboNumeros = (...numeros) => {
//     let suma = 0;
//     for(i = 0; i < numeros.length; i++){
//         suma += numeros[i] ** 3;
//     }  
//     return suma;
// }
// console.log(cuboNumeros(2, 3, 4));

// const sumarCubos = (...nums) => {
//     return nums.reduce((a,b) => a + b**3, 0);
// }

// console.log(sumarCubos(2, 3, 4)) // 855

// Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

const getType = (valor) => {
    return typeof valor;
}

// console.log(getType(1)); // number
// console.log(getType("1")); // string
// console.log(getType(true)); // boolean
// console.log(getType([])); // object
// console.log(getType({})); // object
// console.log(getType(null)); // object

// Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

const sumar = (...args) => {
    return args.reduce((a,b) => a + b, 0);
}

// console.log(sumar(1, 2, 3, 4, 5)); // 15

// Crear una función que reciba un array de valores y filtre los valores que no son string

const arrayInicial = [2, "papel", {nombre: "Pedro", apellido: "Perez"}, 0.5, "carton", false, null, {nombre: "Ana", apellido: "Calderon"}];
 
function filtrarArrayNoString(array) {
    return array.filter(elemento => typeof elemento !== "string");
}
 
let arrayFiltrado = filtrarArrayNoString(arrayInicial);

// console.log(arrayFiltrado);

// Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

const minMax = (array) => {
    return [Math.min(...array), Math.max(...array)];
}

// console.log(minMax([1, 2, 3, 4, 5]))


// Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"


const matriz = [1,2,3,4,5,6,7,8,9,0];
 
function formatPhoneNumber(matriz){
    const parte1 = matriz.slice(0,3).join("");
    const parte2 = matriz.slice(3,6).join("");
    const parte3 = matriz.slice(6).join("");
    return `(${parte1}) ${parte2}-${parte3}`;
}
 
// console.log('El telefono resultantes es: ' + formatPhoneNumber(matriz));

// Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

const matrizInicial = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
 
    // function findLargestNums(matriz) {
    //     let m = [];
    //     matriz.forEach(element => {
    //         let max = Math.max(...element);
    //         m.push(max);
    //     });
    //     return m;
    // }

const findLargestNums = arr => arr.map(subArr => Math.max(...subArr));
 
console.log(findLargestNums(matrizInicial));

// Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// // The first "l" has index 2, the last "l" has index 3.

// charIndex("circumlocution", "c") ➞ [0, 8]
// // The first "c" has index 0, the last "c" has index 8.


const palabra = "calabaza";
const caracter = "a";
 
function primeroUltimo(str, chr) {
    return [str.indexOf(chr), str.lastIndexOf(chr)];
}
 
// console.log(`La primera aparición del caracter "${caracter}" en la palabra "${palabra}" está en el índice ${primeroUltimo(palabra, caracter)[0]} y la última en el índice ${primeroUltimo(palabra, caracter)[1]}`);

const charIndex = (str, char) => {
    return [str.indexOf(char), str.lastIndexOf(char)];
}

// console.log(charIndex("circumlocution", "c")); // [0, 8]


// Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

const objeto = {
    a: 1,
    b: 2,
    c: 3
}
 
// function toArray(objeto){
//     const claves =  Object.keys(objeto);
//     const valores =  Object.values(objeto);
//     let arreglo = [];
//     for(let i=0; i<claves.length; i++){
//         const aux = [claves[i],valores[i]];
//         arreglo.push(aux);
//     }
//     return arreglo;  
// }

const toArray = obj => Object.entries(obj);
 
// console.log(toArray(objeto)); 

// Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

const getBudgets = arr => arr.reduce((sum, person) => sum + person.budget, 0);

// console.log(getBudgets([
//       { name: "John", age: 21, budget: 23000 },
//       { name: "Steve",  age: 32, budget: 40000 },
//       { name: "Martin",  age: 16, budget: 2700 }])); // 65700

// Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]

const estudiantes = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
 ]

// function getStudentNames(array){
//  let names = [];
//  array.forEach(element => {
//      let nombre = element["name"];
//      names.push(nombre);
//  });
//  return names;
// }

const getStudentNames = (array) => {
    return array.map(item => item.name);
}
// console.log(getStudentNames(estudiantes));

// Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]


const objectToArray = obj => Object.entries(obj);
// console.log(objectToArray({
//     likes: 2,    
//     dislikes: 3,
//     followers: 10
// })); // [["likes", 2], ["dislikes", 3], ["followers", 10]]

// Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// // 1² + 2² + 3² =
// // 1 + 4 + 9 =
// // 14

const squaresSum = (num) => {
    let newArray = [];
    for (let i = 1; i <= num; i++) {
        newArray.push(i);
    }
    return newArray.reduce((a,b) => a + b**2, 0);
}

// console.log(squaresSum(3))


// Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

const multiplyByLength = (array) => array.map(num => num * array.length);

// console.log(multiplyByLength([2, 3, 1, 0]))

// Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]

// function countdown(n) {
//     let array = [];
//     for(let i=n; i>=0; i--){
//         array.push(i);
//     }
//     return array;
// }
 
const countdown = n => Array.from({length: n + 1}, (_, i) => n - i);
console.log(countdown(5));

// Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// // Smallest number is -50, biggest is 32.

const matriz1 = [10, 4, 1, 4, -10, -50, 32, 21];
 
function diffMaxMin(array){
    let max = Math.max(...array);
    let min = Math.min(...array);
    return max - min;
}
 
// console.log(diffMaxMin(matriz1));

// Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

// const matriz2 = [1, 2, 2.1, 3, "x", "y", 10];
 
// function filterList(matriz){
//     return matriz.filter(elemento => Number.isInteger(elemento))
// }
 
// console.log(filterList(matriz2))

// function filterList(arr) {
//     return arr.filter(elemento => Number.isInteger(elemento));
//   }

// Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]
// function repeat(elemento, veces){
//     let array = [];
//     for(let i=1; i<=veces; i++){
//         array.push(elemento);
//     }
//     return array;
// }    
 
// const repeat = (elemento, veces) => Array(veces).fill(elemento);
// const repeat = (elemento, veces) => {
//     return Array.from({length: veces}, () => elemento);
// }
// console.log(repeat(13,5));

// Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"

String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiou]/g, vocal);
}

// console.log("apples and bananas".vreplace("u"))

    // Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
    // findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

    const findNemo = sentence => `I found Nemo at ${sentence.split(" ").indexOf("Nemo") + 1}!`; 

    // console.log(findNemo("I am finding Nemo !")) // "I found Nemo at 4!"

//     Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"

const capLast = (string) => {
    lastChar = string.charAt(string.length - 1);
    return string.replace(lastChar, lastChar.toUpperCase());
}
 
console.log(capLast("Hola"))