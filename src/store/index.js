// import { configureStore, createSlice } from '@reduxjs/toolkit';
//  export  const initialState = {
//   titleValue: '',
//   priceValue: '',
//   haractikValue: '',
//   inputValue: '',
//   isCheckedNew: false,
//   isCheckedUsed: false,
//   errorFields: {
//     title: false,
//     price: false,
//     haractik: false,
//   },
// };

// export const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     updateTitle: (state, action) => {
//       state.titleValue = action.payload;
//     },
//     updatePrice: (state, action) => {
//       state.priceValue = action.payload;
//     },
//     updateHaractik: (state, action) => {
//       state.haractikValue = action.payload;
//     },
//     updateInput: (state, action) => {
//         state.inputValue = action.payload;
//     }
//   },
// });

// export const { updateTitle, updatePrice, updateHaractik,updateInput } = productSlice.actions;

// export const store = configureStore({
//   reducer: productSlice.reducer,
// });
