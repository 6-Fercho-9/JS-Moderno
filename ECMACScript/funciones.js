export function sumar(a = 0, b = 10) {  
    return a + b;
}

export function restar(a = 9, b = 2) {
    return a - b; 
}

export function multiplicar(a = 9, b = 2) {
    return a * b; 
}   

//hay que cambiar el packege.json para que use el modulo
// a "type": "module"