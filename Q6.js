// Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)

function swap(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(a,b)
}
swap(5,2)