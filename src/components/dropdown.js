import React, {Component} from "react";
import FlatButton from "material-ui/FlatButton";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

class Methods extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <DropDownMenu value={2}>
        <MenuItem key="1" value={1} primaryText="GET"/>
        <MenuItem key="2" value={2} primaryText="POST"/>
      </DropDownMenu>
    );
  }
}

export default Methods;
