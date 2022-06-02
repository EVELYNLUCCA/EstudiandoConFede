// /* traer su array de películas favoritas y sus tecnologias. */
// /* por cada elemento de ese array, escriban "me gusta " (elemtno del array) */

// let seriesYPeliculasFavoritas = ["La casa de papel", "Anne whith an E", "Los simuladores", "Merlí", "Sexto sentido"];
// let conocimientosEnProgramación = [
//     {
//         name: 'html',
//         use: 'maquetado'
//     },
//     {
//         name: 'css',
//         use: 'estilo'
//     },
//     {
//         name: 'sass',
//         use: 'super-estilo'
//     },
//     {
//         name: 'python',
//         use: 'backend'
//     }];

// for (let i = 0; i < seriesYPeliculasFavoritas.length; i++) {
//     const element = seriesYPeliculasFavoritas[i];
//     console.log(`me gusta ${element}`);
// }

// conocimientosEnProgramación.forEach((element, index) => {
//     console.log(`${index + 1}: me gusta ${element.name}`);
// });

let seriesPeliculas = [ "Juego de Tronos", "The Walking Dead", "Halo", "Hombres de Honor", "Transformers"];
let conocimientosEnProgramación = [
    {
        name: "HTML",
        use: "Maquetado",
    },
    {
    name: "CSS",
    use: "Estilo",
    },
    {
        name: "JavaScript", 
        use: "lenguaje",
    },
    {
        name: "Corel",
        use: "Diseño"
    },
    {
        name: "Autocad",
        use: "Planificacion y Renderizado",
    }
]

for (let i = 0; i < seriesPeliculas.length; i++) {
    const element = seriesPeliculas[i];
    console.log(`Me gusta ${element}`);
}

conocimientosEnProgramación.forEach(element => {
    console.log (`Me gusta ${element.name}`)
});



