import React, { Component } from "react";

// 创建一个函数接收一个组件返回另一个组件
function withStage(Component) {
   console.log(Component.name + "加强了");
  const NewComponent = props => {
    return <Component {...props} stage="react" />;
  };
  return NewComponent;
}

// 功能：日志记录
function withLog(Component) {
  console.log(Component.name + "加强了");

  return props => {
    return <Component {...props}  name="native"/>;
  };
}


function logWithOpts(opt) {
    return function withLog(Component) {
        console.log(Component.name + "1111加强了");
      
        return props => {
          return <Component {...props} />;
        };
      }
}

@withLog
@withStage
@withLog
// @logWithOpts({name:'tony'})
class Kaikeba extends Component {
  render() {
    return (
      <div>
        {this.props.stage} - {this.props.name}
      </div>
    );
  }
}

export default Kaikeba;
