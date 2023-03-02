// 4. Check for Even Numbers

function isEven(item) {
    if (item % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function evenNums(items) {
    const evenArray = [];
    for (const item of items) {
        if (isEven(item)) {
            evenArray.push(item);
        }
    }
    if (evenArray.length === 0) {
        evenArray.push("None");
    }
    return evenArray;
}

console.log('Even numbers are: ');

// Call one
let a = evenNums([1, 2, 3, 4, 5, 6]);
console.log('Array 1:  ' + a.join(' , '));

// Call two
let b = evenNums([1, 3, 5, 7, 9, -11]);
console.log('Array 2:  ' + b.join(' , '));

// Call three
let c = evenNums([4, 7, 28, 311, 456]);
console.log('Array 3:  ' + c.join(' , '));