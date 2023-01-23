async function mostrarStock() {
  const response = await fetch("./carrito/stockProductos.json");
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
