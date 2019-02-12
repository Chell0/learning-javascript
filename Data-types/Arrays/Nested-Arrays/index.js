var ourArray = [
    ['the universe', 42],
    ['Tom', 20]
];

// Accessing Arrays with Bracket Notation
var ourArray = [50, 60, 70];
var ourData = ourArray[0];

console.log(ourArray[0])
// 50 is the output

var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData)
// 50

// Modifying Array Data with indexes
var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray)
// [45, 64, 99]

// Accessing Arrays within arrays
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];
var myData = myArray[2][1];
console.log(myData)
// 8

// Append Data with Push function in a array
var myArray = [
    ["John", 23],
    ["cat", 2]
];
myArray.push(["dog", 3])
console.log(myArray)
/*
[
    ['John', 23],
    ['cat', 2],
    ['dog', 3]
]
*/

// Remove Dat with Pop function in a array
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
console.log(removedFromOurArray)
// 3

var myArray = [
    ["John", 23],
    ["cat", 2]
];
var removedFromOurArray = myArray.pop();
console.log(removedFromOurArray)
// ['cat', 2]

// Remove the 1st element in an Array using the Shift function
var myArray = [
    ["John", 23],
    ["dog", 3]
];
var removedFromOurArray = myArray.shift();
console.log(removedFromOurArray)
// ['John', 23]

// Add an element at the beginning of an array using the unshift function
var myArray = [
    ["John", 23],
    ["dog", 3]
];
myArray.shift();
// ['John', 23]
myArray.unshift(["Paul", 35]);
console.log(myArray)
// [['Paul', 35], ['dog', 3]]