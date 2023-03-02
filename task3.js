// 3. Reverse Array Elements

function reverseArrayElements(arr) {
    return arr.reverse().join(' , ');
}

// Call one 
let arr1 = reverseArrayElements([1, 2, 3, 4, 5]);
console.log('Reverse array of arr1 is: ' + arr1);

// Call two
let arr2 = reverseArrayElements([8, 2, 0, 5, 20, 100]);
console.log('Reverse array of arr2 is: ' + arr2);

// Call three
let arr3 = reverseArrayElements([10, 9, 5, 7, 6, 4]);
console.log('Reverse array of arr3 is: ' + arr3);