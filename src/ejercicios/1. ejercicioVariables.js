/* hacer un objeto con un perrito de cada uno, darle propiedades y un método "ladrar" que ladre por consola
darle un array de comidas.
escribir en consola: Dos propiedades, ejecutar el método y obtener la 3ra comida. */

let perro = {
    nombre: "Magda",
    edad: 1,
    color:"blanco",
    ladrar: function ladrar(){
    console.log("waw");
    },
    comidas:["leche", "balanceado", "carne", "pollo"],
}
//console.log(perro.edad);
//console.log(perro.color);
//console.log(perro.comidas[2]);
perro.ladrar();

console.log(`hola soy ${perro.nombre}, mi color es ${perro.color}, tengo ${perro.edad} año 
y me gusta comer ${perro.comidas[2]} `);

//

let Blacky = {
    pelaje: "blanco y negro",
    edad: "10",
    orejas: "caidas",
    jugar: function jugar() {
        console.log("estoy jugando con la pelota")
    },
    comidas: ["balanceado", "carne", "sopa", "huesos"]
}

// console.log (Blacky.pelaje);
// console.log (Blacky.orejas);
// console.log (Blacky.comidas[2]);
Blacky.jugar();
console.log (`Hola, me llamo Blacky, mi pelaje es ${Blacky.pelaje}, mis orejitas son ${Blacky.orejas} y estan atentas
cuando mi dueño me trae mi comida preferida: ${Blacky.comidas[3]}.
Tengo ${Blacky.edad} años.`)

