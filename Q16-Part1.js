// Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote.

function validVoter(name,age){
    if(age>=18){
        console.log("Hello", name, ", you are a valid voter.")
    }else{
        console.log("Sorry",name , ", you are not a valid voter.")
    }
}
validVoter("Shery",14)