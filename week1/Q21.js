// bijli bill

function bijliBill(currentReading,previousReading){
    units = currentReading-previousReading;
    console.log("Units:",units)
    if(units>=0 && units<=100){
        bill = units * 3;
        console.log("The bill according to",units,"units is:",bill)
    }else if(units>100 && units<=200){
        bill = (100*3)+((units-100)*5)
        console.log("The bill according to",units,"units is:",bill)
    }else{
        bill = (100*3)+(100*5)+((units-200)*7)
         console.log("The bill according to",units,"units is:",bill)
    }
}
bijliBill(1450,1200)