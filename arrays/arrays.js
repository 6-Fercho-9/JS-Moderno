const tecnologias = ["Angular","React","Flutter","node JS","Express JS"];
console.log(tecnologias[0]);
console.table(tecnologias);

function agregarNuevoValor(array,valor){
    //sin usar el push
    return [...array,valor];
}

console.log(agregarNuevoValor(tecnologias,"Vue Js"));

//para cambiar Flutter por VueJS
//si usase [3] seria modificar el valor del arreglo, y no deberia ser asi
//los objetos deben ser inmutables
function eliminarValor(array,valor,reemplazo){
    return array.map(function(elemento){
        if(elemento === valor) return reemplazo;
        return elemento;
    })
}
console.log(eliminarValor(tecnologias,"Flutter","Vue Js"));


// destructuring en arrays
//toma los valores por posicion
function desctructuringArreglo(array = tecnologias){

    const [angular,react,flutter] = array;
    console.log(`${angular},${react},${flutter}`); 
}

//extraeme solo NODE JS
//notacion rara
function destructuringRaro(array = tecnologias){
    //para llegar solo a NODEJS,dejo los demas en blanco y los salto con coma ","
    const [ , , ,NodeJS] = array;
    ///equivalencia
    const nodejs = array[3];
    console.log(NodeJS,nodejs);
}
destructuringRaro();