// CLASE PRODUCT
class Product {
  constructor(id, name, stock, price) {
    this.id = parseInt(id);
    this.name = name;
    this.stock = parseInt(stock);
    this.price = parseFloat(price);
    this.taxes = 21;
    this.discount = 10;
  }
  taxesApply() {
    this.price + (this.price * this.taxes) / 100;
  }
  discountApply() {
    this.price - (this.price * this.discount) / 100;
  }
}

//ARRAY OF PRODUCTS STOCK
let products = [];
products.push(new Product(1, "REMERA GNR", 4, 3500));
products.push(new Product(2, "REMERA LED ZEP", 3, 3500));
products.push(new Product(3, "REMERA AC DC", 5, 3500));
products.push(new Product(4, "REMERA PINK FLOYD", 1, 3500));
products.push(new Product(5, "REMERA DEEP PURPLE", 6, 3500));

//ARRAY OF PRODUCTS IN CART
const productsCart = [];

//PROGRAMA PRINCIPAL (CARGAR, COMPRAR, SALIR)
function program() {
  let optionLoadBuy = parseInt(
    prompt(
      `🔹Opciones🔹 \n\n📝 1• Cargar Productos \n🛒 2• Comprar\n🔻 3• Salir `
    )
  );
  while (optionLoadBuy != 1 && optionLoadBuy != 2 && optionLoadBuy != 3) {
    optionLoadBuy = parseInt(
      prompt(
        `🔹Opciones🔹 \n\n📝 1• Cargar Productos \n🛒 2• Comprar\n🔻 3• Salir `
      )
    );
  }
  if (optionLoadBuy == 1) {
    productsLoad();
    program();
  } else if (optionLoadBuy == 2) {
    productsBuy();
  } else if (optionLoadBuy == 3) {
    alert("⏱️ Arrivederci...");
  }
}

//FUNCION CARGAR PRODUCTO A MANO AL ARRAY STOCK
function productsLoad() {
  let id = products.length + 1;
  let name = prompt("➡️ Ingresa el Nombre del producto:").toUpperCase();
  while (name == null || name.length <= 1) {
    name = prompt("➡️ Ingresa el Nombre del producto:").toUpperCase();
  }
  let stock = parseInt(prompt("🔢 Ingresa el Stock del producto:"));
  while (!Number.isInteger(stock)) {
    stock = parseInt(prompt("🔢 Ingresa el Stock del producto:"));
  }
  let price = parseFloat(prompt("💵 Ingresa el Precio (AR$) del producto:"));
  while (isNaN(price)) {
    price = parseFloat(prompt("💵 Ingresa el Precio (AR$) del producto:"));
  }
  //FUNCIÓN IIFE QUE CREA NUEVO PRODUCTO
  (function newProduct() {
    products.push(new Product(id, name, stock, price));
  })();
}

//Busca si el item está en la listProducts
function foundProduct(id) {
  return products.find((item) => item.id === id) || null;
}

//Pushea el producto al array carrito
function addProduct(product) {
  productsCart.push(product);
}

//Elimina producto del array carrito
function spliceProduct(id) {
  let pos = productsCart.findIndex((item) => item.id === id);
  if (pos > -1) {
    productsCart.splice(pos, 1);
  }
}

//Función para iterar sobre todos los productos
function iterateProducts() {
  let productContainer = "";
  for (let product of products) {
    productContainer += `${product.id} ➡️ ${product.name}, AR$ ${product.price}\n`;
  }
  return productContainer;
}

//Función para iterar sobre los productos del carrito
function iterateProductsCart() {
  let productContainer = "";
  for (let product of productsCart) {
    productContainer += `${product.id} ➡️ ${product.name}, AR$ ${product.price}\n`;
  }
  return productContainer;
}

//Agrega productos al carrito
function productsBuy() {
  let add = true;
  while (add) {
    let productContainer = iterateProducts();
    let itemSelected = parseInt(
      prompt(
        `🛒🛍️ PRODUCTOS EN STOCK 🛍️🛒\n${productContainer} \nElige un producto para agregar al carrito:`
      )
    );
    let product = foundProduct(itemSelected);
    if (product != null) {
      addProduct(product);
    } else {
      alert("No existe el producto seleccionado!");
    }
    add = confirm("Desea agregar otro producto?"); //Devuelve true o false
    if (add == false) {
      let option = parseInt(
        prompt(
          `Opciones:\n\n1 ❎ Eliminar Producto del Carrito\n2 🛒 Terminar la Compra`
        )
      );
      if (option === 1) {
        deleteProduct();
      } else if (option === 2) {
        showCart();
      } else {
        alert("ERROR");
      }
    }
  }
}

//Elimina productos del carrito
function deleteProduct() {
  let del = true;
  while (del) {
    let productContainer = iterateProductsCart();
    let itemSelected = parseInt(
      prompt(
        `Productos:\n\n${productContainer}\n\nSeleccione el producto a eliminar`
      )
    );
    //let product = foundProduct(itemSelected);
    if (itemSelected > 0 && itemSelected <= productsCart.length) {
      spliceProduct(itemSelected);
    } else {
      alert("No existe el producto seleccionado");
    }
    del = confirm("¿Desea eliminar otro producto?");
    if (del === false) {
      showCart();
    }
  }
}

//Muestra el total
function showCart() {
  let total = 0;
  let productContainer = "";

  for (let product of productsCart) {
    productContainer += `${product.id} ➡️ ${product.name}, AR$${product.price}\n`;
    total += product.price;
  }
  alert(
    `🛍️ Productos en el carrito 🛍️\n\n${productContainer}\nTotal a pagar AR$${total} 💵`
  );
}

program();
