let userEmail = 'anushkaraj123'
let password = '12345678'

let userChecker = function (myString) {
    if (myString.includes(123) && (myString.length>6)) {
        return true
    } 
    return false
}

let passChecker = function(pass){
    if (pass.includes(1234) && (pass.length>6)) {
        return true
    } 
    return false
}

console.log(userChecker(userEmail));
console.log(passChecker(password));
