/* escribir numeros del 1 al 100, salteando el 52. */

for (let i = 1; i < 101; i++) { 
    if (i===52) {
        continue 
    }
    console.log(i);  
}


let i= 0;

while (i < 100) {
    i++;

    if(i === 52){
        continue;
    }

    console.log(i);
}