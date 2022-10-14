'use strict';
console.log('stringConcat.js');

let a = '1';
let b = '2';
let c = '3';
let d = '4';

let bendraString = `${a}, ${b}, ${c}, ${d}`;
console.log('bendraString ===', bendraString);

let poZingsni = '';
poZingsni = poZingsni + `${a}, `;
poZingsni = poZingsni + `${b}, `;
poZingsni = poZingsni + `${c}, `;
poZingsni += `${d}.`;

console.log('poZingsni ===', poZingsni);

let num1 = 5;

num1 = num1 + 5;
num1 += 5;

console.log('num1 ===', num1);
