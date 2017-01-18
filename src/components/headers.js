import React, {Component} from "react";
import TextField from "material-ui/TextField/TextField";

class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {key:"", val:""};
  }

  onKeyFocus(key) {
    this.props.onKeyFocus(key);
  }
  onKeyChange(key, event) {
    console.log("headers onKeyChange");
    this.props.onKeyChange(key, event.target.value);
  }
  onValChange(event) {
    this.props.onValChange(event.target.value);
  }
  onCrossButtonClick(key) {
    this.props.onCrossButtonClick(key);
  }

  render() {
    var header_style = {
      width: '40%',
      marginRight: 40,
      marginBottom: 20
    };
    var rowList = this.props.headers.map((header) => {
      return (
        <div key={header.key}>
          <TextField onChange={event=>this.onKeyChange(header.key, event)}
                     hintText="key" 
                     onFocus={event=>this.onKeyFocus(header.key)}
                     value={header.left}
                     style={header_style} />
          <TextField onChange={event=>this.onValChange(event)}
                     hintText="value" 
                     value={header.right}
                     style={header_style} />
          <button onClick={() => this.onCrossButtonClick(header.key)}
                  type="button" 
                  className="btn btn-default btn-sm">
            <span className="glyphicon glyphicon-remove" aria-hiden="true"/>
          </button>
        </div>
      );
    });
    return (
      <div>
        {rowList}
      </div>
    );
  }
}

export default Headers;
