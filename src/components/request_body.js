import React, {Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class RequestBody extends Component {
  constructor(props) {
    super(props);
  }
  onPostBodyChange(value) {
    console.log("From request body");
    this.props.onPostBodyChange(value);
  }
  render() {
    const textAreaStyle = {
      width: "100%",
      height: 300
    };
    return (
      <textarea style={textAreaStyle} 
                onChange={event => this.onPostBodyChange(event.target.value)}/>
    );
  }
}
export default RequestBody;
