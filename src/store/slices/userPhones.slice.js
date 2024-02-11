import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchApi } from "../../api/fetchData";

const initialState = {
    isLodaing: false,
    userPhones: []
}

export const userPhonesSlice = createSlice({
    name: "userPhones",
    initialState,
    reducers: {
        pending(state){
            state.isLodaing = true
        },
        fullfiled(state,action){
            console.log(action);
            state.userPhones = action.payload.results
            state.isLodaing = false
        },
        rejected(state,action){
            state.isLodaing = true
        }
    }
})


export const getRequestUserPagePhones = createAsyncThunk(
    "userPhones",
    async (param, {dispatch})=>{
        console.log(param);
        try {
            dispatch(userPhonesSlice.actions.pending())
            const userData = await fetchApi({
                url: "user-page/product"
            })
            console.log(userData);
            if(!userData.ok){
                return
            }
            const data = await userData.json()
            console.log(data);
            dispatch(userPhonesSlice.actions.fullfiled(data))
        } catch (error) {
            
        }
    }
)