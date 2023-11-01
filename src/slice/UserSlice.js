import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'



export const setUser=createAsyncThunk(
    'user/setUser',
    async (_,{getState})=>{
        const auth=getState().auth.auth
        const request=await axios({method: 'post',
        url:'http://localhost:3001/api/v1/user/profile' ,
        headers:'Authorization:Bearer'+auth})
        const response = await request.data.body;
        return response
    }
)
export const setUserName=createAsyncThunk(
    'user/setUserName',
    async (newName,{getState})=>{
        const auth=getState().auth.auth
        const request=await axios({method: 'put',
        data:{"userName":newName},
        url:'http://localhost:3001/api/v1/user/profile' ,
        headers:'Authorization:Bearer'+auth})
        const response = await request.data.body;
        return response
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState:{
        loading:false,
        profile: null,
        error:null
    },
    reducers:{
        logoutUser: (state)=>{
            state.loading=false
            state.profile=null
            state.error=null
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(setUser.pending,(state)=>{
            state.loading = true;
            state.profile = null;
            state.error = null;
        })
        .addCase(setUser.fulfilled,(state, action)=>{
            state.loading = false;
            state.profile= action.payload;
            state.error = null;
        })
        .addCase(setUser.rejected, (state, action)=>{
            state.loading = false;
            state.profile = null;
            state.error = action.error.message;
        })
        .addCase(setUserName.pending,(state)=>{
            state.loading = true;
            state.profile = null;
            state.error = null;
        })
        .addCase(setUserName.fulfilled,(state, action)=>{
            state.loading = false;
            state.profile= action.payload;
            state.error = null;
        })
        .addCase(setUserName.rejected, (state, action)=>{
            state.loading = false;
            state.profile = null;
            state.error = action.error.message;
        })
    }
})

export const{logoutUser}=userSlice.actions
export default userSlice.reducer