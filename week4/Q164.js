// Kth Distinct String in an Array

function kthDistinct(arr, k) {
    let freq = {};

    for (let str of arr) {
        freq[str] = (freq[str] || 0) + 1;
    }

    let count = 0;
    for (let str of arr) {
        if (freq[str] === 1) {
            count++;
            if (count === k) {
                return str;
            }
        }
    }

    return "";
}
console.log(kthDistinct(["a","b","b","c","c","d","e"],2))