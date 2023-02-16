


function leerObj()
{
    fetch('../articulos.json')
  .then(res => res.json()) // el método .json() analiza la respuesta JSON en un objeto literal JS
  .then(data => console.log(data));


}

