export default `
let styleEl = document.createElement('style');
document.head.appendChild(styleEl);

let sheet = styleEl.sheet;

sheet.insertRule('.sc-fAjcbJ { background-color: red }', 0);
`.trim();
