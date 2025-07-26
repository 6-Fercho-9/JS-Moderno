const producto = {
  nombre: "table",
  precio: 300,
  disponible: true,
};

const cliente = {
    nombre:"Juan",
    premium:true,
    direccion:{
        calle:"calle falsa 123",
    }
}

function imprimirConMismoAtributoNombre(){
    //destructuring
    const {nombre} = producto;
    //para renombrar
    const {nombre: nombreCliente} = cliente;   
    console.log(`nombre del producto: ${nombre}, nombre del cliente ${nombreCliente}`);
}
function obtenerObjetoDireccion(){
    const {direccion} = cliente; // imprime {calle: "calle falsa 123"}, imprime el objeto
    console.log(direccion);
}

function obtenerValorCalle(){
    //no renombra,si no que entra al atributo,para obtener el valor
    const { direccion: {calle} } = cliente;
    console.log(calle);//imrprime "calle falsa 123", solo el valor
}
