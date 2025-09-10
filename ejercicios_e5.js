
// Métodos de los arreglos

// 1. push(): Añade uno o más elementos al final del arreglo y devuelve la nueva longitud del arreglo.

let numeros1 = [1, 2, 3];
let longitud1 = numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(longitud); // 5

// 2. unshift(): Añade uno o más elementos al inicio del arreglo y devuelve la
//nueva longitud.
let letras = ['Sevilla', 'Centeno'];
let longitud = letras.unshift('Yaleska','Cristal' );
console.log(letras); // ['a', 'b']
console.log(longitud); // 3

// 3. pop(): Elimina y devuelve el último elemento del arreglo, reduciendo su
// longitud en 1.

let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop();
console.log(frutas); // ['manzana', 'banana']
console.log(ultima); // 'naranja'

// 4. shift(): Elimina y devuelve el primer elemento del arreglo, reindexando los
//demás elementos.

let colores = ['rojo', 'verde', 'azul'];
let primero = colores.shift();
console.log(colores); // ['verde', 'azul']
console.log(primero); // 'rojo'

// 5. indexOf(elemento, [inicio]): Busca un elemento en el arreglo y devuelve el
//índice de la primera aparición, o -1 si no lo encuentra. Opcionalmente,
// puedes especificar un índice de inicio.

let numeros = [10, 20, 30, 20, 40];
let indice = numeros.indexOf(20); // 1
let indiceDesde2 = numeros.indexOf(20, 2); // 3
console.log(indice); // 1
console.log(indiceDesde2); // 3

// 6. length: Propiedad que devuelve la cantidad de elementos en el arreglo.
// También puede usarse para truncar o extender el arreglo asignando un
// nuevo valor.

let nums = [1, 2, 3];
console.log(nums.length); // 3
nums.length = 1; // Trunca a [1]
nums.length = 5; // Extiende a [1, undefined, undefined, undefined, undefined]

// 7. sort([comparador]): Ordena los elementos del arreglo en orden ascendente
//(por defecto, como cadenas). Por defecto, sort() convierte los elementos a
//cadenas y los ordena lexicográficamente, pero para números necesitas una
//función comparadora. Opcionalmente, acepta una función comparadora para
//personalizar el orden.

let numeros2 =  [3, 1, 4, 2];
numeros2.sort((a, b) => a - b); // Orden ascendente
console.log(numeros2); // [1, 2, 3, 4]

// 8. join(separador): Convierte todos los elementos del arreglo en una cadena,
//usando el separador especificado (por defecto, una coma).

let palabras = ['hola', 'mundo'];
let texto = palabras.join(' '); // 'hola mundo'

// 9. concat(arreglo1, arreglo2, ...): Une dos o más arreglos (o elementos) y
// devuelve un nuevo arreglo.

let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5]);
console.log(combinado); // [1, 2, 3, 4, 5]


// 10.forEach(callback(elemento, indice, arreglo)): Ejecuta una función por cada
// elemento del arreglo, sin devolver un nuevo arreglo.javascript

let colores1 = ['rojo', 'verde', 'azul'];
colores1.forEach(color => console.log(color));
// Imprime: rojo, verde, azul

for(let color of colores1) {
    console.log(color);
}

for (let i = 0; i < colores1.length; i++) {
    console.log(colores1[i]);
}   

// 11.map(callback(elemento, indice, arreglo)): Crea un nuevo arreglo aplicando
//una función a cada elemento del arreglo original.

let numeros3 = [1, 2, 3];
let dobles = numeros3.map(x => x * 2);
console.log(dobles); // [2, 4, 6]

// 12.filter(callback(elemento, indice, arreglo)): Crea un nuevo arreglo con los
// elementos que pasan una condición definida por la función callback.

let numeros4 = [1, 2, 3, 4 ];
let pares = numeros4.filter(x => x % 2 === 0);
console.log(pares); // [2, 4]

// 13.reduce(callback(acumulador, elemento, indice, arreglo), [valorInicial]):
// Reduce el arreglo a un solo valor aplicando una función acumuladora.

let numeros5 = [1, 2, 3, 4];
let suma = numeros5.reduce((acc, curr) => acc + curr, 0);
console.log(suma); // 10


//14.some(callback(elemento, indice, arreglo)): Devuelve true si al menos un
//elemento cumple la condición especificada.

let numeros6 = [1, 2, 3, 4];
let hayPares1 = numeros6.some(x => x % 2 === 0);

//14.some(callback(elemento, indice, arreglo)): Devuelve true si al menos un
// elemento cumple la condición especificada.

let numeros7 = [1, 2, 3, 4];
let hayPares2 = numeros7.some(x => x % 2 === 0);

// 15.every(callback(elemento, indice, arreglo)): Devuelve true si todos los
// elementos cumplen la condición especificada.

let numeros8 = [2, 4, 6, 8];
let todosPares = numeros8.every(x => x % 2 === 0);
console.log(todosPares); // true

// 16.find(callback(elemento, indice, arreglo)): Devuelve el primer elemento que
// cumple la condición especificada, o undefined si no lo encuentra.
let numeros9 = [1, 2, 3, 4];
let encontrado = numeros9.find(x => x > 2);
console.log(encontrado); // 3

//17.findIndex(callback(elemento, indice, arreglo)): Devuelve el índice del
//primer elemento que cumple la condición, o -1 si no lo encuentra.
let numeros10 = [1, 2, 3, 4];
let indice1 = numeros10.findIndex(x => x > 2);
console.log(indice); // 2

//18.entries(): Devuelve un iterador de los índices y valores del arreglo.
let colores2 = ['rojo', 'verde', 'azul'];
let iterador1 = colores2.entries();
console.log([...iterador]);
// [[0, 'rojo'], [1, 'verde'], [2, 'azul']]

// 19.keys(): Devuelve un iterador de los índices del arreglo.
let colores3 = ['rojo', 'verde', 'azul'];
let iterador2 = colores3.keys();
console.log([...iterador]); // [0, 1, 2]

// 20.values(): Devuelve un iterador de los valores del arreglo.
let colores4 = ['rojo', 'verde', 'azul'];
let iterador = colores4.values();
console.log([...iterador]); // ['rojo', 'verde', 'azul']