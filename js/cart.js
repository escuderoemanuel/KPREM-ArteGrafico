//ARRAY OF PRODUCTS IN CART
const productsCart = [];

//ARRAY OF FINAL ORDER
const order = [];

//PROGRAMA PRINCIPAL
/* function program() {
  let optionLoadBuy;
  do {
    //OPTION DE CARGAR, COMPRAR, SALIR:
    optionLoadBuy = prompt(`🔹Opciones🔹 \n\n📝 1• Cargar Productos \n🛒 2• Comprar\n🔻 3• Salir `).toLowerCase();
    if (optionLoadBuy == "1") {
      productsLoad();
    } else if (optionLoadBuy == "2") {
      productsBuy();
    } else if (optionLoadBuy == "3") {
      alert("⏱️ Saliendo...");
    } else {
      alert("Opción NO Válida!")
    }
  } while (program());
}
 */

//OPTION DE CARGAR, COMPRAR, SALIR:
function program() {
  let optionLoadBuy = prompt(
    `🔹Opciones🔹 \n\n📝 1• Cargar Productos \n🛒 2• Comprar\n🔻 3• Salir `
  ).toLowerCase();

  while (optionLoadBuy != "1" && optionLoadBuy != "2" && optionLoadBuy != "3") {
    optionLoadBuy = prompt(
      `🔹Opciones🔹 \n\n📝 1• Cargar Productos \n🛒 2• Comprar\n🔻 3• Salir `
    ).toLowerCase();
  }
  if (optionLoadBuy == "1") {
    productsLoad();
    program();
  } else if (optionLoadBuy == "2") {
    productsBuy();
    program();
  } else if (optionLoadBuy == "2") {
    alert("⏱️ Saliendo...");
  }
}

//FUNCIONES
function productsLoad() {
  let optionLoad = prompt(
    "Desea cargar un producto? 🤌 \n•Si •No "
  ).toLowerCase();

  //Valida entrada (repregunta o sale)
  while (optionLoad != "no" && optionLoad != "si")
    optionLoad = prompt("Desea cargar un producto?: \n•Si •No ").toLowerCase();

  //Si es "si", pide datos y valida los ingresos
  if (optionLoad == "si") {
    let id = products.length + 1;
    let name = prompt("➡️ Ingresa el Nombre del producto:").toUpperCase();
    while (name == null || name.length <= 1) {
      name = prompt("Ingresa el Nombre del producto:").toUpperCase();
    }

    let stock = parseInt(prompt("Ingresa el Stock del producto:"));
    while (!Number.isInteger(stock)) {
      stock = parseInt(prompt("Ingresa el Stock del producto:"));
    }

    let price = parseFloat(prompt("Ingresa el Precio (AR$) del producto:"));
    while (isNaN(price)) {
      price = parseFloat(prompt("Ingresa el Precio (AR$) del producto:"));
    }

    //FUNCIÓN IIFE QUE CREA NUEVO PRODUCTO
    (function newProduct() {
      products.push(new Product(id, name, stock, price));
    })();

    productsLoad();
    //Si es "no", sale de la función "productLoad"
  } else {
    alert("Hasta la vista! 👋");
  }
}

function productsBuy() {
  let addProduct = true;
  while (addProduct) {
    let listProducts = [];
    for (let product of products) {
      listProducts += `${product.id}- ${product.name}, $AR ${product.price}\n`;
    }
    let itemSelected = parseInt(
      prompt(
        `🛒🛍️ PRODUCTOS EN STOCK 🛍️🛒\n\n${listProducts} \nElige un producto para agregar al carrito:`
      )
    );
    let product = foundProduct(itemSelected);
    if (product != null) {
      productsCart.push(product);
    } else {
      alert("No existe el producto seleccionado!");
    }
    addProduct = confirm("Desea agregar otro producto?"); //Devuelve true o false
    if (addProduct == false) {
      console.log(productsCart);
      showCart();
    }
    /* while (product == null) {
      productsBuy();
    } 
    addProduct = prompt("Cargar otro producto?\n\n•Si •No").toLowerCase();
    while (addProduct != "si" && addProduct != "no") {
      addProduct = prompt("Cargar otro producto?\n\n•Si •No").toLowerCase();
    }
    if (addProduct == "si") {
      itemSelected = parseInt(
        prompt(
          `🛒🛍️ PRODUCTOS EN STOCK 🛍️🛒\n\n${listProducts} \nElige un producto para agregar al carrito:` 
        )
      );
      
      
    } else if (addProduct == "no") {
      showCart();
    } */

    //Si está tengo que pushear el item seleccionado al productsCart
  }
  // Falta Mostrar los Productos Cargados al dar en Cancelar o "NO Cargar más productos"
  // Hacer el cálculo del total de los productos y mostrarlos en alert o confirm
}

let listProductsCart = [];
function showCart() {
  for (let product of productsCart) {
    listProductsCart += `${product.id}- ${product.name}, $AR ${product.price}\n`;
  }
  let confirmOrDelete = parseInt(
    prompt(
      `🛒🛍️ PRODUCTOS EN EL CARRITO 🛍️🛒\n\n${listProductsCart} \n•1: Terminar Compra\n•2: Eliminar Producto`
    )
  );
  while (confirmOrDelete != 1 && confirmOrDelete != 2) {
    confirmOrDelete;
  }
  if (confirmOrDelete == 1) {
    toPay();
    //toPay();
  } else {
    //alert("Mostrando elementos a borrar...");
    deleteProduct(product);
  }
}

function toPay() {
  let finalPrice = 0;
  for (let product of productsCart) {
    finalPrice += product.price;
  }
  alert(
    `🛍️ Productos 🛍️\n\n${listProductsCart}\nTOTAL A PAGAR AR$${finalPrice}`
  );
}

function deleteProduct(id) {
  let productToDelete = parseInt(
    prompt(`Seleccione el producto que desea eliminar:\n\n${listProductsCart}`)
  );
  productToDelete = listProductsCart.findIndex((item) => item.id === id);
  if (productToDelete > -1) {
    listProductsCart.slice(productToDelete, 1);
  }
  showCart();
}

//Tengo que buscar si el item está en la listProducts
function foundProduct(id) {
  return products.find((item) => item.id === id) || null;
}

productsBuy();
//program();

/* function eliminarProducto(id) {
  let pos = productos_carrito.findIndex((item) => item.id === id);

  if (pos > -1) {
    productos_carrito.splice(pos, 1);
  }
} */

/* FUNCIONA

function productsBuy() {
  cargarProducto = true;
  let listProducts = [];
  while (cargarProducto) {
    for (let product of products) {
      listProducts += `${product.id}- ${product.name}, $AR ${product.price}\n`;
    }
    let itemSelected = parseInt(
      prompt(
        `🛒🛍️ PRODUCTOS EN STOCK 🛍️🛒\n\n${listProducts} \nElige un producto para agregar al carrito:`
      )
    );
    let producto = buscarProducto(itemSelected);
    cargarProducto = confirm("Cargar otro producto?");
    console.log(`Item Selected= ${itemSelected}`);
    console.log(producto);
  }

  //Tengo que buscar si el item está en la listProducts

  //Si está tengo que pushear el item seleccionado al productsCart
  //productsCart.push(itemSelected);
}

function buscarProducto(id) {
  return products.find((item) => item.id === id) || null;
}

*/
