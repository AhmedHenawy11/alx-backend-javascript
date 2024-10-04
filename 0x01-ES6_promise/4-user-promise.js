

function signUpUser(firstName, lastName) {
    if (firstName && lastName) {
        return firstName + lastName
    } else {
        return "Null"
    }
}


console.log(signUpUser("ahmed", "ali"));