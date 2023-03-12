



export function cartasProductos(idContenedor, productos) {
    let html = '';
    productos.forEach(juego => {
        html += `
            <figure>
                <a href="producto.html"> <img src="img/cards/${juego.id}.jpg" width="400px"> </a>
                <figcaption>
                    <span id="titulo"> ${juego.nombre} </span> 
                    <span id="precio"> ${juego.precio}€ </span> 
                </figcaption>
            </figure>
        `;
    });
    document.getElementById(idContenedor).innerHTML = html;
}




export function mostrarProductosFiltrados(producto, idContenedor, generoFiltro, precioMaximoFiltro, valoracionMinimaFiltro) {
    let html = '';
    producto.filter(juego => {
        return juego.genero.includes(generoFiltro) &&
            juego.precio <= precioMaximoFiltro &&
            juego.valoracion >= valoracionMinimaFiltro;
    }).forEach(juego => {
        html += `
        <figure>
          <a href="producto.html"> <img src="img/cards/${juego.id}.jpg" width="400px"> </a>
          <figcaption>
            <span id="titulo"> ${juego.nombre} </span> 
            <span id="precio"> ${juego.precio}€ </span>
            <span id="valoracion"> Valoración: ${juego.valoracion} </span> 
          </figcaption>
        </figure>
      `;
    });
    document.getElementById(idContenedor).innerHTML = html;
}






export function mostrarProductosOrdenados(producto, idContenedor, ordenPor) {
    let html = '';
    let productosOrdenados = [];
  
    // Ordenar los productos según el criterio especificado
    switch (ordenPor) {
      case 'nombre':
        productosOrdenados = producto.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'fecha':
        productosOrdenados = producto.sort((a, b) => new Date(a.fechaLanzamiento) - new Date(b.fechaLanzamiento));
        break;
      case 'precio':
        productosOrdenados = producto.sort((a, b) => a.precio - b.precio);
        break;
      default:
        productosOrdenados = producto;
    }
  
    // Mostrar los productos ordenados en el HTML
    productosOrdenados.forEach(juego => {
      html += `
        <figure>
          <a href="producto.html"> <img src="img/cards/${juego.id}.jpg" width="400px"> </a>
          <figcaption>
            <span id="titulo"> ${juego.nombre} </span> 
            <span id="precio"> ${juego.precio}€ </span>
            <span id="valoracion"> Valoración: ${juego.valoracion} </span> 
          </figcaption>
        </figure>
      `;
    });
  
    document.getElementById(idContenedor).innerHTML = html;
  }
  


  export function buscarProductos(producto, idContenedor, busqueda) {
    let html = '';
    producto.filter(juego => {
      return juego.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
             juego.genero.toLowerCase().includes(busqueda.toLowerCase()) || 
             juego.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    }).forEach(juego => {
      html += `
        <figure>
          <a href="producto.html"> <img src="img/cards/${juego.id}.jpg" width="400px"> </a>
          <figcaption>
            <span id="titulo"> ${juego.nombre} </span> 
            <span id="precio"> ${juego.precio}€ </span>
            <span id="valoracion"> Valoración: ${juego.valoracion} </span> 
          </figcaption>
        </figure>
      `;
    });
    document.getElementById(idContenedor).innerHTML = html;
  }
  