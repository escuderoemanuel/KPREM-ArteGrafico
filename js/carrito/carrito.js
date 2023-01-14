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

// Buscar Producto
const buscarProducto = (id) => {
  const productoCarrito = cargarProductosCarrito();
  return productoCarrito.some((item) => item.id === id);
};

// Agregar producto al Carrito
const agregarAlCarrito = (id) => {
  const productos = cargarStockRemerasLS();
  const productoCarrito = cargarProductosCarrito();

  if (buscarProducto(id)) {
    let index = productoCarrito.findIndex((item) => item.id === id);
    productoCarrito[index].cantidad += 1;
  } else {
    const producto = productos.find((item) => item.id === id);
    producto.cantidad = 1;
    productoCarrito.push(producto);
  }
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
    background: "rgba(255, 255, 255, 0.95)",
    title: "¡Felicitaciones!",
    text: "¡Tu compra fue procesada exitosamente!",
    confirmButtonColor: "rgba(48, 133, 214, 1)",
  });
};

// Cantidad de Productos en el Carrito
const cantidadProductosCarrito = () => {
  const productoCarrito = cargarProductosCarrito();
  return productoCarrito.reduce((total, item) => (total += item.cantidad), 0);
};

// Sumar Importe Carrito
const sumarImporteCarrito = () => {
  const productoCarrito = cargarProductosCarrito();
  console.log(productoCarrito);
  return productoCarrito.reduce(
    (total, item) => (total += item.cantidad * item.precio),
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
  console.log(productoCarrito);
  let salida = " ";

  if (cantidadProductosCarrito() === 0) {
    mainCarrito.classList.remove("active");
    Swal.fire({
      icon: "error",
      background: "rgba(255, 255, 255, 0.9)",
      title: "Tu Carrito Está Vacío",
      confirmButtonColor: "rgba(221, 51, 51, 1)",
    });
  } else {
    salida = `<div class="ventanaCarrito">
  <h4 class="tituloCarrito">Productos en el Carrito</h4>
    <table class="tabla">
  <tbody>`;

    for (let producto of productoCarrito) {
      salida += `
    <tr>
    <td>
    <img width="24" src=${producto.img} alt=${producto.nombre}>
    </td>
    <td>${producto.nombre}</td>
    
    
    <td>
    <button id="iconRestar"><i onClick="restarCantidad(${
      producto.cantidad
    })" class=" fa-solid fa-minus"></i></button>
    ${producto.cantidad}
    <button id="iconSumar"><i onClick="sumarCantidad(${
      producto.cantidad
    })" class="fa-solid fa-plus"></i></button>
    </td>
    
    
    <td>$${producto.precio}</td>
    <td>Total $${producto.precio * producto.cantidad}</td>
    
    <td>
    <i onClick="eliminarProducto(${
      producto.id
    })" id="eliminarProducto" class="btn eliminarProducto fa-solid fa-trash-can"></i>
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
