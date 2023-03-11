//JUANDIEGO

function leerJSON(){
    fetch("productos.json")
        .then(res => res.json()) // Transforma la respuesta en un objeto json
        .then((data) => {
            console.log(data)
        }); 
}

function devolverItems(idContenedor,index, limite) {    // Para paginacion
    fetch("productos.json")
    .then(res =>  res.json())
    .then(data => {
        let html = '';
        for(let i=0;i<limite;i++,index++){
            let element = data[index];
            if(element!=null){
                html += `
                        <figure>
                            <a href="/paginasProductos/${element.id}/producto.html"> <img src="img/cards/${element.id}.jpg" width="400px"> </a>
                            <figcaption>
                                <span id="titulo"> ${element.nombre} </span> 
                                <span id="precio"> ${element.precio}€ </span> 
                            </figcaption>
                        </figure>
                    `;
            }
        }
            document.getElementById(idContenedor).innerHTML = html;
    });
}



/*
function filtrarProductosPorCategoriaYtendencias(categoria, enTendencia) { //"categoria" es la categoría por la cual se quiere filtrar y "enTendencia" es un booleano que dice si se quieren ver solo productos en tendencia o no.
    fetch("productos.json")
      .then(res => res.json())
      .then((data) => {
        let html = '';
        data.filter((producto) => {
          return producto.categoria === categoria && producto.tendencia === enTendencia;
        })
        .forEach(element => {
          html += `
            <figure>
              <a href="/paginasProductos/${element.id}/producto.html"> <img src="img/cards/${element.id}.jpg" width="400px"> </a>
              <figcaption>
                <span id="titulo"> ${element.nombre} </span> 
                <span id="precio"> ${element.precio}€ </span> 
              </figcaption>
            </figure>
          `;
        });
        document.getElementById(idContenedor).innerHTML = html;
      }); 
  }


  function ordenarProducto(idContenedor, index, limite, ordenarPor) {    // Para paginacion y ordenacion
    fetch("productos.json")
    .then(res =>  res.json())
    .then(data => {
        // Ordenar los datos según el criterio seleccionado
        switch(ordenarPor) {
            case 'precio':
                data.sort((a, b) => a.precio - b.precio);
                break;
            case 'nombre':
                data.sort((a, b) => a.nombre.localeCompare(b.nombre));
                break;
            case 'ventas':
                data.sort((a, b) => b.ventas - a.ventas);
                break;
            case 'valoracion':
                data.sort((a, b) => b.valoracion - a.valoracion);
                break;

        //En el caso de 'precio', se ordena por el precio ascendente, en el caso de 'nombre', se ordena por el nombre alfabéticamente, en el caso de 'ventas', se ordena por el número de ventas descendente, y en el caso de 'valoracion', se ordena por la valoración descendente.
        }
        
        let html = '';
        for(let i=0;i<limite;i++,index++){
            let element = data[index];
            if(element!=null){
                html += `
                        <figure>
                            <a href="/paginasProductos/${element.id}/producto.html"> <img src="img/cards/${element.id}.jpg" width="400px"> </a>
                            <figcaption>
                                <span id="titulo"> ${element.nombre} </span> 
                                <span id="precio"> ${element.precio}€ </span> 
                            </figcaption>
                        </figure>
                    `;
            }
        }
            document.getElementById(idContenedor).innerHTML = html;
    });
}



function busqueda(idContenedor, index, limite, ordenarPor, busqueda) {    // Para paginacion, ordenacion y búsqueda
    fetch("productos.json")
    .then(res =>  res.json())
    .then(data => {
        // Filtrar los datos según la búsqueda
        if (busqueda) {
            data = data.filter(element =>
                element.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                element.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
                element.descripcion.toLowerCase().includes(busqueda.toLowerCase())
            );
        }

        // Ordenar los datos según el criterio seleccionado
        switch(ordenarPor) {
            case 'precio':
                data.sort((a, b) => a.precio - b.precio);
                break;
            case 'nombre':
                data.sort((a, b) => a.nombre.localeCompare(b.nombre));
                break;
            case 'ventas':
                data.sort((a, b) => b.ventas - a.ventas);
                break;
            case 'valoracion':
                data.sort((a, b) => b.valoracion - a.valoracion);
                break;
        }
        
        let html = '';
        for(let i=0;i<limite;i++,index++){
            let element = data[index];
            if(element!=null){
                html += `
                        <figure>
                            <a href="/paginasProductos/${element.id}/producto.html"> <img src="img/cards/${element.id}.jpg" width="400px"> </a>
                            <figcaption>
                                <span id="titulo"> ${element.nombre} </span> 
                                <span id="precio"> ${element.precio}€ </span> 
                            </figcaption>
                        </figure>
                    `;
            }
        }
            document.getElementById(idContenedor).innerHTML = html;
    });
}


*/




    
export{cartasProductos,devolverItems}



  



