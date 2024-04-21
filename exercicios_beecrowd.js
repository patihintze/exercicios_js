/* var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r'+'\n');

var [cod1, unit1, price1] = lines[0].split(' ');
var [cod2, unit2, price2] = lines[1].split(' ');

var amountToPay = ((unit1*price1)+(unit2*price2)).toFixed(2);

console.log(amountToPay);

 */

/* var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r'+'\n');

var sphereSize = parseFloat(lines.shift());

var sphereVolume = ((4/3.0) * 3.14159 * sphereSize ** 3).toFixed(3);

console.log("VOLUME = "+sphereVolume); */

/* var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines[0].split(' ').map(item => parseFloat(item));

var triangulo = ((A * C)/2).toFixed(3);
var radius = (3.14159 * C**2).toFixed(3);
var trapezium = (((A+B) * C) / 2).toFixed(3);
var square = (B ** 2).toFixed(3);
var rectangle = (A*B).toFixed(3);


console.log("TRIANGULO: "+triangulo);
console.log("CIRCULO: "+radius);
console.log("TRAPEZIO: "+trapezium);
console.log("QUADRADO: "+square);
console.log("RETANGULO: "+rectangle); */

/* var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [n1, n2, n3] = lines[0].split(' ').map(item => parseInt(item));
var maiorAB = (n1 + n2 + Math.abs(n1-n2)) / 2;
var maiorABC = (maiorAB + n3 + Math.abs(maiorAB - n3)) / 2;

console.log(maiorABC + " eh o maior"); */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [distance] = lines[0].split(' ').map(item => parseInt(item));
var [fuel] = lines[1].split(' ').map(item => parseFloat(item));

var consumption = (distance / fuel).toFixed(3)

console.log(consumption + " km/l");
