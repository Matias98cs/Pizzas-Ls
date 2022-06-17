import { divMostrar, pizzaArray } from "./app.js";
import { limpiarHTML } from "./limparHtml.js";
import { agregarLocalStorage } from "./LocalAgregar.js";


export function crearHTML() {
    // console.log(pizzaId);
    limpiarHTML()
    // console.log(pizzaArray);

    if(pizzaArray.length > 0){
        pizzaArray.forEach( data => {
            const { id, nombre, ingredientes, precio, image, cantidad} = data;
            // console.log(`ID: ${id}, nombre: ${nombre}, cantidad: ${cantidad}`);
            const divIngre = document.createElement('div');
            const contPDiv = document.createElement('div');
            const idP = document.createElement('p');
            const cantidadP = document.createElement('p');
            const title = document.createElement('h1');
            const titlePrice = document.createElement('h4');
            const contDiv = document.createElement ('div')
            const img = document.createElement('img');
            const ingreTitle = document.createElement('strong');

            ingreTitle.innerHTML = 'Ingredientes'
            contPDiv.classList.add('content-p');
            contDiv.classList.add('nombres-pizzas');
            idP.classList.add('idp');
            idP.textContent = `ID: ${id}`
            title.textContent = nombre;
            titlePrice.textContent = `Precio: $${precio}`;
            img.classList.add('img-pizza');
            img.src = image;
            cantidadP.textContent = cantidad;
            cantidadP.classList.add('cantidad')
        
            contPDiv.appendChild(idP);
            contPDiv.appendChild(cantidadP);
            contDiv.appendChild(contPDiv);
        
            // contDiv.appendChild(idP);
            contDiv.appendChild(title);
            contDiv.appendChild(titlePrice);
            contDiv.appendChild(img);         
            contDiv.appendChild(ingreTitle);
            // contDiv.appendChild(cantidadP);
            divMostrar.appendChild(contDiv);

            ingredientes.forEach( ingre => {
                const html = document.createElement('li');
                html.classList.add('ingredientes-p')
                html.innerHTML = ingre;
                divIngre.appendChild(html)
                contDiv.appendChild(divIngre)
            })
        
        })
    }
    agregarLocalStorage()



}