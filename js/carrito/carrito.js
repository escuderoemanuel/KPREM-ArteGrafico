// Array de Carrito
const carrito = [];

// Elementos del DOM
const mainCarrito = document.getElementById("mainCarrito");
const tablaCarrito = document.getElementById("tablaCarrito");
const tabla = document.getElementById("tabla");
const icoClose = document.getElementById("icoClose");

// Abrir Ventana Carrito
const btnCarrito = document.getElementById("btnCarrito");
btnCarrito.addEventListener("click", (e) => {
  e.preventDefault();
  mainCarrito.classList.add("active");
  mostrarCarrito();
});

// Cerrar Ventana Carrito con Icono x
icoClose.addEventListener("click", function (e) {
  e.preventDefault();
  mainCarrito.classList.remove("active");
  e.stopPropagation(); //Evita el burbujeo (propagación)
});

// Guardar Producto en el Local Storage
const guardarProductosCarrito = (productos) => {
  localStorage.setItem("carrito", JSON.stringify(productos));
};

// Cargar Al Carrito los Productos que Están en el Local Storage
const cargarProductosCarrito = () => {
  return JSON.parse(localStorage.getItem("carrito")) || [];
};

// Agregar producto al Carrito
const agregarAlCarrito = (id) => {
  const productos = cargarStockRemerasLS();
  const productoCarrito = cargarProductosCarrito();
  const producto = productos.find((item) => item.id === id);
  productoCarrito.push(producto);
  guardarProductosCarrito(productoCarrito);
  contadorBurbujaCarrito();
};

// Eliminar Producto del Carrito
const eliminarProducto = (id) => {
  const productoCarrito = cargarProductosCarrito();
  const producto = productoCarrito.filter((item) => item.id !== id);
  guardarProductosCarrito(producto);
  mostrarCarrito();
  contadorBurbujaCarrito();
};

// Vaciar Carrito
const vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  contadorBurbujaCarrito();
  mostrarCarrito();
};

// Finalizar Compra
const finalizarCompra = () => {
  localStorage.removeItem("carrito");
  contadorBurbujaCarrito();
  mostrarCarrito();
  mainCarrito.classList.remove("active");
  Swal.fire({
    icon: "success",
    iconColor: " rgba(173, 255, 47, 1)",
    title: "¡Felicitaciones!",
    text: "¡Tu compra fue procesada exitosamente!",
    confirmButtonColor: "black",
    confirmButtonColor: "#3085d6",
  });
};

// Cantidad de Productos en el Carrito
const cantidadProductosCarrito = () => {
  const productoCarrito = cargarProductosCarrito();
  return productoCarrito.length;
};

// Sumar Importe Carrito
/* const sumarImporteCarrito = () => {
  const productoCarrito = cargarProductosCarrito();
  return productoCarrito.reduce(
    (total, item) => ((total += item.cantidad * item.producto.precio), 0)
  );
}; */

// Sumar Importe Carrito
const sumarImporteCarrito = () => {
  const productoCarrito = cargarProductosCarrito();
  console.log(productoCarrito);
  return productoCarrito.reduce(
    (total, item) => (total += item.cantidad * item.producto),
    0
  );
};

// Actualiza el número de productos que muestra la burbuja del Carrito
const contadorBurbujaCarrito = () => {
  let salida = `
      <img class="carritoIcon" src="assets/icon/carrito.png"
      alt="Imagen de carrito" />
      <span class="cantidadProductosCarritoIcon" id="cantidadProductosCarritoIcon">${cantidadProductosCarrito()}</span>
  `;
  btnCarrito.innerHTML = salida;
};
contadorBurbujaCarrito();

// Agregar al Carrito
const mostrarCarrito = () => {
  const productoCarrito = cargarProductosCarrito();
  let salida = " ";

  if (cantidadProductosCarrito() === 0) {
    mainCarrito.classList.remove("active");
    Swal.fire({
      icon: "error",
      title: "Tu Carrito Está Vacío",
      confirmButtonColor: "rgb(221, 51, 51",
    });
  } else {
    salida = `<div class="ventanaCarrito">
    <h4>Productos en el Carrito</h4>
    <table class="tabla">
  <tbody>`;

    for (producto of productoCarrito) {
      salida += `
    <tr>
    <td>
    <img width="24" src=${producto.img} alt=${producto.nombre}>
    </td>
    <td>${producto.nombre}</td>
    <td>${producto.cantidad}</td>
    <td>$${producto.precio}</td>
    <td>Total $${producto.precio} * ${producto.cantidad}</td>

    <td>
    <i onClick="eliminarProducto(${producto.id})" id="eliminarProducto" class="btn eliminarProducto fa-solid fa-trash-can"></i>
    </td>
    </tr>
    `;
    }
    salida += `
  </tbody>
  </table>

  <p class="sumaTotal">Suma Total $${sumarImporteCarrito()}</p>

  <button onClick="vaciarCarrito(${carrito})" id="btnVaciarCarrito" class="btn btnVaciarCarrito">
  Vaciar Carrito
  <i class="fa-solid fa-trash-can"></i>
  </button>
  
  <button onClick="finalizarCompra()" id="finalizarCompra" class="btn finalizarCompra">
  Finalizar Compra
  <i class="fa-solid fa-money-check-dollar"></i>
  </button>
  
  </div>
  
`;
  }
  tabla.innerHTML = salida;
};
