//JUAN DIEGO
function agregarCarrito(nombre,precio){
  // Obtener la información del producto que se desea agregar al carrito
  const nombreJuego = nombre;
  const precioProducto = precio;

  // Obtener los productos existentes en el carrito, si los hay
  let carritoProductos = JSON.parse(localStorage.getItem("carritoProductos")) || {};

  // Si el producto ya está en el carrito, aumentar su cantidad
  if (carritoProductos[nombreJuego]) {
    carritoProductos[nombreJuego].cantidad += 1;
  } else {
    // Si no está en el carrito, agregarlo con cantidad 1
    carritoProductos[nombreJuego] = { precio: precioProducto, cantidad: 1 };
  }

  // Guardar el carrito actualizado en el localStorage
  localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos));

  alert('Añadido a la cesta');
}
