// Ejemplo de implementación de FIFO:

// Crear una cola
let cola = [];

// Agregar elementos (enqueue)
cola.push("Tarea 1"); // ["Tarea 1"]
cola.push("Tarea 2"); // ["Tarea 1", "Tarea 2"]
cola.push("Tarea 3"); // ["Tarea 1", "Tarea 2", "Tarea 3"]

console.log(cola); // ["Tarea 1", "Tarea 2", "Tarea 3"]

// Eliminar elementos (dequeue)
console.log(cola.shift(), "Ha sido eliminada."); // "Tarea 1" (sale el primero)
console.log(cola); // ["Tarea 2", "Tarea 3"]
console.log(cola.shift(), "Ha sido eliminada."); // "Tarea 2"
console.log(cola); // ["Tarea 3"]
console.log(cola.shift(), "Ha sido eliminada."); // "Tarea 3"
console.log(cola); // ["Tarea 3"]
console.log(cola.shift(), "Ha sido eliminada."); // undefined (cola vacía)
console.log(cola); // ["Tarea 3"]


// • Los elementos se agregan al final con push().
// • Los elementos se eliminan del inicio con shift().
// • Esto asegura que el primer elemento en entrar sea el primero en salir.

//.....................................................//

// Ejemplo de implementación de LIFO:

// Crear una pila
let pila = [];

// Agregar elementos (push)
pila.push("Plato 1"); // ["Plato 1"]
pila.push("Plato 2"); // ["Plato 1", "Plato 2"]
pila.push("Plato 3"); // ["Plato 1", "Plato 2", "Plato 3"]

console.log(pila); // ["Plato 1", "Plato 2", "Plato 3"]

// Eliminar elementos (pop)
console.log(pila.pop(), "Ha sido usado."); // "Plato 3" (sale el último)
console.log(pila); // ["Plato 1", "Plato 2"]
console.log(pila.pop(), "Ha sido usado."); // "Plato 2"
console.log(pila); // ["Plato 1"]

// • Los elementos se agregan al final con push().
// • Los elementos se eliminan del final con pop().
// • Esto asegura que el último elemento en entrar sea el primero en salir.


//......................// Ejemplo 1: Cola Básica para Procesar Tareas//..............................//

// Arreglo para la cola
let colaTareas = [];

// A ccion de agregar tarea final
const agregarAlFinal = (tarea) => {
    colaTareas.push(tarea);
    console.log(`Tarea agregadada ${tarea}. Cola actual: ${colaTareas}`);
};

// Accion para remover del inicio

const removerDelInicio = () => {
    if (colaTareas.length === 0) {
        console.log("La cola está vacía.");
        return null;
    }
    const tareaProcesada = colaTareas.shift();
    console.log(`Tarea procesada: ${tareaProcesada}. Cola actual: ${colaTareas}`);
    return tareaProcesada;
}

// Simulacion del proceso
agregarAlFinal("Tarea A"); // cola: ["Tarea A"]
agregarAlFinal("Tarea B"); // cola: ["Tarea A", "Tarea B"]
agregarAlFinal("Tarea C"); // cola: ["Tarea A", "Tarea B", "Tarea C"]
removerDelInicio(); // procesa "Tarea A", cola: ["Tarea B", "Tarea C"]
removerDelInicio(); // procesa "Tarea B", cola: ["Tarea C"]
removerDelInicio(); // procesa "Tarea C", cola: []


//............................//Ejemplo 4: Historial de Navegación Web //...............................//

//Arreglo para la pila
let HistorialPaginas = [];

// Accion para agregar pagina (flecha)
const visitarUltimaPagina = (url) => {
    HistorialPaginas.push(url);
    console.log(`Página visitada: ${url}. Historial: ${HistorialPaginas}`);

}

// Accion para retroceder (flecha)
const retrocederPagina = () => {
    if (HistorialPaginas.length === 0) {
        console.log("historial vacio.");
        return null;
    }
    const pagina = HistorialPaginas.pop();
    console.log(`Retrocediendo a: ${pagina}. Historial: ${HistorialPaginas}`);
    return pagina;
}

// Simulacion del proceso
visitarUltimaPagina("inicio.com"); // Pagina vistada: inicio.com Historial: ["inicio.com"]
visitarUltimaPagina("articulos.com"); // Pagina vistada: articulos.com Historial: ["inicio.com", "articulos.com"]
visitarUltimaPagina("detalles.com"); // Pagina vistada: detalles.com Historial: ["inicio.com", "articulos.com", "detalles.com"]
retrocederPagina();                 // Retrocediendo a: detalles.com Historial: ["inicio.com", "articulos.com"]
retrocederPagina();                 // Retrocediendo a: articulos.com Historial: ["inicio.com"]


