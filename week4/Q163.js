// Count vowel substrings 

function countVowelSubstrings(word) {
    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < word.length; i++) {
        let set = new Set();

        for (let j = i; j < word.length; j++) {
            let ch = word[j];

            if (!vowels.includes(ch)) break;

            set.add(ch);

            if (set.size === 5) {
                count++;
            }
        }
    }

    return count;
}
console.log(countVowelSubstrings("aeiouu"))