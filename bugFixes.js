console.log(hasValidPrice({ product: "Milk", price: 1.5 }));
console.log(hasValidPrice({ product: "Cheese", price: -1 }));
console.log(hasValidPrice({ product: "Eggs", price: 0 }));
console.log(hasValidPrice({ product: "Cereals", price: "3.0" }));
console.log(hasValidPrice());
function hasValidPrice(product) {
  if (product !== undefined) {
    if (typeof product.price !== "string") {
      return product.product && product.price >= 0;
    }
    return false;
  }
  return false;
}
