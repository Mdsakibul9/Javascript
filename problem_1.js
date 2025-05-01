function calculateTax(income, expense){
    if (income < 0 || expense < 0){
        console.log("Invalid Input")
    }
    else if (income <= expense){
        console.log("No income Tax")
    }
    else{
        console.log(((income - expense)*20)/100)
    }
}
calculateTax(34000,1753)
calculateTax(10000, 3000);
calculateTax(34000, 1753);
calculateTax(5000, 1500);
calculateTax(-5000, 2000);
calculateTax(7000, 7000);
calculateTax(6000, -1500);
calculateTax(3000, 70000);