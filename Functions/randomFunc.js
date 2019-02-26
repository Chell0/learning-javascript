// Generate Random Fractions
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());
// Random numbers will be seen each time we log randomFraction()

// Generate Random Whole Numbers

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());
// A random number between o-9 will generated

// Generate Random Whole Numbers within a Range
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);
// A random number will be generated

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);
// Random numbers between 5 and 15