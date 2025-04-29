//console.log('hello word nodejs');
let username = 'arkiapps'
let hasHobbies = 'programming';
let points = [10, 20, 30]
let user = {
    name: 'melo',
    lastname: 'duarte',
}

console.log(username)
console.log(hasHobbies)
console.log(points)
console.log(user)


// Arreglos
const age = 35;

if (age >= 18) {
    console.log("Tu eres un adulto")
} else {
    console.log("tu eres un nino")
}


// Bucles
const lastnames = ['alex', 'gioly', 'camal', 'sarah']
for (let i = 0; i < lastnames.length; i++){
    console.log(lastnames[i]);
}

// Funciones 
const showUserInfo = (userName, userAge) => `The username is ${userName}, the user is ${userAge} yearls old`

console.log(showUserInfo('Jesus', 30))
console.log(showUserInfo('Marie', 50))
