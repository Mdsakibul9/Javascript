function checkNumber1(str){
    let chars = str.split('');
    let hasNumber = chars.some(char => !isNaN(char) && char !== ' ')
    //let hasNumber = [...str].some(char => !isNaN(char) && char !== ' ');
    return hasNumber
}




// function two to check whether there is a number or not in the string
function checkNumber(str){
    // let str = "abc5def"; // for reference 
    let hasNumber = /\d/.test(str);
    return hasNumber

}

function checkDigitsInName(name){
    if (typeof(name) == "string"){
        if (checkNumber1(name)){
            console.log(true)
        }
        else{
            console.log(false)
        }
    }
    else{
        console.log("invalid input")
    }
}
checkDigitsInName("sakib");
checkDigitsInName("Suman");
checkDigitsInName("!@#");
checkDigitsInName("elmu3");
checkDigitsInName("name2024");
checkDigitsInName(420);