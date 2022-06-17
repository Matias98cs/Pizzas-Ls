import { divError, divMostrar } from "./app.js";

export function limpiarHTML() {
    while(divMostrar.firstChild) {
        divMostrar.removeChild(divMostrar.firstChild);
    }
}


export function limparError() {
    while(divError.firstChild) {
        divError.removeChild(divError.firstChild);
    }
}