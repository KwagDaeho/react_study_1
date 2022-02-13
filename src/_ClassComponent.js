import React, { Component } from "react";

// rcc 명령어로 실행
export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { date: new Date() };
    this.handleClick = this.handleClick.bind(this);
    // 클래스컴포넌트 내에서 특정 함수를 제작해서 클래스를 직접 접근하고 싶을 때(= state에 접근?) 사용!
    // "this.handleClick 이라는 함수에게 스스로를 this 바인딩 해줘" 라는 거심
    // 하지만 ArrowFunction을 사용하면 바깥과의 컨텍스트를 쉐어하기 때문에 this가 누구인지 이미 알고있음. 고로 굳이 이런 일을 안해도 된다!
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }
  tick() {
    console.log("tick");
    this.setState({ date: new Date() });
  }

  handleClick = () => {
    alert(this.state.date);
  };
  render() {
    console.log("render.");
    return (
      <div>
        <h2 onClick={this.handleClick}>
          Class Component &#40; Click to alert event &#41;
        </h2>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
