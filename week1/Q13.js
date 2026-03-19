// Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))


function greeting(gender){
    if(gender == "Female"){
        console.log("Good Morning Ma'am!")
    }else{
        console.log("Good Morning Sir!")
    }
}
greeting("Female")