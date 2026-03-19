// Accept the three sides of triangle and calculate the area using Heron's formula

function areaOfTriangle(a,b,c){
    s=(a+b+c)/2
    return Math.sqrt(s*(s-a)*(s-b)*(s-c))
}
console.log(areaOfTriangle(5,6,7))