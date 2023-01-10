import {useState} from "react";
import './App.css';
import Box from './component/Box';

//1. 박스 2개(타이틀, 사진, 결과)
//2. 가위 바위 보 버튼
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 가능
//5. 3번4번의 결과를 가지고 누가 이겼는지 승패 따지기
//6. 승패결과에 따라 테두리 색이 변화(이기면:초록 지면:빨강 비기면:검정)
const choice = {
  rock:{
    name:"Rock",
    img:"data:image/jpeg;base64,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"
  },
  scissor:{
    name:"Scissor",
    img:"data:image/png;base64,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"
  },
  paper:{
    name:"Paper",
    img:"data:image/jpeg;base64,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"
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  //컴퓨터 랜덤값 함수
  const randomChoice = () => {
    //객체에 키값만 뽑아서 배열로 만들어주는 함수
    let itemArray = Object.keys(choice);
    console.log("item array", itemArray);
    //인덱스번호를 나오게 하기 위해 소수점 아래 버리는 함수 사용
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  //결과값 계산 함수
  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    if(user.name == computer.name){
      return "tie";
    }else if(user.name == "Rock") 
     return computer.name == "Scissor"?"win":"lose";
    else if(user.name == "Scissor") 
      return computer.name == "Paper"?"win":"lose";
    else if(user.name == "Paper") 
      return computer.name == "Rock"?"win":"lose";
  }

  return (
    <div>
      <div className="main" >
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;