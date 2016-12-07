import React, {Component} from "react";

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {result: this.props.result}
    console.log('state is ');
    console.log(this.state);
  }

  componentWillReceiveProps(props) {
    console.log("got props");
    this.setState({result: this.props.result})
    console.log(this.state);
  }

  render() {
    return (
      <textarea rows="20" cols="120" defaultValue={this.state.result}>
      </textarea>
    );
  }
}

export default Output;
