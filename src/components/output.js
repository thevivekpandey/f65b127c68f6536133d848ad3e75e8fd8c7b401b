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
    var style = {
      fontSize: 13,
      workBreak: 'break-all',
      overflow: 'scroll'
    };
    return (
      <div id = "output" style={style}>
        {this.state.result}
      </div>
    );
  }
}

export default Output;
