import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers: {
        addToCart: (state,action) => {
            const item = action.payload;
            const prevItem = state.items.find((i)=> i._id === item._id);

            if(prevItem){
                prevItem.quantity += 1;
            }else{
                state.items.push({...item, quantity: 1});
            }

        },
        removeFromCart: (state,action) => {
            state.items = state.items.filter((i)=>i._id !== action.payload)
        },
        decreaseQuantity: (state,action) => {
            const item = state.items.find((i)=>i.id === action.payload);
            if(item && item.quantity > 1){
                item.quantity -= 1;
            }else{
                state.items = state.items.filter((i)=> i.id !== action.payload);
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
        updateCartItem: (state, action) => {
            const { _id, quantity } = action.payload;
            const item = state.items.find((i) => i._id === _id);

            if (item) {
                item.quantity = quantity; 
            }
        }
    },
});

export const getCartItemsCount = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const totalPrice = (state) =>
        state.cart.items.reduce((sum, item) => {
            const price = item.promotion?.isActive
            ? item.price - (item.price * item.promotion.discountPercent / 100)
            : item.price;
            return sum + price * item.quantity;
        }, 0);

export const itemTotalPrice = (state, _id) => {
  const item = state.cart.items.find(i => i._id === _id);
  if (!item) return 0;
  const price = item.promotion?.isActive
    ? item.price - (item.price * item.promotion.discountPercent / 100)
    : item.price || 0;
  return price * (item.quantity || 0);
};

export const {addToCart, removeFromCart, decreaseQuantity, clearCart, updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;