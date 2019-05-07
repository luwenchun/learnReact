import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props){
 return <div>hello</div>
}
// 第一种组件写法
function App() {
  return (
    <div className="App">
          Learn React
    </div>
  );
}
export default App;

// 第二种组件写法
export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      count:0,
      data:new Date()
    }
  }
}