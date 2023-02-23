function leerJSON(){
    fetch("productos.json")
        .then(res => res.json()) // Transforma la respuesta en un objeto json 
        .then((data) => {
            console.log(data)
        }); 
}

function cartasProductos(){
    fetch("productos.json")
        .then(res => res.json()) // Transforma la respuesta en un objeto json 
        .then((data) => {
            let html = '';
            data.forEach(element => {
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
            document.getElementById('productos').innerHTML = html;

        }); 
}

cartasProductos();





