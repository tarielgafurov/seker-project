import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchApi } from "../../api/fetchData"


const initialState={
    isAuth: false,
    token: ""
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        fullfiled(state,action){
            console.log(action);
            state.token  = action.payload.access
            state.isAuth = true
        }
    }
})


export const authRequest = createAsyncThunk(
    "auth",
    async (param, {dispatch})=>{
        console.log(param);
        try {
            const userData = await fetchApi({
                url: "token/",
                method: "POST",
                body: param
            })
            if(!userData.ok){
                return
            }
            const data = await userData.json()
            dispatch(authSlice.actions.fullfiled(data))
        } catch (error) {
            
        }
    }
)