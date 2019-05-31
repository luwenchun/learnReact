import React ,{Component,PureComponent}from "react"
import ReactDOM from 'react-dom';
import { Collection } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

// Collection data as an array of objects
const list = [
    { name: 'Brian Vaughn', x: 13, y: 34, width: 123, height: 234 },
    { name: 'Brian Vaughn', x: 146, y: 34, width: 123, height: 234 },
    { name: 'Brian Vaughn', x: 88, y: 329, width: 123, height: 234 }
    // And so on...
  ];
  
  function cellRenderer ({ index, key, style }) {
     
    return (
      <div
        key={key}
        style={style}
        // style={{border:'1px solid #ccc'}}
      >
          <div style={{flex:1,border:'1px solid #ccc',    height: '100%'}}>
          {list[index].name}{key}
          </div>
        
      </div>
    )
  }
  function cellSizeAndPositionGetter ({ index }) {
    const datum = list[index]
  
    return {
      height: datum.height,
      width: datum.width,
      x: datum.x,
      y: datum.y
    }
  }

  export default class extends Component{
      render(){
          return (
              <>
            <Collection
            cellCount={list.length}
            cellRenderer={cellRenderer}
            cellSizeAndPositionGetter={cellSizeAndPositionGetter}
            height={300}
            width={300}
            style={{border:'1px solid red'}}
             /> 
             </>
          )
      }
  }