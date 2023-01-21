// Main - Cuerpo del sitio
let mainProductos = document.getElementById("mainProductos");

// Precios de Productos
const precioGorra = 2650;
const precioGorro = 1750;
const precioJarro = 2120;
const precioTaza = 3200;

// Stock de productos
let stockProductos = [
  {
    id: 1,
    nombre: "Taza Animales",
    stock: 2,
    precio: precioTaza,
    img: "assets/productos/tazas/tazaAnimales.png",
  },
  {
    id: 2,
    nombre: "Taza Harry Potter",
    stock: 3,
    precio: precioTaza,
    img: "assets/productos/tazas/tazaPotter.png",
  },
  {
    id: 3,
    nombre: "Taza Umbrella Academy",
    stock: 3,
    precio: precioTaza,
    img: "assets/productos/tazas/tazaUmbrellaA.png",
  },
];

// Voy creando productos de clase Producto y pusheando directamente al arra stockProductos[]
// Podría ponerlos directamente dentor del array stockProductos. Esto es para utilizar el pusheo también.
//Tener en cuenta que las rutas deben ser como si estuviera parado en el index.html
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Gorra Hendrix",
    5,
    precioGorra,
    "assets/productos/gorras/gorraHendrix.png"
  )
);
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Gorra RHCP",
    5,
    precioGorra,
    "assets/productos/gorras/gorraOff.png"
  )
);
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Gorra Pacman",
    5,
    precioGorra,
    "assets/productos/gorras/gorraPacman.png"
  )
);
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Gorra Punisher",
    5,
    precioGorra,
    "assets/productos/gorras/gorraPunisher.png"
  )
);
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Gorro AC DC",
    4,
    precioGorro,
    "assets/productos/gorros/gorroAcDc.png"
  )
);
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Gorro Argentina",
    4,
    precioGorro,
    "assets/productos/gorros/gorroArgentina.png"
  )
);
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Gorro Guns",
    3,
    precioGorro,
    "assets/productos/gorros/gorroGuns.png"
  )
);
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Gorro Nirvana",
    3,
    precioGorro,
    "assets/productos/gorros/gorroNirvana.png"
  )
);
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Gorro River",
    5,
    precioGorro,
    "assets/productos/gorros/gorroRiver.png"
  )
);
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Gorro Running",
    4,
    precioGorro,
    "assets/productos/gorros/gorroRunning.png"
  )
);
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Jarro Buenos Días",
    2,
    precioJarro,
    "assets/productos/jarros/jarroBuenosDias.png"
  )
);
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Jarro Café",
    3,
    precioJarro,
    "assets/productos/jarros/jarroCafe.png"
  )
);
stockProductos.push(
  new Producto(
    stockProductos.length + 1,
    "Jarro First Coffee",
    1,
    precioJarro,
    "assets/productos/jarros/jarroFirstCoffee.png"
  )
);

//Por cada elemento pusheado al array "stock", crea un div y le inserta sus elementos HTML correspondientes
stockProductos.forEach((producto) => {
  let div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
  <img class="productoItem productoImg" src=${producto.img} alt= "Foto Producto">
  <div class="textContent">
  <h2 class="nombreText">${producto.nombre}</h2>
  <p class="precioText" id="priceProduct">Precio: $ ${producto.precio}</p>
  </div>
  <button id="btnAgregar" class="btnAgregar" onClick="agregarAlCarrito(${producto.id})"  >Agregar <i class="fa-solid fa-cart-plus"></i></button> 
  `;

  //Appendeo cada "div" al elemento "mainProductos" del Document
  mainProductos.append(div);
});

// Guarda el Array stockProductos en el LS
const guardarStockProductosLS = (stockProductos) => {
  localStorage.setItem("stockProductos", JSON.stringify(stockProductos));
};

// Parsea el contenido de stockProductos del LS
const cargarStockProductosLS = () => {
  return JSON.parse(localStorage.getItem("stockProductos")) || [];
};

guardarStockProductosLS(stockProductos);
