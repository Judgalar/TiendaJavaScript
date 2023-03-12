//JUANDIEGO

function leerJSON(){
    fetch("productos.json")
        .then(res => res.json()) // Transforma la respuesta en un objeto json
        .then((productos) => {
            console.log(productos)
        }); 
}

function devolverItemsPaginacion(idContenedor,index, limite,dataProductos) { 
    let html = '';
    for(let i=0;i<limite;i++,index++){
        let element = dataProductos[index];
        if(element!=null){
            html += `
                <figure>
                    <a href="producto.html?id=${element.id}"> <img src="img/cards/${element.id}.jpg" width="400px"> </a>
                    <figcaption>
                        <span id="titulo"> ${element.nombre} </span> 
                        <span id="precio"> ${element.precio}€ </span>
                    </figcaption>
                    <figcaption>
                        <button class="btnTodo" onclick="agregarCarrito('${element.nombre}' , '${element.precio}' )"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg> 
                        </button> 
                    </figcaption>
                </figure>
            `;
        }
    }
    document.getElementById(idContenedor).innerHTML = html;
}



    
export{devolverItemsPaginacion}



  



