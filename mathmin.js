myArray = [2, 3, 1, 5, 1, 6, 8, 4, 9];

function removeSmallest(myArray) {
    return myArray.filter(function(n) {
        return n != Math.min.apply(Math, myArray);
    });
}

myArray = removeSmallest(myArray);
console.log(myArray);

// removeSmallest(numbers) {
// find the index of the smallest number
// set smallest number index to 0 (the first value in numbers)
// iterate over numbers from index 1
// if the current number is smaller than the current smallest number
// set the smallest index to be the current index

// create a place to store the new array without the smallest number

// iterate over numbers
// if it is not the smallest number index
// push into new array

// return new array
}