var arr = [1, 1, 0, -1, -1];
var positive = 0;
var negative = 0;
var zero = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positive++; //(i/arr.length).toFixed(6);
    } else if (arr[i] < 0) {
        negative++;
    } else {
        zero++;
    }
}
console.log((positive / arr.length).toFixed(6));
console.log((negative / arr.length).toFixed(6));
console.log((zero / arr.length).toFixed(6));