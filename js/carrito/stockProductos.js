// Main - Cuerpo del sitio
let mainProductos = document.getElementById("mainProductos");

//Precios Predefinidos
const precioTaza = 3200;
const precioGorra = 2650;
const precioGorro = 1750;
const precioJarro = 2120;

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
  {
    id: 4,
    nombre: "Gorra Hendrix",
    stock: 2,
    precio: precioGorra,
    img: "assets/productos/gorras/gorraHendrix.png",
  },
  {
    id: 5,
    nombre: "Gorra RHCP",
    stock: 2,
    precio: precioGorra,
    img: "assets/productos/gorras/gorraOff.png",
  },
  {
    id: 6,
    nombre: "Gorra Pacman",
    stock: 2,
    precio: precioGorra,
    img: "assets/productos/gorras/gorraPacman.png",
  },
  {
    id: 7,
    nombre: "Gorra Punisher",
    stock: 2,
    precio: precioGorra,
    img: "assets/productos/gorras/gorraPunisher.png",
  },
  {
    id: 8,
    nombre: "Gorra AC DC",
    stock: 2,
    precio: precioGorra,
    img: "assets/productos/gorros/gorroAcDc.png",
  },
  {
    id: 9,
    nombre: "Gorro Argentina",
    stock: 2,
    precio: precioGorro,
    img: "assets/productos/gorros/gorroArgentina.png",
  },
  {
    id: 10,
    nombre: "Gorro Guns'n Roses",
    stock: 2,
    precio: precioGorro,
    img: "assets/productos/gorros/gorroGuns.png",
  },
  {
    id: 11,
    nombre: "Gorro Nirvana",
    stock: 2,
    precio: precioGorro,
    img: "assets/productos/gorros/gorroNirvana.png",
  },
  {
    id: 12,
    nombre: "Gorro River Plate",
    stock: 2,
    precio: precioGorro,
    img: "assets/productos/gorros/gorroRiver.png",
  },
  {
    id: 13,
    nombre: "Gorro Running",
    stock: 2,
    precio: precioGorro,
    img: "assets/productos/gorros/gorroRunning.png",
  },
  {
    id: 14,
    nombre: "Jarro Buenos Días",
    stock: 3,
    precio: precioJarro,
    img: "assets/productos/jarros/jarroBuenosDias.png",
  },
  {
    id: 15,
    nombre: "Jarro Café",
    stock: 2,
    precio: precioJarro,
    img: "assets/productos/jarros/jarroCafe.png",
  },
  {
    id: 16,
    nombre: "Jarro First Coffee",
    stock: 1,
    precio: precioJarro,
    img: "assets/productos/jarros/jarroFirstCoffee.png",
  },
];

// Guarda el Array stockProductos en el LS
const guardarStockProductosLS = (stockProductos) => {
  localStorage.setItem("stockProductos", JSON.stringify(stockProductos));
};

// Parsea el contenido de stockProductos del LS
const cargarStockProductosLS = () => {
  return JSON.parse(localStorage.getItem("stockProductos")) || [];
};

guardarStockProductosLS(stockProductos);

//Lee el JSON con el stock y lo renderiza para mostrarlo en el main
async function mostrarStock() {
  const response = await fetch("./js/carrito/stockProductos.json");
  const data = await response.json();

  data.forEach((producto) => {
    let div = document.createElement("div");
    div.className = "producto";
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
}

mostrarStock();
