import React, {Component} from "react";
import FlatButton from "material-ui/FlatButton";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  doRequest() {
    this.props.doRequest();
  }

  render() {
    return (
      <FlatButton label="xyz" onClick={this.doRequest.bind(this)}/>
    );
  }
}

export default Button;
