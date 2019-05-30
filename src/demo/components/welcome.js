import React,{Component,PureComponent} from 'react'
// export default function welcome(){
//     return (
//         <>
//         <h1>ho</h1>
//         </>
//     )
       
    
// }
class Welcome extends PureComponent {
        render(){
            console.log("1")
            return(
                <div className="welcome">
                <div className="username">尊敬的{this.props.name}</div>
                {this.props.listStatus===7?
                      <div >感谢您预约售后服务，{this.props.dealerName}会尽快确认上门取车接单信息。</div>
                 :""
                }
               {this.props.listStatus===8?
                     <div >感谢您预约售后服务，代驾服务方正在为您派单。</div>
               :''}
                {this.props.listStatus===9?
                    <div >感谢您预约售后服务，司机郑师傅（工号9098）已接单。</div>
                :''}
                {this.props.listStatus===10?
                        <div >感谢您预约售后服务，司机郑师傅（工号9098）出发前往取车地址。</div>
                :''}
                {this.props.listStatus===11?
                        <div >感谢您预约售后服务，司机郑师傅（工号9098）正护送爱车驶向林肯中心。</div>
                :''}
                {this.props.listStatus===12?
                         <div >感谢您预约售后服务，林肯中心已接收您的爱车。</div>
                :''}
                {this.props.listStatus===13?
                     <div >感谢您预约售后服务，{this.props.dealerName}期待您的到访。</div>
                :''}
                {this.props.listStatus===1||this.props.listStatus===2||this.props.listStatus===3||this.props.listStatus===4?
                     <div >欢迎您莅临{this.props.dealerName}，我们将竭诚为您服务。</div>
                :''}
                {this.props.listStatus===5&&this.props.ass.length===0?
                     <div >您的售后预约已完成，{this.props.dealerName}欢迎您对本次服务进行评价。</div>
                :''}
                {this.props.listStatus===5&&this.props.ass.length>0?
                      <div >您的售后预约已完成，您同时提交了送车服务意向，请保持手机畅通，上海永达林肯中心会尽快与您联系确认送车信息。</div>
                :''}
                {this.props.listStatus===14?
                        <div >您的售后预约已取消，{this.props.dealerName}期待下次为您服务。</div>
                :''}
               
                
              
                
               
           
               
          
              
              
            </div>
            )
        }
}
export default Welcome
