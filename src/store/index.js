import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { userPhonesSlice } from "./slices/userPhonesSlice";
import { adminPhones } from "./slices/adminPhonesSlice";
import { addPhonesSlice } from "./slices/addPhonesSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        userPhones: userPhonesSlice.reducer,
        adminPhones: adminPhones.reducer,
        addPhone: addPhonesSlice.reducer
    }
})
