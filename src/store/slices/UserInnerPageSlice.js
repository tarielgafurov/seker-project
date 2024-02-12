import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    phone: {},
    spinner: false
}


const UserInnerPageSlice = createSlice({
    name: "inner",
    initialState,
    reducers:{
        pendding(state,action){},
        fullfiled(state,action){},
        rejected(state,action){}
    }
})


