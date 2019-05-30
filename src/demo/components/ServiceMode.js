import React,{Component,PureComponent} from 'react'
var classNames = require('classnames');
class ServiceMode extends PureComponent {
    constructor(props) {
      super(props);
      this.state={
        //   控制样式
        // 1激活2hover3灰色
             active:1,
            line1Active:false,
            wactive:3,
            line2Active:false,
            dactive:3,
        // 控制点击状态
          clickstep:null
      }
    }
    static getDerivedStateFromProps(props, state) {
      
        if(!!props.status){
            if(props.status==10661003){//待进厂
                return 
            }else if(props.status==10661000){//已进厂
                if(state.clickstep==1){
                    return {
                        active:1,
                        line1Active:false,
                        wactive:2,
                    }
                }else if(state.clickstep==2){
                    return {
                        active:2,
                        line1Active:true,
                        wactive:1,
                    }
                }else {//clickstep null
                    return {
                        active:2,
                        line1Active:true,
                        wactive:1
                    }
                }
                
            }else if(props.status==10661004){//已完成
                if(state.clickstep==1){
                    return {
                        active:1,
                        line1Active:false,
                        wactive:2,
                        line2Active:false,
                        dactive:2
                    }
                }else  if(state.clickstep==2){
                    return {
                        active:2,
                        line1Active:true,
                        wactive:1,
                        line2Active:false,
                        dactive:2
                    }
                }else   if(state.clickstep==3){
                    return {
                        active:2,
                        line1Active:true,
                        wactive:2,
                        line2Active:true,
                        dactive:1
                    }
                }else {
                    return {
                        active:2,
                        line1Active:true,
                        wactive:2,
                        line2Active:true,
                        dactive:1
                    }
                }
                
            }
        }
        return null;
    }
    // componentWillReceiveProps(props,state){//根据props渲染初始状态
      
    //     if(props.status==10661003){//待进厂
    //             return;
    //     }else if(props.status==10661000){//已进厂
    //         this.setState({
    //             active:2,
    //             line1Active:true,
    //             wactive:1
    //         })
    //     }else if(props.status==10661004){//已完成
    //         this.setState({
    //             active:2,
    //             line1Active:true,
    //             wactive:2,
    //             line2Active:true,
    //             dactive:1
    //         })
    //     }
    // }
    // componentWillUpdate(props,state) {//根据点击状态修改更新视图
    //      if(props.status==10661003){
    //             if(state.clickstep==1){
    //                 this.setState({
    //                     active:1,
    //                     line1Active:false,
    //                     wactive:2,
    //                 })
    //             }else if(state.clickstep==2){
    //                 this.setState({
    //                     active:2,
    //                     line1Active:true,
    //                     wactive:1,
    //                 })
    //             }
    //     }else  if(props.status==10661004){
    //         if(state.clickstep==1){
    //             this.setState({
    //                 active:1,
    //                 line1Active:false,
    //                 wactive:2,
    //                 line2Active:false,
    //                 dactive:2
    //             })
    //         }else  if(state.clickstep==2){
    //             this.setState({
    //                 active:2,
    //                 line1Active:true,
    //                 wactive:1,
    //                 line2Active:false,
    //                 dactive:2
    //             })
    //         }else   if(state.clickstep==3){
    //             this.setState({
    //                 active:2,
    //                 line1Active:true,
    //                 wactive:2,
    //                 line2Active:true,
    //                 dactive:1
    //             })
    //         }
    //     }
    // }
    componentDidMount() {
        this.init()
    }
    init=()=>{
       //jaax请求
    }
    componentDidUpdate(prevProps, prevState) {

    }
    
    Wait=(value)=>{//标记点击状态
        // // 防止无效点击
        // if(this.props.status==10661003){
        //     return ;
        // }else if(this.props.status==10661000){
        //         if(value==1||value==2){
        //             // this.clickstep=value
        //             this.setState({
        //                 clickstep:value
        //             })
                    
        //         }
        // }else if(this.props.status==10661004){
        //     // this.clickstep=value
        //     this.setState({
        //         clickstep:value
        //     })
        // }
        this.setState({
            clickstep:value
        })
          
    }
    render(){
        console.log("2")
    const {active,line1Active,wactive,line2Active,dactive} =this.state;//导入的样式
    //   样式定义
    let awaitclass= classNames({
        step:true,
         await:true,
         'active':active==1,
         'hover':active==2
    })
    let line1= classNames({
        line:true,
        'lineactive':line1Active
    })
    let willdone= classNames({
        step:true,
        willdone:true,
        'active':wactive==1,
        'hover':wactive==2
    })
    let line2= classNames({
        line:true,
        'lineactive':line2Active
    })
    let done= classNames({
        step:true,
        done:true,
        'active':dactive==1,
        'hover':dactive==2
    })
  
        if(this.props.status==10661006){//取消状态
            return (
                <div className="servicemode">
                        {/* <div  className="completed">
                        <div className="step await" :class="canelstep==1?'active':'hover'" @click="Link('1')">
                                <div className="icon"></div>
                                <div>待进厂</div>
                            </div>
                            <div className="line" :class="canelstep==2?'lineactive':''"></div>
                            <div className="step willdone canel" :class="canelstep==2?'active':'hover'" @click="Link('2')">
                            <div className="icon"></div>
                                <div>已取消</div>
                            </div>
                            <div className="line" style="visibility: hidden;"></div>
                            <div className="step" style="visibility: hidden;"></div>
                        </div> */}
                        <h1>o2</h1>
                </div>
            )
        }else{
            return(
                <div className="servicemode">
                    {/* <!-- 订单非取消状态视图 --> */}
                    <div  className="completed" >
                        <div className={awaitclass} ref="first" onClick={this.Wait.bind(this,1)}>
                            <div className="icon"></div>
                            <div>待进厂</div>
                        </div>
                        <div className={line1} ></div>
                        <div className={willdone} onClick={this.Wait.bind(this,2)}>
                        <div className="icon"></div>
                            <div>已进厂</div>
                        </div>
                        <div className={line2} ></div>
                        <div className={done}  onClick={this.Wait.bind(this,3)}>
                            <div className="icon"></div>
                            <div>已完成</div>
                        </div>
                    </div>
                 
                    
                </div>
            )
        }
        
    }
}
export default ServiceMode