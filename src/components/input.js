import React, {Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Headers from "./headers";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab> Headers </Tab>
            <Tab> Body </Tab>
          </TabList>
          <TabPanel>
            <Headers headers = {this.props.headers}
                     onKeyFocus={key => this.props.onKeyFocus(key)}
                     onKeyChange={key => this.props.onKeyChange(key)}
                     onValChange={val => this.onValChange(val)} />
          </TabPanel>
          <TabPanel>
             Input 2
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Input;
