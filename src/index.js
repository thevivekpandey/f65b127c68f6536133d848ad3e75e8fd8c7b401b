import React, {Component} from "react";
import ReactDOM from "react-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import axios from "axios";

import Url from "./components/url";
import Methods from "./components/dropdown";
import Button from "./components/button";
import Headers from "./components/headers";
import Output from "./components/output";
import OutputTabs from "./components/output_tabs";

//const SERVER_BASE_URL = "http://www.f65b127c68f6536133d848ad3e75e8fd8c7b401b.run/run"
const SERVER_BASE_URL = "http://127.0.0.1:8000/run"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {url: "", result: "", key: "", val: "", method: "GET"};
  }

  doRequest() {
    var self = this;
    var url = this.state.url;
    var key = this.state.key;
    var val = this.state.val;
    var headers = {'headerskey': key + "|||" + val};
    var method = this.state.method;
    console.log("see method");
    console.log(this.state.method);
    if (headers.headerskey == "|||") {
      axios({
       url: SERVER_BASE_URL + "?url=" + url + "&method=" + method
      }).then(function(response) {
        self.setState({result: response.data})
      }).catch(function(error) {
      })
    } else {
      axios({
       url: SERVER_BASE_URL + "?url=" + url + "&method=" + method,
       headers: headers
      }).then(function(response) {
        self.setState({result: JSON.stringify(response.data)})
      }).catch(function(error) {
      })
    }
  }

  onUrlChange(url) {
    this.setState({url});
  }
  onKeyChange(key) {
    this.setState({key})
  }
  onValChange(val) {
    this.setState({val})
  }
  onMethodChange(method) {
    this.setState({method});
  }
  render() {
    const style = {
      width: '100px',
      marginRight: '10px'
    };
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{marginTop: 30}}>
          <div className="first_line">
            <div style={style}>
              <Methods onMethodChange={method => this.onMethodChange(method)}/>
            </div>
            <Url onUrlChange={url => this.onUrlChange(url)} />
            <Button doRequest={() =>this.doRequest()} />
          </div>
          <Headers onKeyChange={key => this.onKeyChange(key)}
                   onValChange={val => this.onValChange(val)} />
          <OutputTabs result={this.state.result}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.f6_outer'));
