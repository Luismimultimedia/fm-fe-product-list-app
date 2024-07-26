import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      value: [],
    },
    reducers: {
      addProductItem: (state, action) => {
        const indexOfProduct = state.value.findIndex(product => product.product.id === action?.payload?.id);
        if (indexOfProduct === -1) {
          state.value.push({ product: action?.payload, quantity: 1});
        } else {
          const {product, quantity} = state.value[indexOfProduct];
          state.value[indexOfProduct] = { product, quantity: quantity + 1};
        }
      },
      removeProductItem: (state, action) => {
        state.value = state.value.map((product) => {
            if (product.product.id === action.payload.id) {
                product.quantity -= 1;
            }
            return product;
        }).filter((product) => product.quantity > 0);
      },
      removeCompleteProductItem: (state, action) => {
        state.value = state.value.filter((product) => product.product.id !== action.payload.id);
      },
    },
  })
  
  export const { addProductItem, removeProductItem, removeCompleteProductItem } = cartSlice.actions
  
  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state) => state.cart.value)`
  export const selectCart = (state) => state.cart.value;

  export const selectCartProductQuantity = (id) => (state) => {
    return state.cart.value.filter((item) => item?.product?.id === id)[0]?.quantity || 0;
  }

  export const selectCartTotalPrice = (state) => {
    const total = state?.cart?.value?.reduce((acc, item) => (acc + (item?.quantity * item?.product?.price)), 0) || 0;
    return parseFloat(total).toFixed(2);
  };
  
  export default cartSlice.reducer
  