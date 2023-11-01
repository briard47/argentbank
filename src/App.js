import './App.css';
import{Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/LoginPage/LoginPage"
import UserProfile from './pages/UserProfile/UserProfile';
import ProtectedRoute from './routing/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './slice/UserSlice';
import { useEffect } from 'react';


function App() {
  const auth=useSelector(state=>state.auth.auth);
  const dispatch = useDispatch()
  useEffect(()=>{
    if (auth!==null){
      dispatch(setUser())
    }else{}
  }, [auth, dispatch])
    
  return ( 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route element={<ProtectedRoute />}>
            <Route path='/profile' element={<UserProfile />} />
          </Route>
    </Routes>

  );
}

export default App;
