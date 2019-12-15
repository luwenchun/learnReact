import React, { Component, PureComponent } from "react";

// shouldComponentUpdate
import { Map,List,is } from "immutable";
class Comment extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   let propsonArr=List(this.props.otherState);
  //   let nextsonArr=List(nextProps.otherState);
  //   // console.log(nextsonArr)
  //        if (propsonArr.equals(nextsonArr)) {
  //         return true;
  //       }  
  //       return false;
  // }
  render() {
    console.log("render");
    return (
      <div>
        <p>1</p>
        {/* <p>------{this.props.author}</p> */}
      </div>
    );
  }
}

const RenderComment = React.memo(({ body, author }) => {
  console.log("use memo render function");

  return (
    <div>
      <p>{body}</p>
      <p>------{author}</p>
    </div>
  );
});



export default class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      otherState:{ body: "react is very good", author: "facebook" }
    };
  }
  _renderComment(c){
    console.log('render_function')
    return (
      <div>
        <p>{c.body}</p>
        <p>------{c.author}</p>
      </div>
    )
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        comments: [
          { body: "react is very good", author: "facebook" },
          { body: "vue is very good", author: "youyuxi" }
        ]
      });
    }, 1000);
  }

  render() {
    let comments = Object.assign([],[
      { body: "react is very good", author: "facebook" },
      { body: "vue is very good", author: "youyuxi" }
    ])
    return (
      <div>
         {/* {this._renderComment(this.state.otherState)} */}
         {/* <RenderComment {...this.state.otherState}/> */}
         {/* <RenderComment otherState={this.state.otherState}/> */}
        {/* {this.state.comments.map((c, i) => (
          <Comment key={i} {...c} />
        ))} */}
        <Comment  otherState={comments}/>
      </div>
    );
  }
}
