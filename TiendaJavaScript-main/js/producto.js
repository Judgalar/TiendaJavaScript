

fetch("productos.json")
  .then(res => res.json())
  .then((productos) => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const idProducto = urlParams.get('id');
    console.log('ID del producto:', idProducto);
    
    productos.forEach(juego => {
      if(juego.id == idProducto)
      {
        titulo.innerHTML = juego.nombre;
        precio.innerHTML = juego.precio + "€";
        //si el juego tiene promocion cambio el precio y muestro el descuento
        if(juego.promocion)
        {
          juego.precio = juego.precio - Math.round((juego.precio * juego.promocion / 100));
          precio.innerHTML = juego.precio + "€";
         
          descuento.innerHTML = juego.promocion + "%";

        } 

        acercaDelJuego.innerHTML = juego.descripcion;
        desarrollador.innerHTML = juego.desarrollador;
        valoracionesU.innerHTML = juego.valoracion;
        Distribuidor.innerHTML = juego.Distribuidor;
        FechaL.innerHTML = juego.fechaLanzamiento;
        tituloFoto.src = "/img/cards/" + juego.id + ".jpg";
       // cabecera.style.backgroundImage = "url('/imgProductos/' + juego.id + '/cabecera.jpg' )";
        foto1.src = "/imgProductos/" + juego.id + "/1.jpg"
        foto2.src = "/imgProductos/" + juego.id + "/2.jpg"
        foto3.src = "/imgProductos/" + juego.id + "/3.jpg"
        foto4.src = "/imgProductos/" + juego.id + "/4.jpg"
        foto5.src = "/imgProductos/" + juego.id + "/5.jpg"
      }
    });
  
  
    
  });
