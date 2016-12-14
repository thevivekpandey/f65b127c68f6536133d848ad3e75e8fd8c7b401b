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
    const style = {marginLeft: 30};
    return (
      <RaisedButton label="SEND" 
                    style={style}
                    onClick={this.doRequest.bind(this)}/>
    );
  }
}

export default Button;
