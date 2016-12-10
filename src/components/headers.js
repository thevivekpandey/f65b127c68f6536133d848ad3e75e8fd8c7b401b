import React, {Component} from "react";
import TextField from "material-ui/TextField/TextField";

class Headers extends Component {
  constructor(props) {
    super(props);
  }
  doRequest() {
    this.props.doRequest();
  }

  render() {
    var header_style = {
      width: 300,
      marginRight: 20
    };
    return (
      <div>
        <div>
          <TextField hintText="key" style={header_style} />
          <TextField hintText="value" style={header_style} />
        </div>
        <div>
          <TextField hintText="key" style={header_style} />
          <TextField hintText="value" style={header_style} />
        </div>
        <div>
          <TextField hintText="key" style={header_style} />
          <TextField hintText="value" style={header_style} />
        </div>
      </div>
    );
  }
}

export default Headers;
