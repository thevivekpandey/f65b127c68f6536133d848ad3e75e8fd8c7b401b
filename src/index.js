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

const SERVER_BASE_URL = "http://127.0.0.1:8000/run"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {url: "", result: ""};
  }

  doRequest() {
    var self = this;
    axios({
     url: SERVER_BASE_URL + "?url=" + this.state.url + "&method=get"
    }).then(function(response) {
      self.setState({result: response.data})
    }).catch(function(error) {
    })
  }

  onUrlChange(url) {
    this.setState({url: url, result: "dummy 2"});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <div className="first_line">
            <Url onUrlChange={url => this.onUrlChange(url)} />
            <Button doRequest={() =>this.doRequest()} />
          </div>
          <Headers />
          <div>
            <Output result={this.state.result}/>
            <Methods />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