// Ejemplo 2: Cola con Límite de Tamaño para Mensajes

// Arreglo para la cola con limite
let colaMensajes = []; 
const tamanoMaximo = 5;

// Acción para insertar al final (flecha)
const insertarAlFinal = (mensaje) => { 
colaMensajes.push(mensaje);
if (colaMensajes.length > tamanoMaximo) { 
    const mensajeEliminado = colaMensajes.shift();
    console.log(`Limite excedido. Eliminado: ${mensajeEliminado}. Cola actual: ${colaMensajes}`); 
} else {
    console.log(`Mensaje insertado: ${mensaje}. Cola actual: ${colaMensajes}`);
}
}

// Acción para extraer del inicio (flecha)
const extraerDelInicio = () => { 
 if (colaMensajes.length === 0) { 
    console.log("Cola vacia."); 
    return null;
}
const mensajeExtraido = colaMensajes.shift(); 
console.log(`Mensaje extraído: ${mensajeExtraido}. Cola actual: ${colaMensajes}`);
 return mensajeExtraido;
}

// Simulación del proceso
insertarAlFinal("Mensaje 1"); // Cola: ["Mensaje 1"]
insertarAlFinal("Mensaje 2"); // Cola: ["Mensaje 1", "Mensaje 2"] 
insertarAlFinal("Mensaje 3"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3"]
insertarAlFinal("Mensaje 4"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4"]
insertarAlFinal("Mensaje 5"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4", "Mensaje 5"]
insertarAlFinal("Mensaje 6"); // Limite excedido, elimina "Mensaje 1", Cola: ["Mensaje 2", "Mensaje 3", "Mensaje 4", "Mensaje 5", "Mensaje 6"]
extraerDelInicio(); // Extrae "Mensaje 2", Cola: ["Mensaje 3", "Mensaje 4", "Mensaje 5", "Mensaje 6"]



// Ejemplo 3: Cola para Simular una Línea de Espera

// Arreglo para la cola
let lineaEspera = [];

// Acción para unir al final (flecha)
const unirAlFinal = (persona) => {
lineaEspera.push(persona);
console.log(`Persona unida: ${persona}. Línea actual: ${lineaEspera}`);
}

// Acción para atender del inicio (flecha)
const atenderDelInicio = () => {
if (lineaEspera.length === 0) {
    console.log("Línea vacía, nadie para atender.");
    return null;
}
const personaAtendida = lineaEspera.shift();
console.log(`Persona atendida: ${personaAtendida}. Línea actual: ${lineaEspera}`);
return personaAtendida;
}

// Simulación del proceso
unirAlFinal("Persona X"); // Línea: ["Persona X"]
unirAlFinal("Persona Y"); // Línea: ["Persona X", "Persona Y"]
unirAlFinal("Persona Z"); // Línea: ["Persona X", "Persona Y", "Persona Z"]
atenderDelInicio(); // Atiende "Persona X", Línea: ["Persona Y", "Persona Z"]
atenderDelInicio(); // Atiende "Persona Y", Línea: ["Persona Z"]
atenderDelInicio(); // Atiende "Persona Z", Línea: []
atenderDelInicio(); // Línea vacía


// Ejemplo 5: Gestión de Notificaciones Emergentes


// Arreglo para la pila
let pilaNotificaciones = [];

// Acción para mostrar notificación (flecha)
const mostrarNotificación = (mensaje) => {
  pilaNotificaciones.push(mensaje);
  console.log(`Notificación: ${mensaje}. Pila: ${pilaNotificaciones}`);
}

// Acción para cerrar notificación (flecha)
const cerrarNotificación = () => {
if (pilaNotificaciones.length === 0) {
    console.log("No hay notificaciones.");
    return null;
}
const notificacion = pilaNotificaciones.pop();
console.log(`Cerrada: ${notificacion}. Pila: ${pilaNotificaciones}`);
return notificacion;
}

// Simulación del proceso
mostrarNotificación("Mensaje nuevo"); // Notificación: Mensaje nuevo. Pila: [Mensaje nuevo]
mostrarNotificación("Batería baja"); // Notificación: Batería baja. Pila: [Mensaje nuevo, Batería baja]
mostrarNotificación("Actualización"); // Notificación: Actualización. Pila: [Mensaje nuevo, Batería baja, Actualización]
cerrarNotificación(); // Cerrada: Actualización. Pila: [Mensaje nuevo, Batería baja]
cerrarNotificación(); // Cerrada: Batería baja. Pila: [Mensaje nuevo]
