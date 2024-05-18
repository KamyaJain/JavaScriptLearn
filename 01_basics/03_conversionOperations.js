let score = "33"

console.log(typeof score)
// now we want to convert score into number

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

let score2 = "33abc"

console.log(typeof score2)
// now we want to convert score into number

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2) // NaN - means not a number

let score3 = null

console.log(typeof score3)
// now we want to convert score into number

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)

let score4 = undefined

console.log(typeof score4)
// now we want to convert score into number

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)


// conclusion of values to convert in number
// "33" = 33
// "33abc" = NaN
// true = 1
// false = 0
// undefined = NaN
// null = 0

// conclusion of values to convert in boolean
// 1 = true
// 0 = false
// "" = false
// "kamya" = true

// can also convert number into string
// syntax: 
let number = 33
let numberInString = String(number)
console.log(typeof numberInString)
console.log(numberInString) 