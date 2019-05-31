import React ,{Component,PureComponent}from "react"
import ReactDOM from 'react-dom';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry
} from 'react-virtualized';
// Array of images with captions
const list = [
    {caption:'JVM 字节码从入门到精通',source:  'https://user-gold-cdn.xitu.io/2019/4/23/16a494a010897252?w=1300&h=1820&f=png&s=1983617'},
    {caption:'JVM 字节码从入门到精通',source:  'https://user-gold-cdn.xitu.io/2019/4/23/16a494a010897252?w=1300&h=1820&f=png&s=1983617'},
    {caption:'JVM 字节码从入门到精通',source:  'https://user-gold-cdn.xitu.io/2019/4/23/16a494a010897252?w=1300&h=1820&f=png&s=1983617'},
    {caption:'JVM 字节码从入门到精通',source:  'https://user-gold-cdn.xitu.io/2019/4/23/16a494a010897252?w=1300&h=1820&f=png&s=1983617'},
    {caption:'JVM 字节码从入门到精通',source:  'https://user-gold-cdn.xitu.io/2019/4/23/16a494a010897252?w=1300&h=1820&f=png&s=1983617'}
  
];

// Default sizes help Masonry decide how many images to batch-measure
const cache = new CellMeasurerCache({
//   defaultHeight: 250,
//   defaultWidth: 200,
  fixedWidth: true
})

// Our masonry layout will use 3 columns with a 10px gutter between
const cellPositioner = createMasonryCellPositioner({
    cellMeasurerCache: cache,
    columnCount: 3,
    columnWidth: 120,
    spacer: 10
  })

  function cellRenderer ({ index, key, parent, style }) {

    const datum = list[index]
  
    return (
      <CellMeasurer
        cache={cache}
        index={index}
        key={key}
        parent={parent}
      >
        <div style={style}>
            <div style={{border:'1px solid red',width:'100px',height:'100px'}}>
                    <img
                    src={datum.source}
                    style={{
                    height: '80px',
                    width: '80px'
                    }}
                />
                <h4>{datum.caption}</h4>
            </div>
        
        </div>
      </CellMeasurer>
    )
  }
  
  export default class extends Component{
    render(){
        return (
            <>
                  <Masonry
                        cellCount={list.length}
                        cellMeasurerCache={cache}
                        cellPositioner={cellPositioner}
                        cellRenderer={cellRenderer}
                        height={500}
                        width={300}
                        style={{border:'1px solid #ccc',margin: '10px'}}
                    />
            </>
        )
    }
    }