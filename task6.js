// 6. Find the Longest Word in a String

function findLongestWord(string) {
    let stringSplit = string.split(' ');
    let longestWord = 0;
    for (let i = 0; i < stringSplit.length; i++) {
        if (stringSplit[i].length > longestWord) {
            longestWord = stringSplit[i].length;
        }
    }
    return longestWord;
}

// Call one - should print 6
let a = findLongestWord('The quick brown fox jumped over the lazy dog');
console.log(a);

// Call two - should print 5
let b = findLongestWord('They broke the glass');
console.log(b);

// Call three - should print 7
let c = findLongestWord('He speaks german usually');
console.log(c);