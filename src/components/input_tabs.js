import React, {Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class InputTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {result: this.props.result};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({result: nextProps.result});
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
             Input 1
          </TabPanel>
          <TabPanel>
             Input 2
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default InputTabs;
