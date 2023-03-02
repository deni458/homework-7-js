// 2. Find Maximum Element in Array

function maxElement(items) {
    let max = items[0];
    for (const item of items) {
        if (max < item) {
            max = item;
        }
    }
    return max;
}

// Call one - should print 10
let arr1 = maxElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log('Max number in arr1 is ' + arr1);

// Call two - should print 90
let arr2 = maxElement([0, -15, 8, 2, 35, 44, 10*9, 56, 82]);
console.log('Max number in arr2 is ' + arr2);

// Call three - should print 510
let arr3 = maxElement([420, 100, 84, 510, 51, 376, 'wz', 150]);
console.log('Max number in arr3 is ' + arr3);