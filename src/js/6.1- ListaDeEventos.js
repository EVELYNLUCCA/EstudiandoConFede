/* EVENTOS DEL MOUSE */
/*  
    click => un click
    dblclick => dos click
    mouseover => cuando el mouse está encima de un elemento O sus hijos
    mouseout => lo mismo pero cuando sale el mouse

    contextmenu => cuando abrimos el menú desplegable 
    mouseenter => cuando el mouse está encima DEL PADRE (no hay herencia)
    mouseleave => cuando el mouse sale DEL PADRE (sin herencia)
    mousemove => cuando el mouse se mueve sobre un elemento
*/

const padre = document.querySelector('.padre');
padre.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = 'yellow';
})

padre.addEventListener('mouseout', e => {
    e.target.style.backgroundColor = 'green';
})

const padre1 = document.querySelector('.padre1');
padre1.addEventListener('contextmenu', e=> {
    e.target.style.backgroundColor = 'lightblue';
})

padre1.addEventListener('mouseenter', e => {
    console.log('entré al elemento');
})

padre1.addEventListener('mouseleave', e => {
    console.log('salí');
})

padre1.addEventListener('mouseup', e => {
    console.log('hice click en el elemento');
})

padre1.addEventListener('mousemove', e => {
    console.log('me estoy moviendo')
})

/* EVENTOS DEL TECLADO */
/* 
    keypress => cuando apreto una tecla
    keydown => cuando suelto una tecla
    keyup => cuando suceden las dos a la vez
*/

const input = document.querySelector('input');

// input.addEventListener('keypress', e => {
//     console.log('estoy apretando una tecla')
// })

// input.addEventListener('keydown', e => {
//     console.log('solté una tecla')
// })

input.addEventListener('keyup', e => {
    console.log('apreté y solté la teclita')
})

/* EVENTOS DE LA INTERFAZ */
/* 
    abort => cuando un elemento elimina a su hijo
    error => cuando hay un error de importación
    load => cuando ya cargó un objeto
    onload => cuando está cargando un objeto
    beforeunload => antes de que un elemento esté a punto de descargarse
    upload => cuando se descargó la página (elemento windows => windows.addEventListener('upload'))
    blur => cuando se quite el foco de un elemento
*/