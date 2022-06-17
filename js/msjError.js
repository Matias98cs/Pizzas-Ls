import { divError, divMostrar } from "./app.js";

export function mostrarError(msj) {
    const erorrP = document.createElement('p');
    const contError = document.createElement('div');
    erorrP.textContent = msj;
    contError.classList.add('erorr');

    contError.appendChild(erorrP)
    divError.appendChild(contError);

    setTimeout(() => {
        contError.remove();
    }, 1600);
}