import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          thumbnail: newItem.thumbnail,
          category: newItem.category,
          quantity: 1,
          totalPrice: newItem.price
        });
        state.totalQuantity++;
        state.totalAmount += newItem.price;
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        if (type === 'increase') {
          existingItem.quantity++;
          existingItem.totalPrice += existingItem.price;
          state.totalQuantity++;
          state.totalAmount += existingItem.price;
        } else if (type === 'decrease' && existingItem.quantity > 1) {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
          state.totalQuantity--;
          state.totalAmount -= existingItem.price;
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
