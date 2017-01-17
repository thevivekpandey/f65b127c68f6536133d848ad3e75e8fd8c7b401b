import React, {Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OutputBody from "./output_body";
import OutputHeaders from "./output_headers";
import Status from "./status";
import Time from "./time";

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {result: this.props.result};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({result: nextProps.result});
    console.log(this.state.result);
  }

  render() {
    return (
      <div>
        <Status status={this.state.result.status}/>
        <Time time={this.state.result.interval}/>
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
      </div>
    );
  }
}

export default Output;
