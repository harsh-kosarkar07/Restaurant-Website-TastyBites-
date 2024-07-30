import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
      addItem: (state, action) =>{
        state.push(action.payload);
      },
        // increment: (state) => {    
        // state + 1
        // },
        // decrement: (state) => {
        // state - 1
        // },
        
  },
})

// export const { increment, decrement } = cartSlice.actions
export const { addItem } = cartSlice.actions


export default cartSlice.reducer