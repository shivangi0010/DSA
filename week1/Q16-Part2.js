//  Part 2 - Print after how many years the user will be eligible)

function validVoter(name,age){
    let a = 18-age;
    if(age>=18){
        console.log("Hello",name,", you are a valid voter.")
    }else{
        console.log("Sorry",name,", you can vote after",a,"years.")
    }
}
validVoter("Shivangi",11)