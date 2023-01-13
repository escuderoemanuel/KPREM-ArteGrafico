// Clase para los Items que voy a agregar al CARRITO

class Item {
  producto;
  cantidad;

  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }

  precioTotal() {
    return this.cantidad * this.producto.precio;
  }
}
