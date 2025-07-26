//optionar chaining (?)
const alumno = {
    nombre: "Juan",
    clase: "programacion",
    aprobado:true
}

//error
//console.log(alumno.examanes.examen1); -> rompe el codigo
console.log(alumno.examanes?.examen1); // -> imprime undefined si no tiene examenes, se traduce como alumno tiene examenes?



// Nullish coelescing operator (??)
// Este operador devuelve el operando de la derecha si el operando de la izquierda es null o undefined

const pagina = null ?? "Pagina no encontrada";
const evento = undefined ?? "Evento no encontrado";
console.log(pagina); // -> imprime "Pagina no encontrada"
console.log(evento); // -> imprime "Evento no encontrado"

