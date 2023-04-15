// /* Variables In Javascript
// Variables are containers that store values.
// Types of variables in javascript:-
// 1. var (was used before 2015)
// 2. let (use after 2015)
// 3. const (use after 2015)
// */


// /*--------------------VAR--------------------*/
// /*-----First Example-----*/
// testVariable
// var testVariable = 10
// console.log('VARIABLE - ', testVariable)

// /*-----Second Example-----*/
// testVariable = 10
// var testVariable
// console.log('VARIABLE - ', testVariable)

// /*-----Third Example-----*/
// testVariable = 10
// console.log('VARIABLE - ', testVariable)
// var testVariable

// /*-----Fourth Example-----*/
// testVariable = 10
// {
//     testVariable = 20
// }
// console.log('VARIABLE - ', testVariable)
// var testVariable

// /*-----Fifth Example-----*/
// var testVariable = 10
// {
//     testVariable = 20
// }
// console.log('VARIABLE - ', testVariable)


// /*--------------------CONST--------------------*/
// /*-----First Example-----*/
// testVariable
// const testVariable = 10
// console.log('VARIABLE - ', testVariable)

// /*-----Second Example-----*/
// testVariable = 10
// const testVariable
// console.log('VARIABLE - ', testVariable)

// /*-----Third Example-----*/
// testVariable = 10
// console.log('VARIABLE - ', testVariable)
// const testVariable

// /*-----Fourth Example-----*/
// testVariable = 10
// {
//     testVariable = 20
// }
// console.log('VARIABLE - ', testVariable)
// const testVariable

// /*-----Fifth Example-----*/
// const testVariable = 10
// {
//     testVariable = 20
// }
// console.log('VARIABLE - ', testVariable)

// /*-----Sixth Example-----*/
// const testVariable = 10
// console.log('VARIABLE - ', testVariable)


// /*--------------------LET--------------------*/
// /*-----First Example-----*/
// testVariable
// let testVariable = 10
// console.log('VARIABLE - ', testVariable)

// /*-----Second Example-----*/
// testVariable = 10
// let testVariable
// console.log('VARIABLE - ', testVariable)

// /*-----Third Example-----*/
// testVariable = 10
// console.log('VARIABLE - ', testVariable)
// let testVariable

// /*-----Fourth Example-----*/
// testVariable = 10
// {
//     testVariable = 20
// }
// console.log('VARIABLE - ', testVariable)
// let testVariable

// /*-----Fifth Example-----*/
// let testVariable = 10
// {
//     testVariable = 20
// }
// console.log('VARIABLE - ', testVariable)

// /*-----Sixth Example-----*/
// let testVariable = 10
// console.log('VARIABLE - ', testVariable)


//********************************* Operators ****************************//


// Addition
let a = [{a:1}];
let b = [{b:3}];

console.log("Sum -", a[0].a + b[0].b)

// Subtract
let c = [{a:1}];
let d = [{b:3}];

console.log("Sub -", a[0].a - b[0].b)

// Multiply
let e = [{a:2}];
let f = [{b:3}];

console.log("Mul -", e * f)

// Equal 
let g = "1"
let h = 1

console.log(g==h)
console.log(g===h)