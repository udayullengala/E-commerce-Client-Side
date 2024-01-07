import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const cartData = state?.cartItems
            const itemIndex = cartData.findIndex((curElem) => curElem?.product_data?.id === action?.payload?.product_data?.id)
            console.log(itemIndex, "itemIndex")
            if (itemIndex !== -1) {
                cartData[itemIndex].quantity = Number(cartData[itemIndex].quantity) + Number(action.payload.quantity)

                state.cartItems = cartData
            } else {
                state?.cartItems.push(action.payload)
            }

            
        },
        removeFromCart: (state, action) => {

        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions 

export default cartSlice.reducer