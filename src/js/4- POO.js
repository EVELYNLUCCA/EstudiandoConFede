class Persona{
    constructor(altura, edad, peso, nombre){
        this.altura = altura;
        this.edad = edad;
        this.peso = peso;
        this.nombre = nombre;
    }

    saltar(){
        console.log(`Soy ${this.nombre} y salté.`)
    }

    comer(){
        this.peso++
        console.log(this.peso)
    }
};

class Medico extends Persona{
    constructor(altura, edad, peso, nombre, matricula, especialidad){
        super(altura, edad, peso, nombre);
        this.matricula = matricula;
        this.especialidad = especialidad;
    }

    saltar(){
        super.saltar();
        console.log('saltó un médico')
    }

    curar(){
        console.log('te curé');
    }

    comer(){
        super.comer();
        console.log('comió un médico');
    }
}

const Francisco = new Persona('1.80', 32, 80, 'Francisco');
const Pepe = new Persona('1.80', 25, 76, 'Pepe');

const Sefino = new Medico('1.67', 20, 65, 'Sefino', 132, 'cirujano');

Sefino.comer();