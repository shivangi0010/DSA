// Reverse Prefix of Word

function reversePrefix(word, ch) {
    let i = word.indexOf(ch);
    if (i === -1) return word;

    return word.slice(0, i + 1).split("").reverse().join("") + word.slice(i + 1);
}
console.log(reversePrefix("abcdef", "d"));