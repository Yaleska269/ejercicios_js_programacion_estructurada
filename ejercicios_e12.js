const mascotas =[
    {nombre:"Luna", edad:3,tipo:"Perro", peso:10.5},
    {nombre:"Max", edad:5 ,tipo:"Gato", peso:4.2},
    {nombre:"Coco", edad:1 ,tipo:"Conejo", peso:2.3},
    {nombre:"Rocky", edad:7 ,tipo:"Perro", peso:15.8},
    {nombre:"Milo", edad:2 ,tipo:"Gato", peso:3.9},
    {nombre:"Bella", edad:4 ,tipo:"Conejo", perro:8.7},
    {nombre:"Toby", edad:6 ,tipo:"Perro", peso:2.8},
    {nombre:"Simba", edad:3 ,tipo:"Gato", peso:5.1},
    {nombre:"Nala", edad:2 ,tipo:"Conejo", peso:12.4},
    {nombre:"Oreo", edad:5 ,tipo:"Perro", peso:4.8},
    {nombre:"Daisy", edad:1 ,tipo:"Gato", peso:1.9},
    {nombre:"Zeus", edad:8 ,tipo:"Conejo", peso:20.1},
    {nombre:"Mimi", edad:4 ,tipo:"Perro", peso:4.5},
    {nombre:"Bunny", edad:3,tipo:"Gato", peso:2.5},
    {nombre:"Thor", edad:6,tipo:"Conejo", peso:18.3},
];

// Ordenar las mascotas por tipo de forma alfabética usando sort.

mascotas.sort((a, b) => a.tipo.localeCompare(b.tipo));
console.log(mascotas);  

// Ordenar las mascotas por de forma ascendente usando ascendente usando sort

mascotas.sort((a, b) => a.edad - b.edad);
console.log(mascotas);



