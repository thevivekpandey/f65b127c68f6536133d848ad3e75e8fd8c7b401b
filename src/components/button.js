import React, {Component} from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  doRequest() {
    console.log("button pressed");
    this.props.doRequest();
  }

  render() {
    const style = {marginLeft: 30};
    return (
      <button className="btn btn-default" 
              style={style}
              onClick={() => this.props.doRequest()}>Send</button>
    );
  }
}

export default Button;
