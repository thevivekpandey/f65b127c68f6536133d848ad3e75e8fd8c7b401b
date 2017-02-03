import React, {Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Headers from "./headers";
import RequestBody from "./request_body";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const textAreaStyle = {
      width: "100%",
      height: 500 /* Same as the height of #output */
    };
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab> Headers </Tab>
            <Tab> Body </Tab>
          </TabList>
          <TabPanel>
            <Headers headers = {this.props.headers}
                     onCrossButtonClick={(key) => this.props.onCrossButtonClick(key)}
                     onLeftFocus={key => this.props.onLeftFocus(key)}
                     onLeftChange={(key, left) => this.props.onLeftChange(key, left)}
                     onRightChange={(key, right) => this.props.onRightChange(key, right)} />
          </TabPanel>
          <TabPanel>
            <RequestBody onPostBodyChange={(value)=>this.props.onPostBodyChange(value)} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Input;
