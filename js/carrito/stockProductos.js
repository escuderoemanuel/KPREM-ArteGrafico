// Main - Cuerpo del sitio
let mainProductos = document.getElementById("mainProductos");

// Stock de productos
let stockRemeras = [];

// Voy creando productos de clase Producto y pusheando directamente al arra stockRemeras[]
//Tener en cuenta que las rutas deben ser como si estuviera parado en el index.html
stockRemeras.push(
  new Producto(
    stockRemeras.length + 1,
    "Reme GN´R",
    "talle", // ARREGLAR ESTO!
    3500,
    "assets/productos/remera/guns.png"
  )
);
stockRemeras.push(
  new Producto(
    stockRemeras.length + 1,
    "Reme LedZep",
    "talle",
    3500,
    "assets/productos/remera/ledzep.png"
  )
);
stockRemeras.push(
  new Producto(
    stockRemeras.length + 1,
    "Reme Dignity",
    "talle",
    3200,
    "assets/productos/remera/simpsons.png"
  )
);
stockRemeras.push(
  new Producto(
    stockRemeras.length + 1,
    "Reme Hellfire",
    "talle",
    3200,
    "assets/productos/remera/hellfire.png"
  )
);
stockRemeras.push(
  new Producto(
    stockRemeras.length + 1,
    "Reme Pink Floyd",
    "talle",
    3500,
    "assets/productos/remera/pinkfloyd.png"
  )
);

//Por cada elemento pusheado al array "stock", crea un div y le inserta sus elementos HTML correspondientes
stockRemeras.forEach((producto) => {
  let div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
  <img class="productoItem remera" src=${producto.img} alt= "Foto Remera">
  <h2 class="h2">${producto.nombre}</h2>
  <div>
  <label>Talle: </label>
  <select name="talle" id="talle "class="talle"> ${producto.talle}
  <option value="S"> S </option>
  <option value="M"> M </option>
  <option value="L"> L </option>
  <option value="XL"> XL </option>
  <option value="XXL"> XXL </option>
  </select>
  </div>
  <p class="priceProduct">Precio: $ ${producto.precio}</p>
  <button id="btnAgregar" class="btnAgregar" onClick="agregarAlCarrito(${producto.id})"  >Agregar<i class="fa-solid fa-cart-plus"></i></button> 
  `;

  //Appendeo cada "div" al elemento "mainProductos" del Document
  mainProductos.append(div);
});

// Guarda el Array stockRemeras en el LS
const guardarStockRemerasLS = (stockRemeras) => {
  localStorage.setItem("stockRemeras", JSON.stringify(stockRemeras));
};

// Parsea el contenido de stockRemeras del LS
const cargarStockRemerasLS = () => {
  return JSON.parse(localStorage.getItem("stockRemeras")) || [];
};

guardarStockRemerasLS(stockRemeras);
