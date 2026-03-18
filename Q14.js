// Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.

function greeting(gender){
    if(gender=="M" || gender=="m"){
        console.log("Good Morning Sir!")
    }else if(gender=="f" || gender=="F"){
        console.log("Good Morning Ma'am!")
    }else{
        console.log("Wrong Input!")
    }
}
greeting("M")