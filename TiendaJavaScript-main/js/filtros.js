import { mostrarProductosFiltrados } from "./isra.js";

import { buscarProductos } from "./isra.js";
fetch("productos.json")
.then(res => res.json())
.then((productos) => {





    //profuctos filtrados
    const form = document.querySelector('form');
    const contenedorProductos = document.getElementById('contenedor-productos');

    form.addEventListener('submit', event => {
        event.preventDefault();
      const generoFiltro = document.getElementById('genero').value;
      const precioMaximoFiltro = Number(document.getElementById('precio-maximo').value);
      const valoracionMinimaFiltro = Number(document.getElementById('valoracion-minima').value);
      mostrarProductosFiltrados(productos, 'contenedor-productos', generoFiltro, precioMaximoFiltro, valoracionMinimaFiltro);
    });

  


    //busqueda de productos

    const formBusqueda = document.getElementById('form-busqueda');
    formBusqueda.addEventListener('submit', event => {
        event.preventDefault();
        const busqueda = document.getElementById('busqueda').value;
        buscarProductos(productos, 'contenedor-productosB', busqueda);
    });





}); 

