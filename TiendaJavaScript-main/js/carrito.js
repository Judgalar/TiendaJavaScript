//JUAN DIEGO

// Función para eliminar un producto del carrito y del localStorage
function eliminarProducto(nombreJuego) {
    let carrito = JSON.parse(localStorage.getItem("carritoProductos")) || {};

    if(carrito[nombreJuego].cantidad > 1) carrito[nombreJuego].cantidad--;
    else delete carrito[nombreJuego];

    localStorage.setItem("carritoProductos", JSON.stringify(carrito));

    mostrarCarrito();
}

function mostrarCarrito(){
  // Obtener los productos existentes en el carrito, si los hay
  let carrito = JSON.parse(localStorage.getItem("carritoProductos")) || {};

  const tabla = document.querySelector("#tabla-carrito");

  // cabecera de la tabla  
  const tablaCabecera = `<tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Precio unitario</th>
                      <th>Precio total</th>
                      <th>Eliminar</th>
                    </tr>`;
  tabla.innerHTML = tablaCabecera;

  // Recorrer todos los productos del carrito
  for (let nombreJuego in carrito) {
    // Crear una fila para cada producto
    const juego = carrito[nombreJuego];
    const fila = `
      <tr>
          <td>${nombreJuego}</td>
          <td>${juego.cantidad}</td>
          <td>${juego.precio}</td>
          <td>${juego.precio * juego.cantidad }</td>
          <td>
          <button class="btnTodo" onclick="eliminarProducto('${nombreJuego}')">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
              </svg>
          </button></td>
      </tr>
      `;
    // Agregar la fila a la tabla
    tabla.innerHTML += fila;
  }

  const cantidadCarrito = document.getElementById("cantidad-carrito");
  const sumaTotal = document.getElementById("suma-total-carrito");

  cantidadCarrito.innerText = "Artículos: " + Object.keys(carrito).length.toString();

  let total = 0;
  for (const [nombreProducto, infoProducto] of Object.entries(carrito)) {
    total += infoProducto.precio * infoProducto.cantidad;
  }
  sumaTotal.innerText ="Total: " +  total.toFixed(2) + "€";
}

mostrarCarrito();