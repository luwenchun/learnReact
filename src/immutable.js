import React,{Component,PureComponent} from 'react';
// React15.3 PureComponent
// React 16.6.0 React.memo
import { Map,List,is } from "immutable";
class ComponentSon extends PureComponent{//缺点 只解决基本数据类型，对象，数组，数组对象无法解决
    // shouldComponentUpdate(nextProps,nextState){
    //     if(this.props.sonStr !== nextProps.sonStr){
    //         return true
    //     }
    //     // if(this.props.sonObj !== nextProps.sonObj){
    //     //     return true
    //     // }
    //     // if(!is(Map(this.props.sonObj),Map(nextProps.sonObj))){
    //     //     return true
    //     // }
    //     // let propsonArr=List(this.props.sonArr);
    //     // let nextsonArr=List(nextProps.sonArr);
    //     // console.warn('propsonArr',propsonArr)
    //     // console.warn('nextsonArr',nextsonArr)
    //     // if (propsonArr.equals(nextsonArr)) {
    //     //   return true;
    //     // }  
    //     return false;
    // }
    // shouldComponentUpdate(nextProps = {}, nextState = {}) {
    //     const thisProps = nextProps || {}, thisState = nextState|| {};
      
    //     if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
    //         Object.keys(thisState).length !== Object.keys(nextState).length) {
    //       return true;
    //     }
      
    //     for (const key in nextProps) {
    //       if (!is(thisProps[key], nextProps[key])) {
    //         return true;
    //       }
    //     }
      
    //     for (const key in nextState) {
    //       if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
    //         return true;
    //       }
    //     }
    //     return false;
    //   }
    render(){
        console.log('ComponentSon rendered : ' + Date.now());
        
        return (
        <div style={{background:'orange'}}> {this.props.sonStr} 
        <h3>str:{JSON.stringify(this.props.sonStr)}</h3>
         <h3>obj:{JSON.stringify(this.props.sonObj)}</h3>
         <h3>Arr:{JSON.stringify(this.props.sonArr)}</h3> 
        </div>
        )
    }
 }


class App extends Component{

  state = {
    parentMsg:'parent',
    sonStr:'son',
    sonObj:{
        name:'son',
        val:'this is val of son'
    },
    sonArr:['son','this is val of son']
  }
  render(){
      let {sonStr,sonObj,sonArr}=this.state;
    //   console.log(Map(sonArr))
        sonObj={...sonObj}
      //  sonArr=Object.assign([],sonArr)//模拟reducer返回的新数组
      //  console.warn('sonArr',sonArr)
    return (
      <div className="App">
        <header style={{background:'pink'}} onClick={()=> {this.setState({parentMsg:'parent' + Date.now()})}}>
          <p>
           {this.state.parentMsg}
          </p>
        </header>
        <button onClick={()=>
            this.setState({
                // sonObj:{...sonObj,val:'son'+ Date.now()}   
                // sonObj:{...sonObj,val:'son'}   
            })
            // this.setState({
            //     sonArr:sonArr.concat([{val:'son'+ Date.now(),name:'son'}])
            //     // sonArr:[{val:'son',name:'son'},{val:'son',name:'son'}]
            // })
            
          // this.setState(({sonObj}) =>{
          //   return { 
          //       sonObj:{
          //         ...sonObj,
          //         val:'son'
          //       }
          //   }
          // }) 
          }>修改子组件props</button>
        <ComponentSon  sonStr={sonStr} sonObj={sonObj} />
      </div>
    );}
}

export default App;
