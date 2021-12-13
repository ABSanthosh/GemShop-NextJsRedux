import { createStore, action } from "easy-peasy";

const store = createStore({
  cart: [],
  addToCart: action((state, payload) => {
    if (state.cart.find((item) => item.id === payload.id)) {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == payload.id) {
          state.cart[i].quantity += 1;
          return;
        } else {
        }
      }
    } else {
      payload.quantity = 1;
      state.cart.push(payload);
    }
  }),
  removeFromCart: action((state, payload) => {
    if (state.cart.find((item) => item.id === payload.id)) {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == payload.id) {
          if (state.cart[i].quantity > 1) {
            state.cart[i].quantity -= 1;
          } else {
            state.cart.splice(i, 1);
          }
          return;
        }
      }
    }
  }),
});

export { store };
