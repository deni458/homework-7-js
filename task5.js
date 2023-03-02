// 5. Calculate Average of Array Elements

function avgOfArray(items) {
    let sum = 0;
    let counter = 0;
    for (const item of items) {
        if (typeof item === 'number') {
            sum += item;
        } else {
            counter++;
        }
    }
    return sum / (items.length - counter);
}

// Call one - should print 3
let a = avgOfArray([1, 2, 3, 4, 5, 's']);
console.log('Avg of array one is ' + a);

// Call two - should print 17.5
let b = avgOfArray([10, 10, 20, 30]);
console.log('Avg of array two is ' + b);

// Call three - should print 70
let c = avgOfArray(['R', 50, 'y', 60, 70, 80, 90]);
console.log('Avg of array three is ' + c);