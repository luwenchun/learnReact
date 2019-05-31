import React ,{Component,PureComponent}from "react"
import ReactDOM from 'react-dom';
import { Grid } from 'react-virtualized';
// Grid data as an array of arrays
const list = [
    ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
    ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ]
    // And so on...
  ];
  
  function cellRenderer ({ columnIndex, key, rowIndex, style }) {
    return (
      <div
        key={key}
        style={style}
      >
          <div style={{border:'1px solid red',height:'50px',width:'100%'}}>
          {list[rowIndex][columnIndex]}{key}
          </div>
        
      </div>
    )  
  }

  export default class extends Component{
    render(){
        return (
            <>
                <Grid
                    cellRenderer={cellRenderer}
                    columnCount={list[0].length}
                    columnWidth={150}
                    height={300}
                    rowCount={list.length}
                    rowHeight={60}
                    width={300}
                   
                    style={{background:"#ccc"}}
                />
            </>
        )
    }
    }
  