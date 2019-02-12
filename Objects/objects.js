/*
variable name = {
    property: value(which can be: a number, string, array or any data type in javascript)
}
*/
// lets create our first object
var myCat = {
    "name": "Jessy",
    "legs": 4,
    "tails": 1,
    "friends": []
};

// Accessing Object Properties with Dot Notation
var nameValue = myCat.name;
console.log(nameValue);
// Jessy

var numberOfLegs = myCat.legs;
console.log(numberOfLegs);
// 4

// Accessing Object Properties with Bracket Notation
var nameValue = myCat["name"];
console.log(nameValue);
// Jessy

var numberOfLegs = myCat['legs'];
console.log(numberOfLegs);
// 4

// Accessing Object Properties with Variablesvar nameValue = myCat.name;
var nameValue = "name";
var cat = myCat[nameValue];

console.log(cat);
// Jessy

// Updating Object Properties

myCat.name = "Tom";
console.log(myCat.name);
// Tom

// Add New Properties to an Object
myCat.meow = "meowing";
// OR
myCat['meow'] = "meowing";

console.log(myCat);
/*
{
    name: 'Tom',
    legs: 4,
    tails: 1,
    friends: [],
    meow: 'meowing'
}
*/

// Delete Properties From an Object

delete myCat.friends;

console.log(myCat);
/*
{
    name: 'Tom',
    legs: 4,
    tails: 1,
    meow: 'meowing'
}
*/

// Using Objects for Lookups
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}

console.log(phoneticLookup("charlie"));
// Chicago

// Testing Objects for Properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}

console.log(checkObj("gift"));
// Pony

console.log(checkObj("hello"));
// Not Found

// Manipulating Complex Objects
var myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano",
        "release_year": 1973,
        "formats": ["CD", "8T", "LP"],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": ["YouTube video"]
    }
];

// Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)
// maps

// Accessing Nested Arrays
var myPlants = [{
        type: "flowers",
        list: [
            "rose", "tulip", "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];

console.log(secondTree);
// Pine