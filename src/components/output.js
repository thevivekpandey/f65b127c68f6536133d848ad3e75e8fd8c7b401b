import React, {Component} from "react";

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {result: this.props.result}
    console.log(this.state);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({result: nextProps.result})
  }

  componentDidUpdate() {
    document.getElementById("output").value = this.state.result;
  }
  render() {
    console.log("I am rendering");
    console.log(this.state.result);
    return (
      <textarea id = "output" rows="20" cols="120">
      </textarea>
    );
  }
}

export default Output;
