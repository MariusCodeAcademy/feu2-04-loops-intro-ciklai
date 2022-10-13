'use strict';
console.log('genHtml.js');

// nusitaikyti i saraso el 
const listEl = document.getElementById('list')

let htmlString = '';
let i = 1
while (i < 110) {
  // ciklo body
  // console.log(`<li>item ${i}</li>`);
  htmlString = htmlString + `<li>item ${i}</li>\n`
  // step
  // i = i + 1
  // i += 1;
  i++;
}

console.log('htmlString ===', htmlString);
listEl.innerHTML = htmlString