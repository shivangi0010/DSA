// Print the unique elements in an array
function printUnique(arr) {
    let count = {};

    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let num of arr) {
        if (count[num] === 1) {
            console.log(num);
        }
    }
}

printUnique([1, 2, 2, 3, 4, 4, 5]);