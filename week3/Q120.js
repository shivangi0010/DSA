// Largest 3-Same-Digit Number in String

var largestGoodInteger = function(num) {

    let max = ""

    for(let i = 0; i < num.length - 2; i++){

        if(num[i] === num[i+1] && num[i] === num[i+2]){
            
            let curr = num[i] + num[i+1] + num[i+2]

            if(curr > max){
                max = curr
            }
        }
    }

    return max
};

console.log(largestGoodInteger("6777133339")) 