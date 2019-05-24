import React, { Component, PureComponent } from "react";

// shouldComponentUpdate
// 手写组件更新优化，适合react16之前的版本
// class Comment extends Component {
//   shouldComponentUpdate(nextProps) {
    
//     if (
//       nextProps.body === this.props.body &&
//       nextProps.author === this.props.author
//     ) {
//       return false;
//     }
//     return true;
//   }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <p>{this.props.body}</p>
//         <p>------{this.props.author}</p>
//       </div>
//     );
//   }
// }

// class Comment extends PureComponent {

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <p>{this.props.body}</p>
//         <p>------{this.props.author}</p>
//       </div>
//     );
//   }
// }

const Comment = React.memo(({ body, author }) => {
  console.log("render");

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
      comments: []
    };
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
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} {...c} />
        ))}
      </div>
    );
  }
}
