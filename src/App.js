import './App.css';
import{Routes, Route} from "react-router-dom"
import store from './store'
import { Provider } from 'react-redux'
import Home from "./pages/Home/Home"
import Login from "./pages/LoginPage/LoginPage"
import UserProfile from './pages/UserProfile/UserProfile';

function App() {
  return (
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/user" element={<UserProfile/>}/>
    </Routes>
    </Provider>
  );
}

export default App;
