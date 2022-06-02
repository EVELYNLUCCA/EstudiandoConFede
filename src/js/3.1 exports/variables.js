export let texto = 'hola soy textito';

export const saludar = (nombre) => {
    return nombre;
};

export let edadDeTextito = 123456;

export const norita = {
    name: 'pepita',
    viaje: 'iruya',
    edad: 58
};

const vars = {
    texto,
    saludar,
    edadDeTextito,
    norita
}

export default vars;

/* exportar con export antes de la variable */
/* o podemos export default una variable objeto que tenga todas las variables */