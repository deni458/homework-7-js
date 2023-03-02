// 7. Find the Longest String of an Array

function longestName(strings) {
    let longestString = ' ';
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longestString.length) {
            longestString = strings[i];
        }
    }
    return longestString;
}

// Call one 
let a = longestName(['Portugal', 'England', 'Australia']);
console.log('The longest Country name from array 1 is ' + a);

// Call two
let b = longestName(['France', 'Germany', 'Spain']);
console.log('The longest Country name from array 2 is ' + b);

// Call three
let c = longestName(['Macedonia', 'Serbia', 'Croatia']);
console.log('The longest Country name from array 3 is ' + c);