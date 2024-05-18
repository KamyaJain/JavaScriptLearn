const accountId = 123456 // cannot be changed.
let accountEmail = "kamyajain@gmail.com" // use let to declare variables
let accountPassword = "12345678"
accountCity = "Etah"
let accountState;

// prefer not to use var as it creates problem in block scope and functional scope

accountEmail = "sarthakpagal@gmail.com"
accoutPassword = "123123123"
accountCity = "Kolkata"

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])