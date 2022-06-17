import {pizzaArray } from "./app.js";


export function agregarLocalStorage() {
    
    localStorage.setItem('pizzasLocal', JSON.stringify(pizzaArray));

}

//idea ==> pasale por parametro el arrayPizzas y agregarle en la funcion y probar si anda