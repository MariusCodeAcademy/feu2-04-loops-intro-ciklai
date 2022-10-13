'use strict';
console.log('for.js');

/* 
for (init; salyga; zingsnis) {
  // ciklo body
}
init = viena karta
salyga, zingsnis = kaskarta
*/

// atspausdinti as esu for 10 kartu

for (let i = 0; i <= 10; i++) {
  // console.log(i, 'as esu for');
}

// 1. atspausdinti skaicius nuo 14 iki 35
let str = '';
for (let i = 14; i <= 35; i++) {
  // console.log(i);
  str = str + `${i}, `;
}
// console.log(str);

// 2. atspausdinti skaicius nuo 0 iki 100, kas trecia skaiciu
for (let i = 0; i < 100; i += 3) {
  // console.log(i);
}

// 3. atspausdinti skaicius nuo 50 iki 24
for (let i = 50; i > 24; i--) {
  // console.log(`<li>item no ${i}</li>`);
}

// 4. atspausdinti 15 random verciu nuo 1 iki 10
// debugger;
let total = 0;
for (let i = 0; i < 15; i++) {
  let rand = Math.trunc(Math.random() * 10) + 1;
  // console.log(i, 'rand ==>', rand);
  total = total + rand;
}
// console.log('total ===', total);
let avg = total / 15
// console.log('avg ===', +avg.toFixed(2));
// 4.1 atspausdinti verciu vidurki

// 5. atspausdinti nuo 47 iki 68 visus lyginius skaicius
for (let i = 47; i <= 68; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  } 
  
}
// 6. sudeti visus skaicius nuo 0 iki 10, atspusdinti rezultata
total = 0
for (let i = 0; i <= 10; i++) {
  console.log(i);
  total = total + i
  console.log('total ===', total);
}
console.log('TOTAL total ===', total);

// 7. su while loop. parasyti cikla kuris meta kauliukus ir galimos reiksmes yra nuo 2 iki 12.
// 7.1 kiek kartu kompiuteris mes kauliukus kol ismes 12?
// 7.2 kiek kartu kompiuteris mes kauliukus kol daugiau nei 6?
