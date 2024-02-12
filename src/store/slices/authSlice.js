import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchApi } from "../../api/fetchData"


const initialState={
    isAuth: false,
    token: "",
    isLoading: false,
    message: ""
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        pending(state){
            state.isLoading = true
        },
        fullfiled(state,action){
            console.log(action);
            state.token  = action.payload.access
            state.isAuth = true
            state.isLoading = false
        },
        rejected(state,action){
            console.log(action);
            state.token  = ""
            state.isAuth = false
            state.isLoading = false
            state.message = "неверний пароль и email"
        },
        deletePrevState(state){
            state.message = ""
        }
    }
})


export const authRequest = createAsyncThunk(
    "auth",
    async (param, {dispatch})=>{
        dispatch(authSlice.actions.pending())
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
            dispatch(authSlice.actions.rejected())
        }
    }
)