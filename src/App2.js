import {useState} from "react";
import './App.css';
import Box from './component/Box';

function App2() {
  let counter = 0;
  //배열을 반환[초기값이 담긴 state, state값을 변경해주는 함수]
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("counter은 " + counter, "counter2 state는 ", counter2);
  }
  //1. 유저가 버튼을 클린
  //2. counter+1해서 1이됨
  //3. setState 함수호출
  //4. console.log 실행됨
  //변수값은 1로 보이고 state 값은 아직 안변했기 때문에 그 전에 값이 보임
  //함수 끝
  //app 다시 re render
  //let counter = 0 을 거치면서 counter 값은 다시 0으로 초기화 됨
  //업데이트된 state 값이 보임

  //UI
  return (
    <div>
      <div>{counter}</div>
      <div>state: {counter2}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default App2;
