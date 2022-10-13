'use strict';
console.log('while.js');

// atspausdinti as esu while 10 kartu

let sp = 'as esu while';

let i = 1;

while (i < 11) {
  // ciklo body
  // console.log(`'kazka'`);
  // step
  // i = i + 1
  // i += 1;
  i++;
}

// 1. atspausdinti skaicius nuo 14 iki 35
i = 14;
while (i <= 35) {
  // console.log('i ===', i);
  i++;
}

// 2. atspausdinti skaicius nuo 0 iki 100, kas trecia skaiciu
i = 0;
let cikluSk = 0;
// while (i < 101) {
//   // console.log(i);
//   i += 3;
//   cikluSk++;
// }

while (i <= 100) {
  if (i % 3 === 0) {
    // console.log(i);
  }
  i++;
  cikluSk++;
}

console.log('ciklu', cikluSk);
// 3. atspausdinti skaicius nuo 50 iki 24
