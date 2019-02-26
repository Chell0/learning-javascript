// Before
var magic = function(){
    return new Date();
};

// After
var magic = () => {
    return new Date();
};

// Shorten it further
const MAGIC = () => new Date();

// Arrow Functions with Parameters
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));
// [ 1, 2, 3, 4, 5 ]

// Convert to an Arrow function
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
// [ 1, 2, 3, 4, 5 ]


// Write Higher Order Arrow Functions
const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


const increment = (function(){
    return function increment(number, value = 1) {
        return number + value;
    };
})();

console.log(increment(5, 2));
// 7
console.log(increment(5));
// NaN
// 6

// Use the Rest Operator with Function Parameters
const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3));
// 6
console.log(sum(1,2,3,4));
// 10
