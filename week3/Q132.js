// Duplicate Zeros

function duplicateZeros(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 0) {

            for (let j = arr.length - 1; j > i; j--) {
                arr[j] = arr[j - 1];
            }

            i++; 
        }
    }

    return arr;
}
console.log(duplicateZeros([1,0,2,3,4,0]))