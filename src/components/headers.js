import React, {Component} from "react";
import TextField from "material-ui/TextField/TextField";

class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {key:"", val:""};
  }

  onKeyChange(event) {
    this.props.onKeyChange(event.target.value);
  }
  onValChange(event) {
    this.props.onValChange(event.target.value);
  }

  render() {
    var header_style = {
      width: '40%',
      marginRight: 40,
      marginBottom: 20
    };
    return (
      <div>
        <div>
          <TextField onChange={event=>this.onKeyChange(event)}
                     hintText="key" 
                     style={header_style} />
          <TextField onChange={event=>this.onValChange(event)}
                     hintText="value" 
                     style={header_style} />
        </div>
      </div>
    );
  }
}

export default Headers;
