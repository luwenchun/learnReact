import React, { Component } from "react";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);

    console.log("1.构造函数");

    this.state = { msg: "来自属性传递：" + props.prop };
  }
  componentDidMount() {

    
  }

   render() {
    console.log("组件渲染");

    return <div>{this.state.msg}</div>;
  }
}