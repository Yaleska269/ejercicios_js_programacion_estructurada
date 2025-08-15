 // 1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola

let nombre = 'Yaleska Cristal Sevilla Centeno' 
console.log(nombre);

// 2. Declara dos variables edad y ciudad y muéstralas juntas en un solo console.log.

let edad = 18;
let ciudad = "Juigalpa"
console.log('Edad: $(edad, Ciudad:  $(ciudad)');

// 3. Declara una constante PI con el valor 3.1416 y muéstrala en consola.

const PI = 3.1416;
console.log("Valor de PI", + PI);

// 4. Declara tres variables con valores numéricos y calcula su promedio.

let a = 50;
let b = 70;
let c = 90;
let promedio = (a + b + c) / 3;
console.log("El promedio es: " + promedio);

// 5. Declara una variable esMayorDeEdad con un valor booleano y muéstrala.

let esMayorDeEdad = true;
console.log("Es mayor de edad? " + esMayorDeEdad);

// 6. Declara dos números y muestra su suma.

let num1 = 15;
let num2 = 25;
let suma = num1 + num2;
console.log("La suma es: " + suma);

// 7. Declara dos números y muestra su resta, multiplicación y división.

let num3 = 40;
let num4 = 8;       
let resta = num3 - num4;
let multiplicacion = num3 * num4;
let division = num3 / num4;
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);

// 8. Declara dos números y muestra el resultado de elevar el primero al segundo.

let base = 2;
let exponente = 4;
let resultado = Math.pow(base, exponente);
console.log("Resultado de elevar", base, "a la potencia de", exponente, "es:", resultado);

// 9. Declara una variable precio y otra descuento (en %) y calcula el precio final.

let precio = 100;
let descuento = 20; // 20%
let precioFinal = precio - (precio * descuento / 100);
console.log("Precio final con descuento: " + precioFinal);

// 10.Usando un for, muestra en consola los números del 1 al 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
} 

// 11.Usando un for, muestra en consola la tabla de multiplicar del 5.

let numero = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

// 12.Usando un while, muestra en consola los números pares del 2 al 20.

let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2; // Aumentamos de 2 en 2 para obtener los números pares
}

// 13.Crea una función saludar que reciba un nombre y muestre un saludo.

function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

saludar("Yaleska Cristal Sevilla Centeno");

// 15.Crea una función esPar que reciba un número y retorne true si es par, false si no lo es.

function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(4)); // true
console.log(esPar(5)); // false

// 16.Crea una función areaRectangulo que reciba base y altura y retorne su área.

function areaRectangulo(base, altura) {
    return base * altura;
}
console.log("Área del rectángulo:", areaRectangulo(5, 10));

// 17.Crea una función flecha multiplicar que reciba dos números y retorne su producto.

const multiplicar = (num1, num2) => num1 * num2;
console.log("Producto:", multiplicar(6, 7));    

// 18.Crea una función flecha convertirCelsiusAFahrenheit que reciba grados Celsius y retorne su equivalente en Fahrenheit.

const convertirCelsiusAFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log("30 grados Celsius son", convertirCelsiusAFahrenheit(30), "grados Fahrenheit");

// 19.Crea una función flecha mayorDeDos que reciba dos números y retorne el mayor.

let mayorDeDos = (num1, num2) => {
    return (num1 > num2) ? num1 : num2;
}
console.log( mayorDeDos(10, 20));

// 20.Crea una función flecha calcularIVA que reciba un precio y retorne el precio más IVA (15%). 

let calcularIVA = (precio) => {
    return precio + (precio * 0.15);
}
console.log("Precio con IVA:", calcularIVA(100));   

// 21.Declara un arreglo con 5 nombres y recórrelo con un for mostrando cada nombre.

let nombres = ['Anabel', 'Roberto', 'Carlos', 'Marina', 'Sofía'];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 22.Declara un arreglo con 5 números y usa un for para mostrar solo los números mayores que 10.

let numeros = [5, 12, 8, 20, 3];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(numeros[i]);
    }
}

// 23.Declara un arreglo con 5 palabras y usa un for para mostrar su longitud (.length).

let palabras = ['manzana', 'banana', 'cereza', 'durazno', 'uva'];
for (let i = 0; i < palabras.length; i++) {
    console.log(`La palabra ${palabras[i]} tiene ${palabras[i].length} letras.`);
}

// 24.Declara un objeto persona con propiedades nombre, edad y ciudad. Usa un for...in para mostrar cada clave y valor.

let persona = {
    nombre: 'Yaleska Cristal Sevilla Centeno',
    edad: 18,
    ciudad: 'Juigalpa'          
};
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// 25.Declara un arreglo de objetos con 3 productos (nombre y precio) y usa un for para mostrar solo los nombres de los productos.

let productos = [
    { nombre: 'Laptop', precio: 800 },
    { nombre: 'Iphone 13', precio: 500 },
    { nombre: 'Tablet', precio: 300 }
];
for (let i = 0; i < productos.length; i++) {            
    console.log(productos[i].nombre);
}

