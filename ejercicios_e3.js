// Función anónima asignada a una variable
const sumar = function (a, b) {
    return a + b;
};
console.log(sumar(3, 4));

// Función con asignación de nombre
function sumar(a, b) {
    return a + b;
};
console.log(sumar(3, 4));

// Sintaxis normal
const multiplicar = function (a, b) {
    return a * b;
};

// Función flecha
const multiplicarFlecha = (a, b) => a * b;
console.log(multiplicarFlecha(3, 4)); // 12

const edad = 19;
const tieneID = true;
if (edad >= 18) {
    if (tieneID) {
        console.log("Acceso permitido");
    } else {
        console.log("Necesitas identificación");
    }
} else {
    console.log("Eres menor de edad");
}

// Ejemplo con bucles anidados

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

// Estructuras de control anidadas

try {
    // Aquí va el código que podría fallar
} catch (error) {
    // Aquí se maneja el error si ocurre
}

// Flujo básico

try {
    let numero = parseInt("abc"); // Esto no genera error, da NaN
    console.log(numero.toFixed(2));
    // ❌ Error: no se puede usar toFixed en NaN
} catch (error) {
    console.log("Ocurrió un error:", error.message);
}

// Con finally

try {
    console.log("Intentando dividir...");
    let resultado = 10 / 0; // No error real, da Infinity
    console.log(resultado);
} catch (error) {
    console.log("Error atrapado:", error.message);
} finally {
    console.log("Fin del bloque");
}

// Lanzar errores manualmente

function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("No se puede dividir entre 0");
        }
        return a / b;
    } catch (error) {
        return "Error: " + error.message;
    }
}
console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // Error: No se puede dividir entre 0


// ACTIVIDADES

const persona = {
    nombre: "Carlos",
    edad: 28,
    direccion: {
        ciudad: "Madrid",
        codigoPostal: 28001
    },
    hobbies: ["leer", "correr", "pintar"]
};

0// Crea función flecha que reciban ese objeto por parámetro e impriman lo siguiente: 

1// Muestra solo el nombre de la persona.

const mostrarNombre = (objeto) => {
    console.log(`Nombre: ${objeto.nombre}`);
}
mostrarNombre(Carlos);

2 // Muestra la edad de la persona.

const mostrarEdad = (objeto) => {
    console.log(`Edad: ${objeto.edad}`);
}
mostrarEdad({edad: 28});

3 // Muestra la ciudad donde vive.

const mostrarCiudad = (objeto) => {
    console.log(`Ciudad: ${objeto.ciudad}`);
}
mostrarCiudad({ciudad: "Juigalpa"});

4 // Muestra el código postal usando corchetes.

const mostrarCodigoPostal = (objeto) => {
    console.log(`Código Postal: ${objeto["codigoPostal"]}`);
}   
mostrarCodigoPostal({codigoPostal: "89463"});

5 // Muestra el segundo hobby de la persona.

const mostrarSegundoHobby = (objeto) => {
    console.log(`Segundo Hobby: ${objeto.hobbies[1]}`);
} 
mostrarSegundoHobby({hobbies: ["programar", "ajedrez"]});


