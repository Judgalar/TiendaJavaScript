//JUAN DIEGO

import { devolverItems } from "./funcionesJSON.js";


const limite = 6; // objetos por pagina
const total = 8; // numero total de objetos
let index = 0; 


devolverItems('productos',index,limite);

// boton siguiente
let nextBtn = document.getElementById('siguiente');
nextBtn.addEventListener("click", function(){
  if (index + limite < total){
     index += limite;
    devolverItems('productos',index,limite);
  }
});

// boton anterior
let prevBtn = document.getElementById('anterior');
prevBtn.addEventListener("click", function(){
  if (index > 0) {
    index -= limite;
    devolverItems('productos',index,limite);
  }
});