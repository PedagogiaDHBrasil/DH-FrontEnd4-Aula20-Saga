const CLEAR_CART = "CLEAR_CART";
const SAVE_ORDER = "SAVE_ORDER";

export const clearCart = () => ({
  type: CLEAR_CART,
  value: [],
});

export const saveOrder = () => ({
  type: SAVE_ORDER,
});
