function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var result = [];

    arr.forEach(function (element) {
        var name = element.name;
        var avgAlt = element.avgAlt;
        var orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + avgAlt), 3) / GM));

        result.push({ name: name, orbitalPeriod: orbitalPeriod });
    });

    return result;
}

function pairwise(arr, arg) {
    return arr.reduce(function (prev, cur, index) {

    });
}


function truthCheck(collection, pre) {
    var collectionLength = collection.length;
    var matches = 0;
    collection.forEach(function (element) {
        if (element.hasOwnProperty(pre)) {
            if (element[pre]) {
                matches++;
            }
        }
    });
    return collectionLength === matches;
}

truthCheck([
    { "user": "Tinky-Winky", "sex": "male" },
    { "user": "Dipsy", "sex": "male" },
    { "user": "Laa-Laa", "sex": "female" },
    { "user": "Po", "sex": "female" }], "sex");


//Create a function that sums two arguments together. If only one argument is provided, 
//then return a function that expects one argument and returns the sum.
//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//Calling this returned function with a single argument will then return the sum:
//var sumTwoAnd = addTogether(2);
//    sumTwoAnd(3) returns 5.
//    If either argument isn't a valid number, return undefined.

window.addTogether = function () {
    var args = Array.prototype.slice.call(arguments);
    if (arguments.length === 2) {
        if (typeof arguments[0] !== "number") {
            return undefined;
        }
        if (typeof arguments[1] !== "number") {
            return undefined;
        }
        return arguments[0] + arguments[1];
    }

    if (arguments.length === 1) {
        if (typeof arguments[0] !== "number") {
            return undefined;
        }
        return function (num) {
            if (typeof num !== "number") {
                return undefined;
            }
            return args[0] + num;
        }
    }
}

//Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
//The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
//Return the rest of the array, otherwise return an empty array.

window.dropElements = function (arr, func) {
    var dropped = false;
    var ind = arr.forEach(function (element, index) {
        if (!func(element)) {
            return index;
        }
    });

    var re = arr.slice(ind);

    return dropped ? arr : [];
}

dropElements([1, 2, 3], function (n) { return n < 3; });

//dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
//dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
//dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
//dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
//dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
//dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].


//Make a function that looks through an array of objects (first argument) and returns an array 
//    of all objects that have matching property and value pairs (second argument). 
//Each property and value pair of the source object has to be present in the object from the collection
//if it is to be included in the returned array.

//For example, if the first argument is
//[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
//and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
//because it contains the property and its value, that was passed on as the second argument.

window.whatIsInAName = function (collection, source) {
    var resultArray = [];

    var sourceObjKeys = Object.keys(source);

    collection.forEach(function (collectionObj) {
        if (sourceObjKeys.every(function(sourceKey) {
            return collectionObj.hasOwnProperty(sourceKey) && collectionObj[sourceKey] === source[sourceKey];
        })) {
            resultArray.push(collectionObj);
        }
    });

    return resultArray;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


window.smallestCommons = function (arr) {
    var lowest = function(a, b) {
        return a > b ? b : a;
    }
    var highest = function (a, b) {
        return a > b ? a : b;
    }
    var numbersForSc = [];
    for (var i = lowest(arr[0], arr[1]); i <= highest(arr[0], arr[1]); i++) {
        numbersForSc.push(i);
    }



    return arr;
}


smallestCommons([1, 5]);