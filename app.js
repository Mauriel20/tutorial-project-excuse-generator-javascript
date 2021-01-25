/*Comienzo del generador de excusas*/
/*Comienzo del generador de excusas*/
/*Comienzo del generador de excusas*/
let who = ['the dog','my granma','his turtle','my bird'];
/*Tamano array  1           2       3           4*/
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

const excuse = document.getElementById("#excuse");

/*(randtext1 + ' ' + randtext2 + ' ' + randtext3)*/

let randtext1 = who[Math.floor(Math.random() * who.length)];

let randtext2 = what[Math.floor(Math.random() * what.length)];

let randtext3 = when[Math.floor(Math.random() * when.length)];


console.log(randtext1 + ' ' + randtext2 + ' ' + randtext3);

/*Mostrar en pantalla*/
/*Mostrar en pantalla*/
/*Mostrar en pantalla*/

document.getElementById('excuse').innerHTML =  randtext1 + ' ' + randtext2 + ' ' + randtext3;