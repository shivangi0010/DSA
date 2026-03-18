// Shop discount

function discountCalculate(totalPrice,discount){
    console.log("Total Price:",totalPrice)
    console.log("Discount:",discount,"%")
    console.log("Final Price after discount:",totalPrice-((discount/100)*totalPrice))
}
discountCalculate(2000,20)