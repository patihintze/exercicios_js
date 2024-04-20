var a = [2, 2, 3];
var b = [1, 2, 1]

var alice = 0;
var bob = 0;
for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
        alice++;
    } else if (a[i] < b[i]) {
        bob++;
    }
}
console.log(alice, bob);
//teste