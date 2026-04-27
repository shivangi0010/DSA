// Word Patthern 

function wordPattern(pattern, s) {
    let words = s.split(" ");
    if (pattern.length !== words.length) return false;

    let map = {};
    let used = new Set();

    for (let i = 0; i < pattern.length; i++) {
        let ch = pattern[i];
        let word = words[i];

        if (map[ch]) {
            if (map[ch] !== word) return false;
        } else {
            if (used.has(word)) return false;
            map[ch] = word;
            used.add(word);
        }
    }

    return true;
}
console.log(wordPattern("abba" , "dog cat cat dog"))