//JUAN DIEGO

import { devolverItemsPaginacion } from "./juandi.js";


const limite = 6; // objetos por pagina
const total = 8; // numero total de objetos
let index = 0; 


fetch("productos.json")
  .then(res => res.json()) // Transforma la respuesta en un objeto json
  .then((dataProductos) => {
    devolverItemsPaginacion('productos',index,limite,dataProductos);

    // boton siguiente
    let nextBtn = document.getElementById('siguiente');
    nextBtn.addEventListener("click", function(){
      if (index + limite < total){
        index += limite;
        devolverItemsPaginacion('productos',index,limite,dataProductos);
      }
    });

    // boton anterior
    let prevBtn = document.getElementById('anterior');
    prevBtn.addEventListener("click", function(){
      if (index > 0) {
        index -= limite;
        devolverItemsPaginacion('productos',index,limite,dataProductos);
      }
    });

  }); 




