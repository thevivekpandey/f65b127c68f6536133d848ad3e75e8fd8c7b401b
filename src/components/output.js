import React, {Component} from "react";

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {result: this.props.result}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({result: nextProps.result})
  }

  render() {
    return (
      <div id = "output">
        {this.state.result}
      </div>
    );
  }
}

export default Output;
