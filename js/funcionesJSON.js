//JUANDIEGO

function leerJSON(){
    fetch("productos.json")
        .then(res => res.json()) // Transforma la respuesta en un objeto json
        .then((data) => {
            console.log(data)
        }); 
}

function cartasProductos(idContenedor){
    fetch("productos.json")
        .then(res => res.json())
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
            document.getElementById(idContenedor).innerHTML = html;

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
    
export{cartasProductos,devolverItems}









