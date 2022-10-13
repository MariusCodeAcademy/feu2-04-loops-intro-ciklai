'use strict';
console.log('break.js');

// break;
// continue;

// sukuriam cikla kuris tesiasi 20kartu
// ciklas turetu sustoti jei jau prasisuko daugiau nei 10.

for (let i = 1; i <= 20; i++) {
  // console.log(i);
  // // kada jau buvo 10 ciklu?
  // if (i === 10) {
  //   console.log('jau buvo 10 ciklu');
  //   break;
  // }
}
// https://www.w3schools.com/js/js_break.asp
// sukuriam cikla kuris tesiasi 20kartu
// debugger;
for (let i = 1; i <= 7; i++) {
  // if (i === 3) {
  //   // nutraukia esama cikla ir perina prie step dalies
  //   continue;
  // }
  // console.log(i);
}
// nespausdinti skaiciau 17
// nespausdinti 4, 15, 17

for (let i = 1; i <= 20; i++) {
  if (i === 17 || i === 4 || i === 15) {
    continue;
  }
  console.log(i);
}
