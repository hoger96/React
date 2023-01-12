import {useState} from "react";
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import { Routes, Route, Navigate } from "react-router-dom";
import Productpage from "./page/Productpage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage";
import UserPage from "./page/UserPage";


function App() {
  //authenticate가 true면 로그인한것, false는 로그인안한 것
  const [authenticate, setAuthenticate] = useState(true);
  
  //redirect 만들기
  //컴포넌트임(대문자니까)
  const PrivateRoute = () => {
    return authenticate == true?<UserPage />: <Navigate to="/login" />
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
