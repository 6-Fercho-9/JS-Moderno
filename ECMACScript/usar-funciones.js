import {sumar,restar,multiplicar} from "./funciones.js";

// importando de otros archivos y renombrado de funciones
import saludar, { vender,saludarDeNuevo as Saludo } from "./importar-v2.js";

const resultadoSuma = sumar(10,9);
console.log(resultadoSuma);

const restarResultado = restar(10,9);
console.log(restarResultado);

vender();
saludar();
Saludo();