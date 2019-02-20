// Iterate with While Loops
var myArray = [];
var i = 0;

while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);
// [ 0, 1, 2, 3, 4 ]

// Iterate with For Loops
for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);
// [ 1, 2, 3, 4, 5 ]

// Iterate Odd Numbers with a For Loop
// Even
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

console.log(ourArray);
//  [ 0, 2, 4, 6, 8 ]

// Odd
var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);
//  [ 1, 3, 5, 7, 9 ]

// Count Backwards with a For Loop
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}
console.log(ourArray);
// [ 10, 8, 6, 4, 2 ]
var myArray = [];

for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray);
// [ 9, 7, 5, 3, 1 ]

// Iterate Through an Array with a For Loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);
// 42

var myArray = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArray.length; i++) {
    total += myArray[i];
}

console.log(total);
// 20

// Nesting For Loops

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);

console.log(product);
// 5040

// Iterate with Do...While Loops
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);
// 11 [ 10 ]