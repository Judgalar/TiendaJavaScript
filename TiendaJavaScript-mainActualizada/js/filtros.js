import { mostrarProductosFiltrados } from "./isra.js";
import { mostrarProductosOrdenados } from "./isra.js";
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

    //productos ordenados


    const formOrd = document.querySelector('form1');
    const contenedorProductosOrd = document.getElementById('contenedor-productosOrdenados');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const generoFiltro = document.getElementById('genero1').value;
        const precioMaximoFiltro = Number(document.getElementById('precio-maximo1').value);
        const valoracionMinimaFiltro = Number(document.getElementById('valoracion-minima1').value);
        const ordenPor = document.getElementById('orden-por1').value;
        mostrarProductosOrdenados(productos, 'contenedor-productosOrdenados', ordenPor);
    });


    //busqueda de productos

    const formBusqueda = document.getElementById('form-busqueda');
    formBusqueda.addEventListener('submit', event => {
        event.preventDefault();
        const busqueda = document.getElementById('busqueda').value;
        buscarProductos(productos, 'contenedor-productosB', busqueda);
    });





}); 

