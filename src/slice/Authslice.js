import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const auth=createAsyncThunk(
    'auth/auth',
    async(auth)=>{
        const request=await axios.post('http://localhost:3001/api/v1/user/login', auth)
        const response = await request.data.body.token;
        localStorage.setItem('token', JSON.stringify(response))
        return response
    }
);


const authSlice = createSlice({
    name: 'auth',
    initialState:{
        loading:false,
        user:null,
        error:null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(auth.pending,(state)=>{
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(auth.fulfilled,(state, action)=>{
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(auth.rejected, (state, action)=>{
            state.loading = false;
            state.user = null;
            state.error = action.error.message;
        })
    }

})

export default authSlice.reducer

