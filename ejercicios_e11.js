// Arreglo de numeros 
let numeros = [5, 2, 9, 1, 7];

// Orden ascendente
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 2, 5, 7, 9]

// Orden descendente
numeros.sort((a, b) => b - a);
console.log(numeros); // [9, 7, 5, 2, 1]

// Arreglo de cadenas 
let frutas = ["banana", , "naranja", "uva", "manzana", "kiwi", "anona"];
frutas.sort();// Orden alfabético por defecto 
console.log(frutas); // ["banana", , "naranja", "uva", "manzana", "kiwi","anona"]

// orden alfabetico inverso
frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas); // ["uva", "naranja", "manzana", "banana"] 

//-------------------------------------------------------------------------------------------------//
let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "pedro", edad: 20 }
];

personas.sort((a, b) => a.edad - b.edad);
console.log(personas);

personas.sort((a, b) => a.nombre.localeCompare(b.nombre) );
console.log(personas);

//-------------------------------------------------------------------------------------------------//

let numeros1 =[1, 2, 3, 4, 5];
numeros1.reverse();
console.log(numeros1); // [5, 4, 3, 2, 1]   

let palabras = ["hola", "mundo", "javascript"];
palabras.reverse();
console.log(palabras); // ["javascript", "mundo", "hola"]

// 
let calificaciones = [
{estudiante: "Eliab", asignatura: "Matemáticas", calificaciones: 60},
{estudiante: "Xiomara", asignatura: "Historia", calificaciones: 100},
{estudiante: "Camilo", asignatura: "Español", calificaciones: 80},
{estudiante: "Ramiro", asignatura: "Fisico", calificaciones: 55},
{estudiante: "Ana", asignatura: "Quimica", calificaciones: 77}
];

calificaciones.sort((perro, gato) => gato.estudiante - perro.estudiante);
console.log(calificaciones);

// Ordenarlo inverso de la a A la Z por nombre del estudiante
calificaciones.sort((a, b) => a.estudiante.localeCompare(b.estudiante));
console.log(calificaciones);



// Ejemplo con arreglos de objetos: 

let personas2 = [
{ nombre: "Juan", edad: 25 },
{ nombre: "Ana", edad: 30 },
{ nombre: "Pedro", edad: 20 }
];
personas2.reverse();
console.log(personas2);

//-------------------------------------------------------------------------------------------------//

// Crear un nuevo arreglo ordenado

let numeros3 = [5, 2, 9, 1, 7];
let numerosOrdenados = [...numeros3].sort((a, b) => a - b);
console.log(numerosOrdenados); // [1, 2, 5, 7, 9]
console.log(numeros3); // [5, 2, 9, 1, 7] (original no modificado)

// EJERCICIOSSSSSSSSSSS .............................................................................//

// 1. Dado un arreglo de números [10, 3, 8, 1, 6], ordénalo en orden ascendente utilizando el método sort().

let numeros4 = [10, 3, 8, 1, 6];
numeros4.sort((a, b) => a - b);
console.log(numeros4); // [1, 3, 6, 8, 10]

// 2. Dado un arreglo de cadenas ["perro", "gato", "elefante", "ardilla"], ordénalo alfabéticamente sin modificar el arreglo original.

let animales = ["perro", "gato", "elefante", "ardilla"];
let animalesOrdenados = [...animales].sort();
console.log(animalesOrdenados); // ["ardilla", "elefante", "gato", "perro"]

// 3. Dado un arreglo de objetos [{ nombre: "Luis", puntaje: 85 }, { nombre: "Marta", puntaje: 92 }, { nombre: "Sofía", puntaje: 78 }], ordénalo por puntaje en orden descendente.
let estudiantes = [
    { nombre: "Luis", puntaje: 85 },
    { nombre: "Marta", puntaje: 92 },
    { nombre: "Sofía", puntaje: 78 }
];
estudiantes.sort((a, b) => b.puntaje - a.puntaje);
console.log(estudiantes);

//4. Dado un arreglo de números [4, 9, 2, 7, 5], invierte su orden utilizando el método reverse().
let numeros5 = [4, 9, 2, 7, 5];
numeros5.reverse();
console.log(numeros5); // [5, 7, 2, 9, 4]   


//5. Dado un arreglo de objetos [{ producto: "Laptop", precio: 1200 }, { producto:"Teléfono", precio: 800 }, { producto: "Tableta", precio: 600 }], ordénalo por precio en orden ascendente sin modificar el arreglo original.
let productos = [
    { producto: "Laptop", precio: 1200 },
    { producto: "Teléfono", precio: 800 },      
    { producto: "Tableta", precio: 600 }
];
let productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log(productosOrdenados);
console.log(productos); // Original no modificado

// 6. Dado un arreglo de cadenas ["manzana", "banana", "kiwi", "fresa"], invierte su orden y luego ordénalo alfabéticamente.
let frutas2 = ["manzana", "banana", "kiwi", "fresa"];
frutas2.reverse();
console.log(frutas2);   
