// First Letter to Appear Twice

function appearTwice(s){
    let seen = {};

    for (let char of s) {
        if (seen[char]) {
            return char;
        }
        seen[char] = true;
    }
}
console.log(appearTwice("abcddfgjj"))