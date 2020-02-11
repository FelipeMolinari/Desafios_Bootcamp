export function removeFromCart(id) {
  return { type: "@cart/Remove", id };
}

export function addToCartRequest(id) {
  return { type: "@cart/Add_Request", id };
}
export function addToCartSuccess(product) {
  return { type: "@cart/Add_Success", product };
}

export function updateCartAmount(id, amount) {
  return { type: "@cart/Update_amount", id, amount };
}
