import React, { useState,useEffect } from 'react';
import { setTimeout } from 'timers';

function FruitList({fruits,setFruit}){
    return (
        fruits.map((f,i)=>(
        <li key={i} onClick={()=>setFruit(f)}>{f}</li>//hook中使用bind
        ))
    )
}
function FruitAdd(props) {
    const [pname, setPname] = useState("");
  
    const onAddFruit = e => {
      if (e.key === "Enter") {
        props.onAddFruit(pname); 
        setPname("");
      }
    }
    return (
        <div>
          <input
            type="text"
            value={pname}
            onChange={e => setPname(e.target.value)}
            onKeyDown={onAddFruit}
          />
        </div>
      )
}
  
export default function HookTest() {
    const [fruit,setFruit]=useState('草莓')
    const [fruits,setFruits]=useState([])
    const [loading,setLoad]=useState(true)
    // 使用useEffect操作副作用
  //   请务必设置依赖选项，如果没有则设置空数组表示仅执行一次
    useEffect(() => {
        console.log('render')
        setTimeout(()=>{
            setFruits(['草莓','香蕉'])
            setLoad(false)
        },2000)
    },[])
    if(loading){
        return (
            <h1>loading 淡定</h1>
        )
    }
    return (
        <div>
            <p>{fruit===""?'请选择水果':`你选择的水果是${fruit}`}</p>
            <FruitAdd  onAddFruit={pname=>setFruits([...fruits,pname])}></FruitAdd>
            <FruitList fruits={fruits} setFruit={setFruit}></FruitList>
           
        </div>
    );
  
}

