import React, {Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OutputBody from "./output_body";
import OutputHeaders from "./output_headers";

class OutputTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {result: this.props.result};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({result: nextProps.result});
  }

  render() {
    var style = {
      backgroundColor: 'yellow',
    };
    return (
      <Tabs>
        <TabList>
          <Tab> Body </Tab>
          <Tab> Headers </Tab>
        </TabList>
        <TabPanel>
          <OutputBody result={this.state.result.data}/>
        </TabPanel>
        <TabPanel>
          <OutputHeaders result={this.state.result.headers}/>
        </TabPanel>
      </Tabs>
    );
  }
}

export default OutputTabs;
