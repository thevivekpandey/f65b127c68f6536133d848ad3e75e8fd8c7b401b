import React, {Component} from "react";
import FlatButton from "material-ui/FlatButton";
import MenuItem from "material-ui/MenuItem";
import Select from 'react-select';

class Methods extends Component {
  constructor(props) {
    super(props);
    this.logChange = this.logChange.bind(this);
    this.state = {"method": "GET"};
  }

  logChange(value) {
    console.log(value);
    this.setState({method: value.value});
  }
  render() {
    const options = [
      {value: 'GET', label: 'GET'},
      {value: 'POST', label: 'POST'},
      {value: 'PUT', label: 'PUT'},
      {value: 'PATCH', label: 'PATCH'},
      {value: 'DELETE', label: 'DELETE'}
    ];
    return (
      <Select
        options={options}
        name="name"
        value= {this.state.method}
        onChange={this.logChange}
      />
    );
  }
}

export default Methods;
