/* for(var i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i+" Fizzbuzz")
    }else if (i % 3 === 0){
        console.log(i+" Fizz")
    }else if (i % 5 === 0){
        console.log(i+" Buzz")
    } else {
        console.log(i)
    }
}
 */

/* var a = [2,2,3];
var b = [1,2,1]

var alice = 0;
var bob = 0;
for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
        alice++;
    } else if (a[i] < b[i]){
        bob++;
    }
}

console.log(alice, bob);
 */

/* var arr = [1,1,0,-1,-1];
var positive = 0;
var negative = 0;
var zero = 0;
for (var i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        positive++; //(i/arr.length).toFixed(6);
    } else if (arr[i] < 0){
        negative++;
    } else {
        zero++;
    }
}
console.log((positive/arr.length).toFixed(6));
console.log((negative/arr.length).toFixed(6));
console.log((zero/arr.length).toFixed(6)); */

/* var n = 6;
var symbol = "#";
var line = "";
var linePosition = n - 1;

for (var lineIndex = 0; lineIndex < n; lineIndex++){
    for (var rowIndex = 0; rowIndex < n; rowIndex++){
        if(rowIndex < linePosition){
            line += " ";
        } else {
            line += symbol;
        }
    }
    console.log(line);
    line="";
    linePosition -= 1;

} */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines.shift());
var n = 3.14159;

var circ = (n * (R*R)).toFixed(4);

console.log("A="+circ);
console.log("teste");