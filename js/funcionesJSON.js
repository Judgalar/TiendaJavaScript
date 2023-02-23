function leerJSON(){
    fetch("articulos.json")
        .then(res => res.json()) // Transforma la respuesta en un objeto json 
        .then((data) => {
            console.log(data)
        }); 
}

function cartasProductos(){
    fetch("articulos.json")
        .then(res => res.json()) // Transforma la respuesta en un objeto json 
        .then((data) => {
            let html = '';
            data.forEach(element => {
                html += `
                    <figure>
                        <img src="img/cards/${element.id}.jpg" >
                        <figcaption>
                            <span id="titulo"> ${element.nombre} </span> 
                            <span id="precio"> ${element.precio}€ </span> 
                        </figcaption>
                    </figure>
                `;
            });
            document.getElementById('lista').innerHTML = html;
        }); 
}
cartasProductos();





leerJSON();