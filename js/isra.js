import { productos } from "../articulos";


//convertimos el json en un archivo js
const obj = JSON.parse(productos);

// Almacenar los objetos en un array
const array = Object.values(obj);

console.log(array);
  // function filterProducts(categoria, stock, precio) {
  //   return products.filter((product) => {
  //     let meetscategoria = true;
  //     let meetsStock = true;
  //     let meetsprecio = true;
  
  //     if (categoria && product.categoria !== categoria) {
  //       meetscategoria = false;
  //     }
  
  //     if (stock && product.stock < stock) {
  //       meetsStock = false;
  //     }
  
  //     if (precio) {
  //       for (const key in precio) {
  //         if (product.precios[key] !== precio[key]) {
  //           meetsprecio = false;
  //           break;
  //         }
  //       }
  //     }
  
  //     return meetscategoria && meetsStock && meetsprecio;
  //   });
  // }
  


  function OrdenarProductos(column) {
    const productTable = document.getElementById("tabla-productos");
    const rows = Array.from(productTable.getElementsByTagName("tr"));
    const headerRow = rows.shift();
    const sortedRows = rows.sort((a, b) => {
      const aValue = a.getElementsByTagName("td")[column].innerText;
      const bValue = b.getElementsByTagName("td")[column].innerText;
  
      if (column === 2 || column === 4) {
        // Parsear los precios y números de ventas para que se ordenen correctamente
        return parseFloat(aValue.slice(1)) - parseFloat(bValue.slice(1));
      } else {
        // Ordenar las cadenas de texto alfabéticamente
        return aValue.localeCompare(bValue);
      }
    });
  
    // Volver a insertar las filas ordenadas en la tabla
    productTable.innerHTML = "";
    productTable.appendChild(headerRow);
    sortedRows.forEach((row) => productTable.appendChild(row));
  }
  