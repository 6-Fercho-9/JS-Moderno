const producto = {
    nombre: "table",
    precio: 300,
    disponible: true
}

// Object.freeze()
// Esto evita que se puedan modificar las propiedades del objeto
function getObjetoSoloLectura(obj = producto){
    return Object.freeze(obj);
}

// Object.seal()
// Esto evita que se puedan agregar o eliminar propiedades del objeto, pero se pueden modificar las propiedades existentes
function getObjetoSeal(obj = producto){
    return Object.seal(obj);
}

function eliminarPropiedad(objeto = producto,propiedad = "disponible"){
    return delete objeto[propiedad];
}

function eliminarPropiedadV1(){
    console.log(producto);
    delete producto.disponible;
    console.log(producto);
}

eliminarPropiedad();
//objeto,propiedad a eliminar con comillas
//eliminarPropiedad(producto,"disponible");
