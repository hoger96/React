import React, { Component } from 'react';
import BoxClass from './component/BoxClass';

//function대신 class
export default class App extends Component {

    //class 컴포넌트에서 useState 사용하기
    //constructor(생성자)안에 state 만들기
    constructor(props){
        super(props)
        this.state = {
            counter2:0,
            num:1,
            value:0
        };
        console.log("constructor");
    }
    
    //class에서는 앞에 const 안붙임
    increase = () => {
        this.setState({
          counter2:this.state.counter2 + 1,
          value: this.state.value + 1
        });
        //비동기적으로 처리됨
        console.log("increase function", this.state);
    };

  componentDidMount(){
    //api 콜 
    //render 끝나고 호출되는 함수
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate", this.state);
  }

  render() {
    console.log("render");
    return (
      <div>
        <div>state: {this.state.counter2}</div>
        <button onClick={this.increase}>클릭</button>
        {this.state.counter2<3 && <BoxClass num={this.state.value}/>}
      </div>
    );
  }
}