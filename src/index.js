import React, {Component} from "react";
import ReactDOM from "react-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import axios from "axios";

import Url from "./components/url";
import Methods from "./components/dropdown";
import Button from "./components/button";
import Output from "./components/output";
import Input from "./components/input";

//const SERVER_BASE_URL = "http://www.f65b127c68f6536133d848ad3e75e8fd8c7b401b.run/run";
const SERVER_BASE_URL = "http://127.0.0.1:8000/run";
class App extends Component {
  constructor(props) {
    super(props);
    var headers = [{"key": 0, "left": "", "right": ""}];
    this.state = {url: "", result: "", headers: headers, method: "GET"};
  }

  doRequest() {
    var self = this;
    var url = this.state.url;
    var key = this.state.key;
    var val = this.state.val;
    var joinedHeaders = [];
    this.state.headers.forEach(function(header) {
      if (header.left !== "" && header.right !== "") {
        joinedHeaders.push(header.left + "QQQ" + header.right);
      }
    });
    var concatHeaders = joinedHeaders.join("|||");
    console.log("see header");
    console.log(concatHeaders);
    var method = this.state.method;
    if (concatHeaders == "") {
      console.log("without header");
      axios({
        url: SERVER_BASE_URL + "?url=" + url + "&method=" + method
      }).then(function(response) {
        self.setState({result: response.data});
      }).catch(function(error) {
      });
      console.log("Done");
    } else {
      console.log("with header");
      axios({
       url: SERVER_BASE_URL + "?url=" + url + "&method=" + method,
       headers: concatHeaders
      }).then(function(response) {
        self.setState({result: JSON.stringify(response.data)});
      }).catch(function(error) {
      });
      console.log("Done");
    }
  }

  onUrlChange(url) {
    this.setState({url});
  }
  onLeftFocus(idx) {
    if (idx == this.state.headers.length - 1) {
      var headers = this.state.headers;
      headers.push({key: idx + 1, left: "", right: ""});
      this.setState({headers});
    }
  }
  onLeftChange(idx, left) {
    var headers = this.state.headers;
    headers[idx].left = left;
    this.setState({headers});
  }
  onRightChange(idx, right) {
    var headers = this.state.headers;
    headers[idx].right = right;
    this.setState({headers});
  }
  onCrossButtonClick(idx) {
    var headers = this.state.headers;
    if (headers.length == 1) {
      /* We do not find to get rid of header if there is only one remaining.
         We will just reset the key/value pair in this header. */
      headers[0].left = "";
      headers[0].right = "";
      this.setState({headers});
      return;
    }
    headers.splice(idx, 1);
    headers.map((header, index) => {
      header.key = index;
      return header;
    });
    this.setState({headers});
    console.log("after");
    console.log(this.state.headers);
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
              <Methods onMethodChange={method => this.onMethodChange(method)} />
            </div>
            <Url onUrlChange={url => this.onUrlChange(url)} />
            <Button doRequest={() =>this.doRequest()} />
          </div>
          <Input headers = {this.state.headers}
                 onCrossButtonClick={(key) => this.onCrossButtonClick(key)}
                 onLeftFocus={key => this.onLeftFocus(key)}
                 onLeftChange={(key, left) => this.onLeftChange(key, left)}
                 onRightChange={(key, right) => this.onRightChange(key, right)} />
          <Output result={this.state.result}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.f6_outer'));
