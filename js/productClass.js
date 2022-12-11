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
