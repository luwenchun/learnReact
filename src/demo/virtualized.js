import React ,{Component,PureComponent}from "react"
import ReactDOM from 'react-dom';
import { List } from 'react-virtualized';
// List data as an array of strings
const list = [
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn','Brian Vaughn',
    'Brian Vaughn',
    // And so on...
  ];
  
export default class extends Component{
     rowRenderer =({
        key,         // Unique key within array of rows
        index,       // Index of row within collection
        isScrolling, // The List is currently being scrolled
        isVisible,   // This row is visible within the List (eg it is not an overscanned row)
        style        // Style object to be applied to row (to position it)
      }) =>{
  
        return (
          <div
          style={{display:'flex'}}
            key={key}
            style={style}
          >
            {list[index]}{key}
          </div>
        )
      
      }

    onScroll=()=>{
        console.log("onScroll")
    }
    componentDidMount() {
        
    }
    noRowsRenderer=()=>{
        console.log("接口没有数据")
    }
    onRowsRendered=(value)=>{
        console.log('即将读取的东西',value)
    }
    render(){
        return(
            <>
                 <List
                   width={300}
                   height={300}
                   style={{background:"#ccc"}}
                   rowCount={list.length}
                   rowHeight={20}
                   scrollToIndex={5}
                   onScroll={this.onScroll}
                   rowRenderer={this.rowRenderer}
                   onRowsRendered={this.onRowsRendered}
                   rowHeight={50}
                   overscanRowCount={6}
                   noRowsRenderer={this.noRowsRenderer}
                   scrollToAlignment={'center'}
               />
             </>
           )
    }
   
}