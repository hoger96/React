import React, { Component } from 'react';
import BoxClass from './component/BoxClass';

//function대신 class
export default class AppClass extends Component {

    //class 컴포넌트에서 useState 사용하기
    constructor(props){
        super(props)
        this.state = {
            counter2:0,
            num:1,
            value:0
        };
    }
    
    //class에서는 앞에 const 안붙임
    increase = () => {
        this.setState({
          counter2:this.state.counter2 + 1,
          value: this.state.value + 1
        });
    };

  render() {
    return (
      <div>
        <div>state: {this.state.counter2}</div>
        <button onClick={this.increase}>클릭</button>
        <BoxClass num={this.state.value}/>
      </div>
    )
  }
}
