import React, { Component, PureComponent } from "react";
// React15.3 PureComponent
// React 16.6.0 React.memo

class Person extends PureComponent {
    componentWillReceiveProps(newProps) {
        console.log(`我新的props的name是${newProps.name}，age是${newProps.age}。我以前的props的name是${this.props.name}，age是${this.props.age}是我要re-render了`);
    }
    // shouldComponentUpdate(newProps){
    //     if(newProps.name!==this.props.name){
    //         return true;
    //     }
    //     if(newProps.age!==this.props.age){
    //         return true;
    //     }
    //     return false;
    // }
    render() {
        const { name, age } = this.props;
        console.warn('render')
        return (
            <div>
                <span>姓名:</span>
                <span>{name}</span>
                <span> age:</span>
                <span>{age}</span>
            </div>
        )
    }
}
// const  Person = React.memo(({name,age})=>{
//     console.warn('render');
    
//     return (
//         <div>
//             <span>姓名:</span>
//             <span>{name}</span>
//             <span> age:</span>
//             <span>{age}</span>
//         </div>
//     )
// })

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            persons: []
        }
    }
    _renderPerson=(person,index)=>{
        console.log('render')
        return (
            <div key={index}>
                <span>姓名:</span>
                <span>{person.name}</span>
                <span> age:</span>
                <span>{person.age}</span>
            </div>
        )
    }
    render() {
        const { name, age, persons } = this.state
        return (
            <div>
                <span>姓名:</span><input value={name} name="name" onChange={this._handleChange.bind(this)}></input>
                <span>年龄:</span><input value={age} name="age" onChange={this._handleChange.bind(this)}></input>
                <input type="button" onClick={this._handleClick.bind(this)} value="确认"></input>
                {persons.map((person, index) => (
                    <Person key={index} name={person.name} age={person.age}></Person>
                //   this._renderPerson(person,index)
                ))}
            </div>
        )
    }
    _handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    _handleClick() {
        const { name, age } = this.state
        this.setState({
            name: "",
            age: "",
            persons: this.state.persons.concat([{ name: name, age: age }])
        })

    }
}

