import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props){
 return <div>hello</div>
}
// 第一种组件写法
// function App() {
//   return (
//     <div className="App">
//           Learn React
//     </div>
//   );
// }
// export default App;
// 函数型组件传递props
function Welcome1(props) {
  return <div>Hello, {props.name}</div>;
}

// 第二种组件写法
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:0,
      date:new Date()
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      // 3.更新状态
      this.setState({
        date: new Date(),
        count: this.state.count + 1
      });
    }, 1000);
    // 注意2：setState()异步的
    this.setState((prevState, prevProps)=>({
        count: prevState.count + 1
    }), () => {
        console.log(this.state.count);
    });
    // console.log(this.state.count);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
    formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  render(){
    const name="jerry"
    const jsx=<p>hello world</p>
      return(
        <div>
           <h1>{name}</h1>
        <p>{this.formatName({ firstName: "tom", lastName: "jerry" })}</p>
            {/* jsx也是表达式 */}
           {jsx}
          {/* 组件属性传值: 传入属性是只读的 */}
        <Welcome1 name="tom" />
          {/* 使用状态 */}
        <p>{this.state.date.toLocaleTimeString()}</p>
        </div>
      )
  }
}