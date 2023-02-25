import{cartasProductos} from "./funcionesJSON.js";
import{filtrarProductosPorCategoriaYtendencias} from "./funcionesJSON.js";

cartasProductos('tendenciasItems');  //NECESITA FILTRADO

function filtrarProductos() {
  const categoria = document.getElementById("categorias").value;
  const enTendencia = document.getElementById("tendencia").checked;
  filtrarProductosPorCategoriaYtendencias(categoria, enTendencia);
}

