import React, {Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class OutputBody extends Component {
  constructor(props) {
    super(props);
    this.state = {result: this.props.result};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({result: nextProps.result});
  }

  render() {
    var style = {
      fontSize: 13,
      workBreak: 'break-all',
      overflow: 'scroll'
    };
    return (
      <div id = "output" style={style}>
        <Tabs>
          <TabList>
            <Tab>Raw</Tab>
            <Tab>Pretty</Tab>
            <Tab>Preview</Tab>
          </TabList>
          <TabPanel>
            {this.state.result}
          </TabPanel>
          <TabPanel>
            Ho
          </TabPanel>
          <TabPanel>
            <div dangerouslySetInnerHTML={{__html: this.state.result}} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default OutputBody;
