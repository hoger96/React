import {useEffect, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./Route/PrivateRoute";
//1. 전체상품페이지, 로그인페이지, 상품상세페이지
//1-1. 네비게이션 바
//2. 전체 상품페이지에서는 전체 상품 볼 수 있음
//3. 로그인 버튼을 누르면 로그인 페이지로 이동
//4. 상품디테일을 눌렀으나 로그인이 안되어있을 경우 로그인페이지가 먼저 나옴
//5. 로그인이 되어있을 경우에는 상품 디테일 페이지로 이동
//6. 로그아웃버튼을 누르면 로그아웃됨
//7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없음, 다시 로그인 페이지로 이동
//8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보임
//9. 상품검색 가능

function App() {
  //true면 로그인, false면 로그인실패
  const[authenticate, setAuthenticate] = useState(false);
  
  //로그인 버튼 누르면 true로 바뀌는 함수 확인하는 것
  useEffect(() => {
    console.log("aaaa", authenticate);
  },[authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
