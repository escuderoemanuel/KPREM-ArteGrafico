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
  const productos = cargarStockProductosLS();
  const productoCarrito = cargarProductosCarrito();

  if (buscarProducto(id)) {
    let index = productoCarrito.findIndex((item) => item.id === id); //Si el id está en el carrito que me devuelva su posición
    if (productoCarrito[index].stock > 0) {
      productoCarrito[index].stock -= 1;
      productoCarrito[index].cantidad += 1;
    }
  } else {
    const producto = productos.find((item) => item.id === id); //Si el id no está en el carrito
    if (producto.stock > 0) {
      producto.cantidad = 1;
      producto.stock -= 1;
      productoCarrito.push(producto);
    }
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
function finalizarCompra() {
  localStorage.removeItem("carrito");
  contadorBurbujaCarrito();
  mainCarrito.classList.remove("active");

  Swal.fire({
    html: "<br><h3>¡Gracias por tu compra!</h3> <br><br> <p>Esperamos verte pronto!</p>",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    confirmButtonColor: "rgba(0, 121, 255, 1)",
    confirmButtonText: "Entendido!",
  });
}

// Cantidad de Productos en el Carrito
const cantidadProductosCarrito = () => {
  const productoCarrito = cargarProductosCarrito();
  return productoCarrito.reduce((total, item) => (total += item.cantidad), 0);
};

// Sumar Importe Carrito
const sumarImporteCarrito = () => {
  const productoCarrito = cargarProductosCarrito();
  return productoCarrito.reduce(
    (total, item) => (total += item.cantidad * item.precio),
    0
  );
};

// Actualiza el número de productos que muestra la burbuja del Carrito
const contadorBurbujaCarrito = () => {
  let salida = `
    <i class="carritoIcon fa-solid fa-cart-shopping">
    <span class="cantidadProductosCarritoIcon" id="cantidadProductosCarritoIcon">${cantidadProductosCarrito()}</span>
    </i>
    
  `;
  btnCarrito.innerHTML = salida;
};
contadorBurbujaCarrito();

// Funciones Botones + y -
function sumarCantidad(id) {
  const productoCarrito = cargarProductosCarrito();
  let index = productoCarrito.findIndex((item) => item.id === id);

  if (productoCarrito[index].stock > 0) {
    productoCarrito[index].cantidad++;
    productoCarrito[index].stock--;
    console.log(productoCarrito[index].stock);
  }
  guardarProductosCarrito(productoCarrito);
  contadorBurbujaCarrito();
  mostrarCarrito();
}

function restarCantidad(id) {
  const productoCarrito = cargarProductosCarrito();
  let index = productoCarrito.findIndex((item) => item.id === id);
  if (productoCarrito[index].cantidad > 1) {
    productoCarrito[index].cantidad -= 1;
    productoCarrito[index].stock++;
    console.log(productoCarrito[index].stock);
  }
  guardarProductosCarrito(productoCarrito);
  contadorBurbujaCarrito();
  mostrarCarrito();
}

// Agregar al Carrito
const mostrarCarrito = () => {
  const productoCarrito = cargarProductosCarrito();
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
    <img class="imgItemCarrito" width="24" src=${producto.img} alt=${
        producto.nombre
      }>
    </td>
    <td>${producto.nombre}</td>
    
    <td>
    <button id="iconRestar"><i onClick="restarCantidad(${
      producto.id
    })" class=" fa-solid fa-minus"></i></button>
    ${producto.cantidad}
    <button id="iconSumar"><i onClick="sumarCantidad(${
      producto.id
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
