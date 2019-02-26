// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);
// [ 'potato', 'FEB', 'MAR', 'APR', 'MAY' ]
// After using the Spread Operator
// [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]