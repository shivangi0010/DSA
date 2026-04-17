// Check if Numbers Are Ascending in a Sentence

function areNumbersAscending(s) {
    let prev = 0;  

    let arr = s.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= '0' && arr[i] <= '9999') {
            let num = Number(arr[i]);

            if (num <= prev) {
                return false;
            }

            prev = num;
        }
    }

    return true;
}
console.log(areNumbersAscending("1 are 3 so good 5"))