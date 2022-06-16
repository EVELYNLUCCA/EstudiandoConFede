const textito = 'hola soy un textito';
const textito2 = '           y yo soy textito 2               ';
const textitoMiniArray = 'Hola soy, fede';
const num = 178321;

console.log(textito.concat(textito2));

console.log(textito.startsWith('hola'));

console.log(textito.endsWith('hola'));

console.log(textito.includes('soy'));

console.log(textito.indexOf('o'));

console.log(textito.lastIndexOf('o'));

console.log(textito.padStart(60, 'abcde'));

console.log(textito.padEnd(60, 'abcde'));

console.log(textito.repeat(7));

console.log(textitoMiniArray.split(','));
// ['hola soy', 'fede']

console.log(textito.substring(0, 2));

console.log(textito.toLowerCase());

console.log(textito.toUpperCase());

console.log(num.toString());

console.log(textito2.trim());

console.log(textito2.trimEnd());

console.log(textito2.trimStart());

console.log(textito.length);

console.log(textito.charAt(3));