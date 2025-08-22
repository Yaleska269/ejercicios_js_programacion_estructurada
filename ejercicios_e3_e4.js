

const universidad = {
  nombre: "Universidad Central",
  ubicacion: {
    ciudad: "Sevilla",
    direccion: {
      calle: "Av. Principal",
      numero: 123
    }
  },
  
  facultades: [
    {
      nombre: "Ingeniería",
      carreras: [
        {
          nombre: "Informática",
          estudiantes: [
            { nombre: "Laura", edad: 20, hobbies: ["programar", "ajedrez"] },
            { nombre: "Javier", edad: 22, hobbies: ["fútbol", "cine"] }
          ]
        },
        {
          nombre: "Civil",
          estudiantes: [
            { nombre: "Sofía", edad: 21, hobbies: ["fotografía", "leer"] }
          ]
        }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        {
          nombre: "Derecho Penal",
          estudiantes: [
            { nombre: "Andrés", edad: 23, hobbies: ["debate", "natación"] }
          ]
        }
      ]
    }
  ]
};

// Actividades 

// Funciones Flecha

1 // Muestra el nombre de la universidad.

const getNombreUniversidad = () => universidad.nombre;
const getCalleUniversidad = () => universidad.ubicacion.direccion.calle;

console.log(getNombreUniversidad()); // Universidad Central

2 // Cree funciones flecha que reciban ese objeto por parámetro e impriman lo siguiente:
// Muestra la calle donde está ubicada.

const mostrarCalle = (objeto) => {
    console.log(`Calle: ${objeto.ubicacion.direccion.calle}`);
}
mostrarCalle(universidad);

3// Muestra el nombre de la primera facultad.

const mostrarPrimeraFacultad = (objeto) => {
    console.log(`Primera Facultad: ${objeto.facultades[0].nombre}`);
}
mostrarPrimeraFacultad(universidad);

4// Muestra el nombre de la segunda carrera en la primera facultad.

const mostrarSegundaCarreraPrimeraFacultad = (objeto) => {
    console.log(`Segunda Carrera en la Primera Facultad: ${objeto.facultades[0].carreras[1].nombre}`);
}
mostrarSegundaCarreraPrimeraFacultad(universidad);

5//  Muestra el nombre del primer estudiante de la carrera de Informática.

const mostrarPrimerEstudianteInformática = (objeto) => {
    console.log(`Primer Estudiante de Informática: ${objeto.facultades[0].carreras[0].estudiantes[0].nombre}`);
}
mostrarPrimerEstudianteInformática(universidad);

6// Muestra el segundo hobby de Laura.

const mostrarSegundoHobbyLaura = (objeto) => {
    console.log(`Segundo Hobby de Laura: ${objeto.facultades[0].carreras[0].estudiantes[0].hobbies[1]}`);
}   
mostrarSegundoHobbyLaura(universidad);
mostrarSegundoHobby({hobbies: ["programar", "ajedrez"]}); 


7 // Muestra la edad de Sofía.

const mostrarEdadSofia = (objeto) => {
    console.log(`Edad de Sofía: ${objeto.facultades[0].carreras[1].estudiantes[0].edad}`);
} 
mostrarEdadSofia(universidad);
mostrarEdad({edad: 21});

8// Muestra el primer hobby del estudiante de Derecho Penal.

const mostrarPrimerHobbyDerechoPenal = (objeto) => {
  console.log(`Primer Hobby del Estudiante de Derecho Penal: ${objeto.facultades[1].carreras[0].estudiantes[0].hobbies[0]}`);
}
mostrarPrimerHobbyDerechoPenal(universidad);
mostrarPrimerHobby({ hobbies: ["debate", "natación"] });
