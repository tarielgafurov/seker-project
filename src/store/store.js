import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
// import orderReducer from './features/orderSlice/orderSlice'
// import productSlice from './features/productSlice/productSlice'
// import postProductSlice from './features/post/productSlice'
// import getProdukSlice from './features/userpageGet/userPageGet'
// import postHeartProductSlice from './features/post/heartPostSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		// orders: orderReducer,
		// products: productSlice,
		// post: postProductSlice,
		// getuser: getProdukSlice,
		// heartpost: postHeartProductSlice,
	},
})
