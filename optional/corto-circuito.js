//la operacion de corto circuito consiste en realizar una operacion logica
// donde el primer operando es verdadero, el segundo no se evalua

// a lo bruto , si la izquierda es verda entonces ejecuto lo de la derecha
const usuario = {}
usuario && console.log("usuario autenticado")

