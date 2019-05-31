import React ,{Component,PureComponent}from "react"
import Welcome  from './components/welcome'
import ServiceMode from "./components/ServiceMode"

import "./index.less"
const listStatus={
    0:'已确认',
    1:'等待维修',
    2:'正在服务',
    3:'正在质检',
    4:'正在洗车',
    5:'交车准备',
    6:'已完成',
    7:"待确认",
    8:'派单中',
    9:'已接单',
    10:'取车订单开启',
    11:'取车中',
    12:"已收车",
    13:'估价待确认',
    14:'已取消',
  }
  const reparetypes = {
  '10661003': '待进厂',
	'10661000': '已进厂',
	'10661004': '已完成',
	'10661006': '已取消'
};
export default class demo extends Component {
    constructor(props){
        super(props)
        this.state={
            welcome:null,
            dealer:null,
            serviceMode:null,
            carInfo:null,
            listStatus:null,
            status:null,
            popupVisible:false,//模态框展示
            driverStar:4.5
        }
    }
    componentDidMount(){
        this.init()
    }
    init=()=>{
        var data={
            address: "上海市静安区康宁路956号（近场中路）",
            ass: [			
                	{
                        createTime:'2019-12',
                        assessment:'不好'
                },
                {
                        createTime:'2019-12',
                        assessment:'不好'
                }
                ],
            assStatus: "2",
            bookingTypeCode: "1,2,3,4",
            dealerCode: "LK180101",
            dealerName: "上海绿地林肯中心",
            detailDto: {
            appointmentDate: "2018年12月20日 08:00",
            appointmentDateTimeStamp: 1545264000000,
            appointmentNo: "28010YO201812100001",
            appointmentPhone: "17123458904",
            appointmentSource: "3",
            appointmentTime: null,
            cancleTime: "2018年12月11日 17:03",
            carModelName: "KMZ",
            currMileage: null,
            endDeliverTime: "2019-19-12",
            enterFactoryMileage: 1001.5,
            expDeliverTime: "2018年12月14日 08:00",
            ifEws: "1",
            interchangeTime: "2018年12月14日 08:00",
            outFactoryMileage: 1002,
            plateNumber: "沪A12345",
            qualityTime: "2018年12月14日 11:07",
            remark: "测试",
            repairWaitTime: "2018年12月14日 11:07",
            repairingTime: "2018年12月14日 11:07",
            roNo: "RO12345678",
            roType: "自费",
            scootor: "0",
            serviceEnginnerName: "张三",
            serviceFinshTime: null,
            serviceType: "1",
            step: 5,
            vin: "LVSHBFDC7BF112301",
            washTime: "2018年12月14日 11:07",
           },
            serviceHotline: "021-56651999",
            status: "10661004",//订单状态
            listStatus:"5",
            title: "卢先生",
        }
      
        var welcome={
            name:data.title,
            status:data.status,
            dealerName:data.dealerName,
             listStatus:parseInt(data.listStatus),
             ass:data.ass
        }
        var dealer={
            dealerName:data.dealerName
        }
        var serviceMode={
            status:data.status,
        }
        var carInfo={
            status:data.status,
            listStatus:data.listStatus,
            carModelName:data.detailDto.carModelName,
            plateNumber:data.detailDto.plateNumber,
            currMileage:data.detailDto.currMileage,
            appointmentPhone:data.detailDto.appointmentPhone,
             scootor:data.detailDto.scootor,
             serviceType:data.detailDto.serviceType,
             serviceEnginnerName:data.detailDto.serviceEnginnerName,
             appointmentDate:data.detailDto.appointmentDate,
             cancleTime:data.detailDto.cancleTime,
             remark:data.detailDto.remark,
             diff:1,//完成状态，
             step:this.formateStep(data.listStatus),//车辆接收状态
       }
       var listStatus=parseInt(data.listStatus)
       var status=data.status
        this.setState({
            welcome:welcome,
            dealer:dealer,
            serviceMode:serviceMode,
            carInfo:carInfo,
            listStatus:listStatus,
            status:status
        })
    }
    formateStep=(listStatus)=>{
        var  step; 
        switch (listStatus){
          case "7":
            step=1;
            break; 
             case "8":
            step=2;
            break; 
             case "9":
            step=3;
            break; 
             case "10":
            step=4;
            break; 
             case "11":
            step=5;
            break; 
             case "12":
            step=6;
            break; 
            case "13"://估价待确认
            step=11;
            break; 
             case "1"://等待服务
            step=12;
            break; 
             case "2"://正在服务
            step=13;
            break; 
             case "3"://正在质检
            step=14;
            break; 
             case "4"://正在洗车
            step=15;
            break; 
             case "5"://交车准备
            step=16;
            break; 
            default:
            step=1;
        }
        return step;
    }

        render(){
              const {welcome,dealer,serviceMode,carInfo,listStatus,status}=this.state
            return (
            <div>
                {/* 客服欢迎页面 */}
                <Welcome  {...welcome}/>
                {/* 进厂状态 */}
                <ServiceMode {...serviceMode}/>
            </div>
            )
        }
    
}