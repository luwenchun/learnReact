import React, { Component } from "react";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);

    console.log("1.构造函数");

    this.state = { msg: "来自属性传递：" + props.prop };
  }
  
//   react16.3之前的生命周期
// construct
// componentWillMount() {
    
// }
// render（）
// componentDidMount() {
 
// }
// 更新
// componentWillReceiveProps(nextProps,nextState) {
// //   父组件更新子组件获取新属性
// }
// shouldComponentUpdate(nextProps, nextState, nextContext) {
//     //  当前组件是否应该更新
// }
// componentWillUpdate() {
//     // 组件将要更新
// }
// componentDidUpdate(prevProps, prevState) {
//     // 组件已经更新
// }

// react 16.6之后生命周期
// 挂载阶段
static getDerivedStateFromProps(nextProps, prevState) {
     return true
}
// render（）
componentDidMount() {
    
}
// 更新
static getDerivedStateFromProps(nextProps, prevState) {
    return true
}
shouldComponentUpdate(nextProps, nextState, nextContext) {
     
}

   render() {
    console.log("组件渲染");

    return <div>{this.state.msg}</div>;
  }
  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    
  }
  componentDidUpdate(prevProps, prevState) {
      
  }
}