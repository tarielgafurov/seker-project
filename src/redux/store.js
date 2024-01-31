import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './features/auth/authSlice'
import orderReducer from './features/orderSlice/orderSlice'
import productSlice from './features/productSlice/productSlice'
import postProductSlice from './features/post/productSlice'
import getProdukSlice from './features/userpageGet/userPageGet'
import postHeartProductSlice from './features/post/heartPostSlice'
export const store = configureStore({
	reducer: {
		auth: authReducer,
		products: productSlice,
		orders: orderReducer,
		post: postProductSlice,
		getuser: getProdukSlice,
		heartpost: postHeartProductSlice,
	},
})
