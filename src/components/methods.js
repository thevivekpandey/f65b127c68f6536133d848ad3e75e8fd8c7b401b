import React, {Component} from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

class Methods extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], value: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <DropDownMenu value="abc" onChange={this.handleChange}>
        <MenuItem key="1" value="GET" primaryText="GET"/>
        <MenuItem key="2" value="POST" primaryText="POST"/>
        <MenuItem key="3" value="POST" primaryText="POST"/>
        <MenuItem key="4" value="POST" primaryText="POST"/>
        <MenuItem key="5" value="POST" primaryText="POST"/>
        <MenuItem key="6" value="POST" primaryText="POST"/>
      </DropDownMenu>
    );
  }
}

export default Methods;
