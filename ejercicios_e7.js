// Ejercicios
// 1 • Crear una función flecha que reciba un arreglo y uno o más elementos, los
//añada al final del arreglo y devuelva el nuevo arreglo.
const agregarAlFinal = (arreglo, ...elementos) => {
    arreglo.push(...elementos);
    return arreglo;
}
console.log(agregarAlFinal([1, 2, 3], 4, 5)); // [1, 2, 3, 4, 5]


//2 • Crear una función flecha que reciba un arreglo y uno o más elementos, los
//añada al inicio del arreglo y devuelva el nuevo arreglo.
const agregarAlInicio = (arreglo, ...elementos) => {
    arreglo.unshift(...elementos);
    return arreglo;
}
console.log(agregarAlInicio([3, 4, 5], 1, 2)); // [1, 2, 3, 4, 5]


// 3 • Crear una función flecha que reciba un arreglo, elimine y devuelva el último
 //  elemento del arreglo.
const eliminarUltimo = (arreglo) => {
    return arreglo.pop();
}
console.log(eliminarUltimo([1, 2, 3, 4, 5])); // 5


//4 • Crear una función flecha que reciba un arreglo, elimine y devuelva el primer
// elemento del arreglo.

const eliminarPrimero = (arreglo) => {
    return arreglo.shift();
}
console.log(eliminarPrimero([1, 2, 3, 4, 5])); // 1


// 5 • Crear una función flecha que reciba un arreglo, un elemento y opcionalmente
// un índice de inicio, y devuelva el índice de la primera aparición del elemento
// o -1 si no lo encuentra.

const buscarIndice = (arreglo, elemento, inicio = 0) => {
    return arreglo.indexOf(elemento, inicio);
}
console.log(buscarIndice([10, 20, 30, 20, 40], 20)); // 1
console.log(buscarIndice([10, 20, 30, 20, 40], 20, 2)); // 3

// 5 • Crear una función flecha que reciba un arreglo y devuelva la cantidad de
// elementos en el arreglo.

const contarElementos = (arreglo) => {
    return arreglo.length;
}
console.log(contarElementos([1, 2, 3, 4, 5])); // 5



// 6 • Crear una función flecha que reciba un arreglo de números y los ordene en
// orden ascendente usando una función comparadora.
const ordenarAscendente = (arreglo) => {
    return arreglo.sort((a, b) => a - b);
}
console.log(ordenarAscendente([3, 1, 4, 2]));


// 7• Crear una función flecha que reciba un arreglo y un separador, y devuelva
// una cadena con los elementos del arreglo unidos por el separador.
const unirConSeparador = (arreglo, separador = ',') => {
    return arreglo.join(separador);
}           
console.log(unirConSeparador(['manzana', 'banana', 'naranja']));


// 8 • Crear una función flecha que reciba uno o más arreglos y/o elementos, y
// devuelva un nuevo arreglo con todos los elementos combinados.
const combinarElementos = (...elementos) => {
    return [].concat(...elementos);
}
console.log(combinarElementos([1, 2], [3, 4], 5)); // [1, 2, 3, 4, 5]


// 9• Crear una función flecha que reciba un arreglo y una función callback, y
// 10 ejecute la función por cada elemento del arreglo sin devolver un nuevo
// arreglo.
const ejecutarPorCadaElemento = (arreglo, callback) => {
    arreglo.forEach(callback);
}
ejecutarPorCadaElemento([1, 2, 3], (elem) => console.log(elem * 2)); // 2, 4, 6


// 11 • Crear una función flecha que reciba un arreglo y una función callback, y
// devuelva un nuevo arreglo con los resultados de aplicar la función a cada
// elemento.

const mapearElementos = (arreglo, callback) => {
    return arreglo.map(callback);
}
console.log(mapearElementos([1, 2, 3], (elem) => elem * 2)); // [2, 4, 6]


//12• Crear una función flecha que reciba un arreglo y una función callback, y
//devuelva un nuevo arreglo con los elementos que cumplen la condición
//definida por la función.

const filtrarElementos = (arreglo, callback) => {
    return arreglo.filter(callback);
}
console.log(filtrarElementos([1, 2, 3, 4, 5], (elem) => elem > 2)); // [3, 4, 5]

// 13 • Crear una función flecha que reciba un arreglo, una función callback y
// opcionalmente un valor inicial, y reduzca el arreglo a un solo valor aplicando
//la función acumuladora.

const reducirArreglo = (arreglo, callback, valorInicial) => {
    return arreglo.reduce(callback, valorInicial);
}
console.log(reducirArreglo([1, 2, 3, 4], (acc, curr) => acc + curr, 0)); // 10
