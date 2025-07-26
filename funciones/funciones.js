//Funciones declarativas -> se pueden usar antes o despues de ser declaradas
function sumar(a = 0,b =10){
    return a + b;
}

//Funciones de expresion -> se pueden usar luego de ser declaradas y no antes, por que son declaradas como "variables"
const restar = function(a = 9, b = 2){
    return a - b; 
}

//arrow functions -> son funciones de expresion, pero con una sintaxis mas corta

const multiplicar = (a = 9, b = 2) => {
    return a * b; 
}

const multiplicarUnaSolaLinea = (a = 9, b = 9) => a * b;
const imprimirfunction = (callback) => {
    console.log(callback);
}
imprimirfunction(multiplicarUnaSolaLinea());

