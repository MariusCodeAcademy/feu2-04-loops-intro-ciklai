'use strict';
console.log('break.js');

// break;
// continue;

// sukuriam cikla kuris tesiasi 20kartu
// ciklas turetu sustoti jei jau prasisuko daugiau nei 10.

for (let i = 1; i <= 20; i++) {
  console.log(i);
  // kada jau buvo 10 ciklu?
  if (i === 10) {
    console.log('jau buvo 10 ciklu');
    break;
  }
}

// sukuriam cikla kuris tesiasi 20kartu
// nespausdinti skaiciau 17
