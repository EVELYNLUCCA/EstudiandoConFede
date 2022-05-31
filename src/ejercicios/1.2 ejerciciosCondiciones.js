/* si la comida del perro en la tercera posicion es "carne" entonces escribir por consola 'le gusta la carne :)' 
si no, escribir 'no le gusta la carne :('

después, poner en condicion la edad del perro, si es 1, si es 2, si es 3, escribir 'perro tiene (años correspondiente)'
si no tiene ninguno de esos años, escribir 'el perro no es cachorrito'*/

let perro = {
    nombre: "Magda",
    edad: 1,
    color:"blanco",
    ladrar: function ladrar(){
    console.log("waw");
    },
    comidas:["leche", "balanceado", "carne", "pollo"],
}

let comidaPreferida = perro.comidas[2];
if (comidaPreferida === "carne") {
    console.log("le gusta la carne :)")
} else {
    console.log("no le gusta la carne :(")
}

switch (perro.edad) {
    case 1:
        console.log(`${perro.nombre} tiene 1 año`)
        break;
    case 2 :
        console.log(`${perro.nombre} tiene 2 años`)
        break;
    case 3: 
        console.log(`${perro.nombre} tiene 3 años`)
        break;
    default:
        console.log("el perro no es cachorrito")
        break;
}

let Blacky = {
    pelaje: "blanco y negro",
    edad: 10,
    orejas: "caidas",
    jugar: function jugar() {
        console.log("estoy jugando con la pelota")
    },
    comidas: ["balanceado", "carne", "sopa", "huesos"]
}

if (Blacky.comidas[2] === "carne") {
    console.log("le gusta la carne :)");
} else {
    console.log("no le gusta la carne :(")
};

switch (Blacky.edad) {
    case 1:
    case 2:
    case 3:
        console.log (`Blacky tiene ${Blacky.edad} años`)
        break;
    default:
        console.log (`Blacky no es cachorrito`)
        break;
}


