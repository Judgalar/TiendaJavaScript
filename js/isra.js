



// export function cartasProductosNOuso(idContenedor, productos) {
//     let html = '';
//     productos.forEach(juego => {
//         html += `
//             <figure>
//                 <a href="producto.html"> <img src="img/cards/${juego.id}.jpg" width="400px"> </a>
//                 <figcaption>
//                     <span id="titulo"> ${juego.nombre} </span> 
//                     <span id="precio"> ${juego.precio}€ </span> 
//                 </figcaption>
//             </figure>
//         `;
//     });
//     document.getElementById(idContenedor).innerHTML = html;
// }


export function cartasProductos(idContenedor, productos) {
  let html = '';
  productos.forEach(juego => {
    if (juego.masVendidos) {
      html += `
      <figure>
        <a href="producto.html?id=${juego.id}"> <img src="img/cards/${juego.id}.jpg" width="400px"> </a>
        <figcaption>
            <span id="titulo"> ${juego.nombre} </span> 
            <span id="precio"> ${juego.precio}€ </span> 
        </figcaption>
        <figcaption>
          <button class="btnTodo" onclick="agregarCarrito('${juego.nombre}' , '${juego.precio}' )"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg> 
          </button> 
      </figcaption>
      </figure>
      
  `;
    }
  })
  document.getElementById(idContenedor).innerHTML = html;
}


export function cartasProductosPromocion(idContenedor, productos) {
  let html = '';
  productos.forEach(juego => {
    if (juego.promocion) {
      html += `
      <figure>
      <a href="producto.html?id=${juego.id}"> <img src="img/cards/${juego.id}.jpg" width="400px"> </a>
          <figcaption>
              <span id="titulo"> ${juego.nombre} </span> 
              <span id="precio"><strike> ${juego.precio}€</strike> </span>
              
              </figcaption>
              <figcaption>
              <span id="precioT"> ${juego.promocion}% </span>
              <span id="precioR"> ${juego.precio - Math.round((juego.precio * juego.promocion / 100))}€ </span>   
              
          </figcaption>
          <figcaption>
            <button class="btnTodo" onclick="agregarCarrito('${juego.nombre}' , '${juego.precio}' )"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg> 
            </button> 
          </figcaption>
      </figure>
  `;
    }
  })
  document.getElementById(idContenedor).innerHTML = html;
}


export function mostrarProductosFiltrados(producto, idContenedor, generoFiltro, precioMaximoFiltro, valoracionMinimaFiltro) {
  let html = '';
  producto.filter(juego => {
    return juego.genero.toLowerCase().includes(generoFiltro.toLowerCase()) &&
      juego.precio <= precioMaximoFiltro &&
      juego.valoracion >= valoracionMinimaFiltro;
  }).forEach(juego => {
    html += `
      <figure>
        <a href="producto.html"> <img src="img/cards/${juego.id}.jpg" width="400px"> </a>
        <figcaption>
          <span id="titulo"> ${juego.nombre} </span> 
          <span id="precio"> ${juego.precio}€ </span>
        </figcaption>
        <figcaption>
        <span id="valoracion"> Valoración: ${juego.valoracion} </span> 
        </figcaption>
        <figcaption>
          <button class="btnTodo" onclick="agregarCarrito('${juego.nombre}' , '${juego.precio}' )"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg> 
          </button> 
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
          </figcaption>
          <figcaption>
            <span id="valoracion"> Valoración: ${juego.valoracion} </span> 
          </figcaption>
          <figcaption>
            <button class="btnTodo" onclick="agregarCarrito('${juego.nombre}' , '${juego.precio}' )"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg> 
            </button> 
          </figcaption>
        </figure>
      `;
  });
  document.getElementById(idContenedor).innerHTML = html;
}
