import React, {Component} from "react";
import FlatButton from "material-ui/FlatButton";
import MenuItem from "material-ui/MenuItem";
import Select from 'react-select';

class Methods extends Component {
  constructor(props) {
    super(props);
    this.onMethodChange = this.onMethodChange.bind(this);
    this.state = {method: {value: "GET", label: "GET"}};
  }

  onMethodChange(method) {
    this.props.onMethodChange(method.value);
    this.setState({method});
  }
  render() {
    const options = [
      {value: "GET", label: "GET"},
      {value: "POST", label: "POST"},
      {value: "PUT", label: "PUT"},
      {value: "PATCH", label: "PATCH"},
      {value: "DELETE", label: "DELETE"}
    ];
    return (
      <Select
        options={options}
        name="name"
        value= {this.state.method}
        onChange={this.onMethodChange}
        clearable={false}
      />
    );
  }
}

export default Methods;
