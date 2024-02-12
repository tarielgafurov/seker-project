import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { userPhonesSlice } from "./slices/userPhones.slice";
import { adminPhones } from "./slices/adminPhonesSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        userPhones: userPhonesSlice.reducer,
        adminPhones: adminPhones.reducer
    }
})
