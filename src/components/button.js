import React, {Component} from "react";
import RaisedButton from "material-ui/RaisedButton";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  doRequest() {
    this.props.doRequest();
  }

  render() {
    return (
      <RaisedButton label="Submit" onClick={this.doRequest.bind(this)}/>
    );
  }
}

export default Button;
