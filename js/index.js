
import {cartasProductos, cartasProductosPromocion} from "./isra.js";

//FETCH DEL INDEX
fetch("productos.json")
.then(res => res.json())
.then((productos) => {
    
cartasProductos('tendenciasItems', productos);
cartasProductosPromocion('promocion', productos);
});

