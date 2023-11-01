import {configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/AuthSlice.js'
import userReducer from './slice/UserSlice.js'

export default configureStore({
    reducer: {
      auth:authReducer,
      user: userReducer,
      devtools: true
    },
  })