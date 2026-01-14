export const addToCart = (cart, itemToAdd, availableStock) => {
    const existingItemIndex = cart.findIndex((item) =>
         item.productId === itemToAdd.productId && item.variant === itemToAdd.variant
);

if(existingItemIndex === -1) {
    const allowedQty =Math.min(itemToAdd.quantity, availableStock);
    return [...cart, {...itemToAdd, quantity:allowedQty}];
}

const existingItem = cart[existingItemIndex];
const newQty = Math.min(existingItem.quantity+itemToAdd.quantity, availableStock);

const updatedCart = [...cart];
updatedCart[existingItemIndex] = {...existingItem, quantity:newQty};
return updatedCart;
}

export const removeFromCart = (cart, productId, variant) => {
  return cart.filter(
    (item) => !(item.productId === productId && item.variant === variant)
  );
};

export const updateCart = (cart, productId, variant, quantity, availableStock) => {
  const allowedQty = Math.max(1, Math.min(quantity, availableStock));

  return cart.map((item) => {
    if (item.productId === productId && item.variant === variant) {
      return { ...item, quantity: allowedQty };
    }
    return item;
  });
};

export const cartCount = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

// export const cartCount = (cart) => {
//   let total = 0;

//   for (let item of cart) {
//     total = total + item.quantity;
//   }

//   return total;
// };

export const cartPrice = (cart) => {
  return cart.reduce((total, item) => total + item.pricePerUnit * item.quantity, 0);
};

// export const cartPrice = (cart) => {
//   let total = 0;

//   for (let item of cart) {
//     total = total + item.pricePerUnit * item.quantity;
//   }

//   return total;
// };