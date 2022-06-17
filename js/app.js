// Utilizando el querido array de objetos "Pizzas🍕", realizar el siguiente desafío: 

// 👉 A cada Pizza, agregarle una imagen. 
// 👉 Guardar el array en el local storage. 
// 👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
// 👉 Debajo del card tiene que haber un input y un botón. 

// Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

// 🆙 Antes de entregar, debemos deployar nuestro repositorio en Vercel, y entregar ambos links. (GitHub y Vercel). 

import { crearHTML } from "./crearHtml.js";
import { limparError, limpiarHTML } from "./limparHtml.js";
import { mostrarLs } from "./mostrarLs.js";
import { pizzas } from "./pizzas.js";
import { validarNumeroId } from "./validacion.js";

export let pizzaArray = [];

//variables
export const formulario = document.querySelector('#formulario');
export const inputId = document.querySelector('#pizzId');
export const divMostrar = document.querySelector('.mostrar');
export const divError = document.querySelector('.error');

window.addEventListener("load", () => {
    localStorage.setItem('pizzas', JSON.stringify(pizzas))
})

document.addEventListener('DOMContentLoaded', () => {

    let pizzaGuardarLocal = JSON.parse(localStorage.getItem('pizzasLocal'));
    // console.log(pizzaGuardarLocal)
    mostrarLs(pizzaGuardarLocal);  
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    limparError()
    const buscar = inputId.value;
    // console.log(buscar);
    validarNumeroId(buscar);


    const pizzasLocalStorage = JSON.parse(localStorage.getItem('pizzas'))
    let pizzaID = pizzasLocalStorage.find((pizza) => pizza.id == buscar);

    const { id, nombre, ingredientes, precio, image} = pizzaID;

    const pizzObjc = {
        id: id,
        nombre: nombre,
        ingredientes: ingredientes,
        precio: precio,
        image: image,
        cantidad: 1
    }

    if(pizzaArray.some( pizza => pizza.id === pizzObjc.id)) {
        const pizasNuevo = pizzaArray.map( pizza => {
            if(pizza.id === pizzObjc.id) {
                let cantidad = parseInt(pizza.cantidad);
                cantidad++;
                pizza.cantidad = cantidad;
                return pizza;
            } else {
                return pizza;
            }
        })

        pizzaArray = [...pizasNuevo];
    } else {
        pizzaArray = [...pizzaArray, pizzObjc];
    }

    crearHTML();
    // agregarLocalStorage()
    
    formulario.reset();
})
