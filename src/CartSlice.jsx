import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    //payload should be an object with name, image, description, cost
    addItem: (state, action) => {
        const newItem = action.payload;
        const foundItem = state.items.find(item => item.name === newItem.name);
        if(foundItem){
            foundItem.quantity += 1;
        }
        else{
            state.items.push( { ...newItem, quantity: 1});
        }
    },

    //payload should be an object with name
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    //payload should be an object with name and quantity
    updateQuantity: (state, action) => {
        const foundItem = state.items.find(item => (item.name === action.payload.name));
        if (foundItem) {
            foundItem.quantity = action.payload.quantity;
        }
    },

  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
