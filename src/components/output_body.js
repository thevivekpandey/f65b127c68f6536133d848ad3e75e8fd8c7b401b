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
    const style = {
      fontSize: 15,
      workBreak: "break-all",
      overflow: "scroll",
      fontFamily: "Inconsolata, monospace"
    };
    const textAreaStyle = {
      width: "100%",
      height: 700 /* Same as the height of #output */
    };
    var preview = this.state.result ? 
                  html_beautify(this.state.result, {}): 
                  this.state.result
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
            <textarea style={textAreaStyle} defaultValue={preview} />
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
