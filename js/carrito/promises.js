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

    /* let div_hijo1 = document.createElement("div");
    div_hijo1.className = "card-header bg-black text-white";
    let div_hijo2 = document.createElement("div");
    div_hijo2.className = "card-body";
    let parrafo = document.createElement("p");
    div_hijo1.innerText = valor.title;
    parrafo.innerText = valor.body;
    div_hijo2.appendChild(parrafo);
    div_padre.appendChild(div_hijo1);
    div_padre.appendChild(div_hijo2);
    resultado.appendChild(div_padre); */
  });
}

mostrarStock();
