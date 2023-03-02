// 1. Sum of Array Elements

function sumOfArray(items) {
    let sum = 0;
    for (const item of items) {
        if (typeof item === 'number') {
            sum += item;
        }
    }
    return sum;
}

// Call one - should print 15
const arr1 = sumOfArray([1, 2, 3, 4, 5]);
console.log('Sum of arr1 is ' + arr1);

// Call two - should print 85
const arr2 = sumOfArray([50, 25, 'f5', 10]);
console.log('Sum of arr2 is ' + arr2);

// Call three - should print 226
const arr3 = sumOfArray([100, -75, 'a', 200, 1]);
console.log('Sum of arr3 is ' + arr3);