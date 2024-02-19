import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchApi } from "../../api/fetchData";

const initialState = {
    isLodaing: false,
    userPhones: [],
    next: ""
}

export const userPhonesSlice = createSlice({
    name: "userPhones",
    initialState,
    reducers: {
        pending(state){
            state.isLodaing = true
        },
        fullfiled(state,action){
            state.userPhones = action.payload.results
            state.isLodaing = false
            state.next = action.payload.next
        },
        rejected(state,action){
            state.isLodaing = false
        },
        next: (state, action)=>{
            state.userPhones = [...state.userPhones, ...action.payload.results]
            state.next = action.payload.next
            state.isLodaing = false
        }
    }
})


export const getRequestUserPagePhones = createAsyncThunk(
    "userPhones",
    async (param, {dispatch})=>{
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
            dispatch(userPhonesSlice.actions.fullfiled(data))
        } catch (error) {
            
        }
    }
)
export const getNextPhones = createAsyncThunk(
    "userNext",
    async (param, {dispatch})=>{
        try {
            dispatch(userPhonesSlice.actions.pending())
            const userData = await fetchApi({
                next: param
            })
            console.log(userData);
            if(!userData.ok){
                return
            }
            const data = await userData.json()
            dispatch(userPhonesSlice.actions.next(data))
        } catch (error) {
            
        }
    }
)