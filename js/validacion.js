import { limparError, limpiarHTML } from "./limparHtml.js";
import { mostrarError } from "./msjError.js";


export function validarNumeroId(numb) {
    if(numb > 0 && numb <= 6) {
        return numb;
    } else {
        mostrarError('Debe ingrese un numero del 1 al 6')
    }

}