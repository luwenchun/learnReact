import React, { Component } from "react";


// 高阶组件属性代理
 const Demo = (props) => {
  return (
    <div>
	  My name is {props.name}
	</div>
  )
};

const HOC = (WrapperComponent) => {
  return class Permission extends Component{
    render(){
      return (
        <div>
		  <header>nihao</header>
		  <WrapperComponent {...this.props}/>
		</div>
	  )
	}
  }
};

const WithDemo = HOC(Demo);

// 高阶组件的反向继承

const HOC = (WrapperComponent) => {
  return class Permission extends WrapperComponent{
    render(){
      console.log(this.props);
      return (
        <div>
		  <header>nihao</header>
		  <WrapperComponent {...this.props}/>
		</div>
	  )
	}
  }
};

const WithDemo = HOC(Demo);

import React, { Component } from "react";


// 高阶组件
const withName = Comp => {
  // 甚至可以重写组件声明周期
  class NewComponent extends Component {
    componentDidMount() {
      console.log("do something");
    }
    render() {
      return <Comp {...this.props} name="高阶组件试用介绍" />;
    }
  }

  // 假设通过某种特殊手段获取了本节课名字
  return NewComponent;
};

const withLog = Comp => {
  console.log(Comp.name + "渲染了");
  return props => <Comp {...props} />;
};

@withLog
@withName
@withLog
class Kaikeba extends Component {
  render() {
    return (
      <div>
        {this.props.stage} - {this.props.name}
      </div>
    );
  }
}
const a=withLog(Kaikeba)
const b=withName(a)
const c=withLog(b)
export default Kaikeba;