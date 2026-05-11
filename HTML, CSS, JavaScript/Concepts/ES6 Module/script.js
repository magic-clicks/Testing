//ES6 Module = an external file that contains resusable code
// that can be imported into other JavaScript files.
// write reusable code for many different apps
// can contain variables, classes, functions, and more
// introduced as part of ECMAscript 2015 update

// have to add "type" module in HTML on <script> tag

import {PI, getCircumference, getArea, getVolume} from "./mathUtil.js";

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)} cm^3`);