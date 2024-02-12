import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    adminPhones: [],
    isLodaing: false
}

export const adminPhones= createSlice({
    name: "adminPhones",
    initialState,
    reducers:{
        fullfiled(state, action){
            console.log(action);
            state.adminPhones = action.payload.results
        }
    }
})



//---------

export const getAdminPhones = createAsyncThunk(
    "getadminphones",
    async (param, {dispatch})=>{
        console.log("ADMIN");
        try {
            const response = await fetch("http://13.126.42.105/api/v1/admin/product/",{
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MzM0Mzk4LCJpYXQiOjE3MDc3Mjk1OTgsImp0aSI6ImZmMTM2NGQ5MzlkYTRmMWViYTliOGZiZDQ5ODVlYTYxIiwidXNlcl9pZCI6NH0.tO3aNXjcDZ6KQsCh9UMz0mInDTmiOppLYl6SMS58vDw"
                }
            })
            const data = await response.json()
            console.log(data);
            dispatch(adminPhones.actions.fullfiled(data))
        } catch (error) {
            
        }
    }
)




