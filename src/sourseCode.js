
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
 
/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    // If a component has string refs, we will assign a different object later.
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
}
 
const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
Object.assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;



shouldComponentUpdate(nextProps) {
    let propsonArr=List(this.props.otherState);
    let nextsonArr=List(nextProps.otherState);
    console.log(nextsonArr)
         if (propsonArr.equals(nextsonArr)) {
          return true;
        }  
        return false;
  }


  import { Map,List,is } from "immutable";


  let comments = Object.assign([],[
    { body: "react is very good", author: "facebook" },
    { body: "vue is very good", author: "youyuxi" }
  ])



  const jsx = (
  <div id="demo">
    <span>hi</span>
    <Comp name="kaikeba"></Comp>
    <Comp2></Comp2>
  </div>
)


console.log(jsx);


render(jsx, document.getElementById('root'));


// import React from './kkreact'
// import {render} from './kkreact/ReactDOM';