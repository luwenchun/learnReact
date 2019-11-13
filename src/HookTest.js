import React, { useState } from 'react';

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
    const [fruits,setFruits]=useState(['草莓','香蕉'])

    return (
        <div>
            <p>{fruit===""?'请选择水果':`你选择的水果是${fruit}`}</p>
            <FruitAdd  onAddFruit={pname=>setFruits([...fruits,pname])}></FruitAdd>
            <FruitList fruits={fruits} setFruit={setFruit}></FruitList>
           
        </div>
    );
  
}

