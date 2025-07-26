const producto = {
  nombre: "table",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "Juan",
  premium: true,
  direccion: {
    calle: "calle falsa 123",
  },
};

function usarSpreadOperator(){
    
    // spread operator
    /**
     * salida
     * {
     *  cantidad:1
     *  nombre: "table",
        precio: 300,
        disponible: true,
     * }
     */
    // El spread operator permite crear un nuevo objeto que combina las propiedades de otro objeto
    const carrito = {
        cantidad: 1,
        ...producto
    }
    
    //sin spread Operator
    //lo copia el objeto ensi, mientras que con el spread opeartor los combina
    /**
     * salida
     * {
     *  cantidad:1,
     *  producto:{
        * cantidad:1
        *  nombre: "table",
            precio: 300,
            disponible: true,
        }
     * }
     */
    console.log(carrito);

}
function crearObjetoConSpreadOperator(){
    //otra forma un tanto rara
    const objeto = {
        producto: {...producto},
        cliente: {...cliente}
    }
    const objeto2 = {
      ...producto,
      ...cliente,
    };
    
    console.log(objeto);
    console.log(objeto2);
}

function crearObjetoConAssign(){
    //une los objetos en un solo objeto
    const objeto2 = Object.assign(producto,cliente);
    console.log(objeto2);
}
crearObjetoConSpreadOperator();