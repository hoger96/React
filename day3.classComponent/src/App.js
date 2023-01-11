import {useState, useEffect} from 'react';
import "./App.css";
import Box from './component/Box';


function App() {
    let counter = 0;
    const [counter2, setCounter2] = useState(0);
    const [value, setValue] = useState(0);
    const increase = () => {
        counter = counter + 1;
        setCounter2(counter2 + 1);
        setValue(value + 2);
        console.log("counter: ", counter, "counter2 state: ", counter2);
    };

    //useEffect(함수, 배열)
    //render 끝나고 호출되는useEffect는 componentDidMount와 같은 역할
    //api 콜
    useEffect(() => {
        console.log("useEffect1 Fire");
    }, []);

    //배열 안에 state값이 들어가면 componentDidUpdate 역할
    useEffect(() => {
        console.log("useEffect2 Fire", counter2,value);
    }, [counter2]);

    useEffect(() => {
        console.log("다른내용 하고 싶어요", value);
    }, [value]);

    return (
        <div>
            {console.log("render")}
            <div>{counter}</div>
            <div>state:{counter2}</div>
            <button onClick={increase}>클릭!</button>
        </div>
    );
}

export default App