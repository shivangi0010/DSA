// Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

function compoundInterest( P, r, t ){
    return (P*Math.pow((1+(r/100)),t))-P
}
console.log(compoundInterest(2000,5,2))