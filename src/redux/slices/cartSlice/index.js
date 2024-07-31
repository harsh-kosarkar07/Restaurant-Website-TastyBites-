
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state[itemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
      }
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0) {
        state[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        }
      }
    }
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
