import { createSlice } from "@reduxjs/toolkit";

 
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingRestaurant = state.items.find((item) => item[0].id === action.payload[0].id);
            if (existingRestaurant) {
                const existingItem = existingRestaurant[1].find((item) => item.id === action.payload[1][0].id);
                if (existingItem) {
                    existingItem.quantity++;
                    return;
                }
                action.payload[1][0].quantity = 1;
                existingRestaurant[1].push(action.payload[1][0]);
                return;
            }
            else{
                action.payload[1][0].quantity = 1;
            }
            state.items = [...state.items, action.payload];
        },
        removeFromCart: (state, action) => {
            const existingRestaurant = state.items.find((item) => item[0].id === action.payload[0].id);
            if (existingRestaurant) {
                const existingItem = existingRestaurant[1].find((item) => item.id === action.payload[1][0].id);
                if (existingItem) {
                    if (existingItem.quantity > 1) {
                        existingItem.quantity--;
                    }
                    else if (existingItem.quantity === 1) {
                        existingRestaurant[1] = existingRestaurant[1].filter((item) => item.id !== action.payload[1][0].id);
                    }
                }
                if (existingRestaurant[1].length === 0) {
                    const filteredItems = state.items.filter((item) => item[0].id !== action.payload[0].id);
                    state.items = [...filteredItems];
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;