import React ,{Component,PureComponent}from "react"
import ReactDOM from 'react-dom';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
const list = [
    { name: 'Brian Vaughn', description: 'Software engineer' },
    { name: 'Brian Vaughn', description: 'Software engineer' }
    // And so on...
  ];
  
 

  export default class extends Component{
    render(){
        return (
            <>
               <Table
                    width={300}
                    height={300}
                    headerHeight={20}
                    rowHeight={30}
                    rowCount={list.length}
                    rowGetter={({ index }) => list[index]}
                >
                    <Column
                    label='Name'
                    dataKey='name'
                    width={100}
                    />
                    <Column
                    width={200}
                    label='Description'
                    dataKey='description'
                    />
                </Table>
            </>
        )
    }
    }
  