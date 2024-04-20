var n = 6;
var symbol = "#";
var line = "";
var linePosition = n - 1;

for (var lineIndex = 0; lineIndex < n; lineIndex++) {
    for (var rowIndex = 0; rowIndex < n; rowIndex++) {
        if (rowIndex < linePosition) {
            line += " ";
        } else {
            line += symbol;
        }
    }
    console.log(line);
    line = "";
    linePosition -= 1;

}