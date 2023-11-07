import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const authentlast=createAsyncThunk(
    'auth/authentlast',
    async(authent)=>{
        const request=await axios.post('http://localhost:3001/api/v1/user/login', authent)
        const response = await request.data.body.token;
        localStorage.setItem('token', response);
        return response
    }
);
export const authentshort=createAsyncThunk(
    'auth/authentshort',
    async(authent)=>{
        const request=await axios.post('http://localhost:3001/api/v1/user/login', authent)
        const response = await request.data.body.token;
        sessionStorage.setItem('token', response);
        return response
    }
);
function setAuth(){
    let sessionToken=sessionStorage.getItem('token');
    let localToken =localStorage.getItem('token');
    if (sessionToken!== null){
        return sessionToken
    }
    else{
        return localToken
    }
}


const authSlice = createSlice({
    name: 'auth',
    initialState:{
        loading:false,
        auth:setAuth(),
        error:null
    },
    reducers:{
        logout: (state)=>{
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            state.loading=false;
            state.auth=null;
            state.error=null
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(authentlast.pending,(state)=>{
            state.loading = true;
            state.auth = null;
            state.error = null;
        })
        .addCase(authentlast.fulfilled,(state, action)=>{
            state.loading = false;
            state.auth= action.payload;
            state.error = null;
        })
        .addCase(authentlast.rejected, (state, action)=>{
            state.loading = false;
            state.auth = null;
            state.error = action.error.message;
        })
        .addCase(authentshort.pending,(state)=>{
            state.loading = true;
            state.auth = null;
            state.error = null;
        })
        .addCase(authentshort.fulfilled,(state, action)=>{
            state.loading = false;
            state.auth= action.payload;
            state.error = null;
        })
        .addCase(authentshort.rejected, (state, action)=>{
            state.loading = false;
            state.auth = null;
            state.error = action.error.message;
        })
    }

})
export const{logout}=authSlice.actions
export default authSlice.reducer

