// Ejemplo:

const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 15

// Ejemplo con arreglo de objetos:

const productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 }
];
const total = productos.reduce((acc, prod) => acc + prod.precio, 0);
console.log(total); // 100

//El método find devuelve el primer elemento del arreglo que cumple con la condición. Ejemplo:

const nombres = ["Ana", "Luis", "Pedro", "María"];
const encontrado = nombres.find(nombre => nombre.startsWith("P"));
console.log(encontrado); // "Pedro"

// Ejemplo con arreglo de objetos:

const usuarios = [
    { id: 1, nombre: "Carlos" },
    { id: 2, nombre: "Lucía" },
    { id: 3, nombre: "Marta" }
];
const usuario = usuarios.find(u => u.id === 2);
console.log(usuario); // { id: 2, nombre: "Lucía" }

// 3. every()
// El método every verifica si todos los elementos del arreglo cumplen con la condición. Devuelve true o false. Ejemplo:
const edades = [18, 22, 30, 25];
const todosMayores = edades.every(edad => edad >= 18);
console.log(todosMayores); // true

// Ejemplo con arreglo de objetos:

const tareas = [
    { nombre: "Estudiar", completada: true },
    { nombre: "Ejercicio", completada: true },
    { nombre: "Leer", completada: false }
];
const todasCompletas = tareas.every(t => t.completada === true);
console.log(todasCompletas); // false

// 4. some()
// El método some comprueba si al menos un elemento del arreglo cumple con la condición. Ejemplo:
const notas = [5, 8, 9, 3];
const hayReprobados = notas.some(nota => nota < 6);
console.log(hayReprobados); // true

// Ejemplo con arreglo de objetos:
const inventario = [
    { producto: "Manzanas", cantidad: 0 },
    { producto: "Naranjas", cantidad: 10 },
    { producto: "Peras", cantidad: 3 }
];
const agotado = inventario.some(item => item.cantidad === 0);
console.log(agotado); // true

//5. filter()
// El método filter crea un nuevo arreglo con todos los elementos que cumplen una condición. Ejemplo:
const numeros1 = [5, 10, 15, 20, 25];
const mayoresQue15 = numeros1.filter(num => num > 15);
console.log(mayoresQue15); // [20, 25]

// Ejemplo con arreglo de objetos:

const empleados = [
    { nombre: "Ana", puesto: "Desarrolladora" },
    { nombre: "Luis", puesto: "Diseñador" },
    { nombre: "Marta", puesto: "Desarrolladora" }
];
const desarrolladores = empleados.filter(e => e.puesto === "Desarrolladora");
console.log(desarrolladores);
// [
// { nombre: "Ana", puesto: "Desarrolladora" },
// { nombre: "Marta", puesto: "Desarrolladora" }
// ]

// Ejemplo de la clase 

const edades1 = [25, 35, 51, 10, 8, 13];

const R = edades1.filter(edad => edad < 10);

console.log(R); // [8]

// Salario que sea mayor a 15000
const usuarios1 = [
    { id: 1, nombre: "Carlos", salario: 20000 },
    { id: 2, nombre: "Lucía", salario: 17300 },
    { id: 3, nombre: "Marta", salario: 11000 },
    { id: 4, nombre: "Eduardo", salario: 18000 }
];


const S = usuarios1.filter(u => u.salario > 15000);
console.log(S);

// ACTIVIDADES

// Empleando el arreglo de objetos adjunto, resuelva los siguientes enunciados:
//1. Obtén un nuevo arreglo con todas las personas cuya edad sea mayor o igual a 18 años.

const persona = {
    nombre: "Carlos",
    edad: 28,
    ciudad: "Madrid"
};  
const personas = [
    { nombre: "Ana", edad: 17, ciudad: "Barcelona" },
    { nombre: "Luis", edad: 22, ciudad: "Madrid" },
    { nombre: "Marta", edad: 15, ciudad: "Valencia" },
    { nombre: "Pedro", edad: 30, ciudad: "Sevilla" }
];  
const mayoresDeEdad = personas.filter(p => p.edad >= 18);
console.log(mayoresDeEdad); // [{ nombre: "Luis", edad: 22, ciudad: "Madrid" }, { nombre: "Pedro", edad: 30, ciudad: "Sevilla" }]

//2. Encuentra la primera persona en el arreglo cuyo nombre comience con la letra "L".

const personaConL = personas.find(p => p.nombre.startsWith("L"));
console.log(personaConL); // { nombre: "Luis", edad: 22, ciudad: "Madrid" }

// 3. Calcula la suma total de las edades de todas las personas en el arreglo.

const sumaEdades = personas.reduce((acc, p) => acc + p.edad, 0);
console.log(sumaEdades); // 84

// 4. Verifica si todas las personas en el arreglo son mayores o iguales a 15 años.


const todosMayores15 = personas.every(p => p.edad >= 15);
console.log(todosMayores15); // true
    
// 5. Comprueba si existe al menos una persona en el arreglo que tenga 40 años

const hay40 = personas.some(p => p.edad === 40);
console.log(hay40);

