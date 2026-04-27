
// find the differenece 

function findTheDifference(s, t) {
    let count = {};

    for (let ch of s) {
        count[ch] = (count[ch] || 0) + 1;
    }

    for (let ch of t) {
        if (!count[ch]) {
            return ch;   
        }
        count[ch]--;
    }
}
console.log(findTheDifference("abcd" , "abcde"))