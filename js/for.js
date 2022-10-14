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
let avg = total / 15;
// console.log('avg ===', +avg.toFixed(2));
// 4.1 atspausdinti verciu vidurki

// 5. atspausdinti nuo 47 iki 68 visus lyginius skaicius
for (let i = 47; i <= 68; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}
// 6. sudeti visus skaicius nuo 0 iki 10, atspusdinti rezultata
total = 0;
for (let i = 0; i <= 10; i++) {
  // console.log(i);
  total = total + i;
  // console.log('total ===', total);
}
// console.log('TOTAL total ===', total);

// 7. su while loop. parasyti cikla kuris meta kauliukus ir galimos reiksmes yra nuo 2 iki 12.
// 7.1 kiek kartu kompiuteris mes kauliukus kol ismes 12?
// 7.2 kiek kartu kompiuteris mes kauliukus kol daugiau nei 6?

// 8. Suskaiciuoti kiek skaiciau 4 kartotiniu nuo 0 iki 160
// kaip gauti 4 kartotini ? sk % 4 === 0
let radauKartotiniu = 0;
// 1 sukti cikla nuo 0 iki 160
for (let i = 0; i <= 160; i = i + 1) {
  // 2 ziureti ar skaicius yra 4 kartotinis
  if (i % 4 === 0) {
    // 3 jei yra tai priskaiciuoti prie radauKartotiniu
    // radauKartotiniu = radauKartotiniu + 1;
    // radauKartotiniu += 1;
    radauKartotiniu++;
    // console.log(`skaicius ${i} yra 4 kartotinis`);
  }
}
// console.log('radauKartotiniu ===', radauKartotiniu);
// 4 pabaiga

// 9. Surasyti i kintamaji myString visus skaicius nuo -10 iki 35 atskirtus kableliu ir tarpu
//     pvz, -10, -9, -8, ....

//  psiaudo kodas
// 5. extra paskutinis elementas neturetu tureti kablelcio ir tarpelio.

// 1. susikuriu kintamaji myString prisilyginti tusciom kabutem
let myString = '';

// 2. sukurti cikla kuris sukasi su skaiciais nuo -10 iki 35
for (let i = -10; i <= 35; i++) {
  if (i === 35) {
    myString = myString + `${i}.`;
  } else {
    // 3. sukant cikla kiekviena reiksme pridedu prie myString ir pridedu ", "
    myString = myString + `${i}, `;
    // myString += `${i}, `;
  }
}
// 4. po ciklu atspausdinti myString
// console.log('myString ===', myString);

// Sudeti skaicius nuo 10 iki 20.

/* 
Psiaudo kodas, algoritmas
1. kintamojo sumai
2. ciklo kuris dides nuo 10 iki 20
3. deti einamaja verte prie kintamojo
3. atvaizduoti rezultata
*/
let totalSk10 = 0;
let seka = 0;
for (let i = 10; i <= 20; i++) {
  seka++;
  console.log(`Ciklo numeris ${seka}, prie ${totalSk10} pridedu ${i} ir gaunu ${totalSk10 + i}`);
  // totalSk10 = totalSk10 + i;
  totalSk10 += i;
}
console.log('totalSk10 ===', totalSk10);
