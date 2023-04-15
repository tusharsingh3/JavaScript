# Variables In Javascript
## Variables are containers that store values.
## Types of variables in javascript:-
### var (was used before 2015)
### let (use after 2015)
### const (use after 2015)


# VAR

## First Example
```
testVariable
var testVariable = 10
console.log('VARIABLE - ', testVariable)
```

## Second Example
```
testVariable = 10
var testVariable
console.log('VARIABLE - ', testVariable)
```

## Third Example
```
testVariable = 10
console.log('VARIABLE - ', testVariable)
var testVariable
```

## Fourth Example
```
testVariable = 10
{
    testVariable = 20
}
console.log('VARIABLE - ', testVariable)
var testVariable
```

## Fifth Example
```
var testVariable = 10
{
    testVariable = 20
}
console.log('VARIABLE - ', testVariable)
```


# CONST
## First Example
```
testVariable
const testVariable = 10
console.log('VARIABLE - ', testVariable)
```

## Second Example
```
testVariable = 10
const testVariable
console.log('VARIABLE - ', testVariable)
```

## Third Example
```
testVariable = 10
console.log('VARIABLE - ', testVariable)
const testVariable
```

## Fourth Example
```
testVariable = 10
{
    testVariable = 20
}
console.log('VARIABLE - ', testVariable)
const testVariable
```

## Fifth Example
```
const testVariable = 10
{
    testVariable = 20
}
console.log('VARIABLE - ', testVariable)
```

## Sixth Example
```
const testVariable = 10
console.log('VARIABLE - ', testVariable)
```


# LET
## First Example
```
testVariable
let testVariable = 10
console.log('VARIABLE - ', testVariable)
```

## Second Example
```
testVariable = 10
let testVariable
console.log('VARIABLE - ', testVariable)
```

## Third Example
```
testVariable = 10
console.log('VARIABLE - ', testVariable)
let testVariable
```

## Fourth Example
```
testVariable = 10
{
    testVariable = 20
}
console.log('VARIABLE - ', testVariable)
let testVariable
```

## Fifth Example
```
let testVariable = 10
{
    testVariable = 20
}
console.log('VARIABLE - ', testVariable)
```

## Sixth Example
```
let testVariable = 10
testVariable = 20
console.log('VARIABLE - ', testVariable)
```