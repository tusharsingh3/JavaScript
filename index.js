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
// let a = [{a:1}];
// let b = [{b:3}];

// console.log("Sum -", a[0].a + b[0].b)

// // Subtract
// let c = [{a:1}];
// let d = [{b:3}];

// console.log("Sub -", a[0].a - b[0].b)

// // Multiply
// let e = [{a:2}];
// let f = [{b:3}];

// console.log("Mul -", e * f)

// // Equal
// let g = "1"
// let h = 1

// console.log(g==h)
// console.log(g===h)

//Exponent Operators. : Raises a base number to the exponent power, that is, the base number multiplied by itself, exponent times.

// console.log(5 ** 5);
// console.log(5 * 5 * 5 * 5 * 5)
// console.log(60 % 3);

//+ ,- * % ()

// console.log(2 + 2 - 4 * 8 + (7 + 7) % 2);
// 4 - 32 + 14 % 2

// 4 -32 + 0

// console.log(50 + 10 / 8 + 2);

// () % / * + -

// Incermant Operators

let num1 = 4;
// console.log(num1++);
// console.log(num1);
// let num5 = 5;
// console.log(num5--);
// console.log(num5);
// let num8 = 5;
// console.log(num8--)
// console.log(--num1);




let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
// console.log(x *= y);

// console.log(x *= y);
// console.log(x)
// console.log(y);

// console.log(x -= y);
// console.log(x)
// console.log(y);

// console.log(x += y);
// console.log(x)
// console.log(y);

// console.log(x /= y);

// console.log(x)
// console.log(y);

// +++++++++++++++++++++++ Practice Question +++++++++++++++++++++

// const a = 10, b = 14, c = 4, d = 2;

// const e = a + b;

// const f = c - d;

// const finalResult = e * f;

// console.log(finalResult)

// if (finalResult % 2 == 0) {
//     console.log(`this is even number`);
// }


// Question 2

// let result = 5.21, result2 = 2;

// const finalResult = result *= result2;
// let finalNumber = finalResult;

// console.log(finalNumber);


// Question 3

// // weightComparison
// const tusharWeight = 90;
// const pawanWeight = 79;

// const weightComparisons = (tusharWeight > pawanWeight);
// console.log(weightComparisons);
// //heightComparison
// const tusharHeight = 6;
// const pawanHeight = 5.4;
// const heightComparison = (tusharHeight > pawanHeight);
// console.log(heightComparison);
// // pwdMatch
// const test1 = 'pawan@123';
// const test2 = 'Pawan@123';
// const pwdMatch = (test1 === test2);
// console.log(pwdMatch)

// ++++++++++++++++++++++++++++++++++++++      STRINGS          ++++++++++++++++++++++++++++++++++++++++++++++++++++
// const string = "The revolution will not be televised.";
// console.log(string);

// const badString = string;
// console.log(badString);


// const sgl = 'Single quotes.';
// const dbl = "Double quotes";
// console.log(sgl);
// console.log(dbl);


// // const badQuotes = 'What on earth?";
// // console.log(badQuotes);



// const sglDbl = 'Would you eat a "fish supper"?';
// const dblSgl = "I'm feeling blue.";
// console.log(sglDbl);
// console.log(dblSgl);


// const bigmouth = 'I\'ve got no right to take my place…';
// console.log(bigmouth);


// const test = ' tastedada \v teaj';
// const test1 = ' tastedada \f teaj';
// // console.log(test);
// console.log(test1);


// const name = "Chris";
// const greeting = `Hello, ${name}`;
// console.log(greeting); // "Hello, Chris"



// const one = "Hello, ";
// const two = "how are you?";
// const joined = `${one}${two}`;
// console.log(joined); // "Hello, how are you?"


// const greeting = "Hello";
// const name = "Chris";
// console.log(greeting + ", " + name); // "Hello, Chris"


// const name = "Front ";
// const number = 242;
// console.log(`${name}${number}`); // "Front 242"


// const myString = "123";
// const myNum = Number(myString);
// console.log(typeof myNum);
// console.log(myString);

// const myString1 = "1223";
// const val = parseInt(myString1)
// console.log(typeof val);
// console.log(val);

console.log(+'32');

// +'0xF'

const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);
console.log(myString2);