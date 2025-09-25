const partidos = [
    {
        juego: 1,
        Lostoros: 0,
        SanFernando: 4
    },
    {
        juego: 2,
        Lostoros: 8,
        SanFernando: 6
    },
    {
        juego: 3,
        Lostoros: 5,
        SanFernando: 3     
    },
    {
        juego: 4,
        Lostoros: 6,
        SanFernando: 7     
    },
    {
        juego: 5,
        Lostoros: 2,
        SanFernando: 4     
    },
    {
        juego: 6,
        Lostoros: 5,
        SanFernando: 3     
    },  
    {
        juego: 7,
        Lostoros: 10,
        SanFernando: 5  
    }  
    
];

const numPartidos = partidos.length;

for (let i = 0; i < numPartidos; i++) {
    const p = partidos.shift();
    console.log(`Resultado del partido ${p.juego}: Los Toros ${p.Lostoros} - San Fernando ${p.SanFernando}`);
}

partidos.forEach((partido) => {
    const p = partidos.shift();
    console.log(`Resultado del partido ${p.juego}: Los Toros ${p.Lostoros} - San Fernando ${p.SanFernando}`);
}
)

// Eliminacion del primer partido

const p1 = partidos.shift();

//..................................................................//



// Resultado de partido 1
console.log(`Resultado del partido ${p1.juego}: Los Toros ${p1.Lostoros} - San Fernando ${p1.SanFernando}`);

const  p2 = partidos.shift(); 

// Resultado de partido 2
console.log(`Resultado del partido ${p2.juego}: Los Toros ${p2.Lostoros} - San Fernando ${p2.SanFernando}`);

const  p3 = partidos.shift(); 

// Resultado de partido 3
console.log(`Resultado del partido ${p3.juego}: Los Toros ${p3.Lostoros} - San Fernando ${p3.SanFernando}`);

const  p4 = partidos.shift();
// Resultado de partido 4
console.log(`Resultado del partido ${p4.juego}: Los Toros ${p4.Lostoros} - San Fernando ${p4.SanFernando}`);

const  p5 = partidos.shift();
// Resultado de partido 5
console.log(`Resultado del partido ${p5.juego}: Los Toros ${p5.Lostoros} - San Fernando ${p5.SanFernando}`);

const  p6 = partidos.shift();

// Resultado de partido 6
console.log(`Resultado del partido ${p6.juego}: Los Toros ${p6.Lostoros} - San Fernando ${p6.SanFernando}`);

const  p7 = partidos.shift();
// Resultado de partido 7
console.log(`Resultado del partido ${p7.juego}: Los Toros ${p7.Lostoros} - San Fernando ${p7.SanFernando}`);




//.................................................................................................//

// Resultado del partido 1

console.log('Resultado del partido ${partidos[0].juego}: Los Toros ${partidos[0].Lostoros} - San Fernando ${partidos[0].SanFernando}');

// Resultado del partido 2

console.log('Resultado del partido ${partidos[1].juego}: Los Toros ${partidos[1].Lostoros} - San Fernando ${partidos[1].SanFernando}');

// Resultado del partido 3

console.log('Resultado del partido ${partidos[2].juego}: Los Toros ${partidos[2].Lostoros} - San Fernando ${partidos[2].SanFernando}');

// Resultado del partido 4

console.log('Resultado del partido ${partidos[3].juego}: Los Toros ${partidos[3].Lostoros} - San Fernando ${partidos[3].SanFernando}'); 

// Resultado del partido 5

console.log('Resultado del partido ${partidos[4].juego}: Los Toros ${partidos[4].Lostoros} - San Fernando ${partidos[4].SanFernando}');

// Resultado del partido 6

console.log('Resultado del partido ${partidos[5].juego}: Los Toros ${partidos[5].Lostoros} - San Fernando ${partidos[5].SanFernando}');

// Resultado del partido 7

console.log('Resultado del partido ${partidos[6].juego}: Los Toros ${partidos[6].Lostoros} - San Fernando ${partidos[6].SanFernando}');


//Visualizar cola
console.log("partidos", partidos);