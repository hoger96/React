import React, { useState } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const dispatch = useDispatch();
  //store에 있는 값을 싹 다 주기
  let count = useSelector(state => state.count);
  let id = useSelector(state => state.id);
  let password = useSelector(state => state.password);
  const increase = () => {
    //type은 액션의 이름
    //reducer은 자동으로 dispatch가 던진 액션을 받아올 수 있음
    //payload는 함수의 매개변수 역할
    dispatch({type:"INCREMENT", payload:{num:5}});
  }

  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"kyh", password:"123"}});
  }

  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>로그인</button>
      <Box />
    </div>
  );
}

export default App;
