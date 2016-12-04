import React, {Component} from "react";
import ReactDOM from "react-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import axios from "axios";

import Url from "./components/url";
import Methods from "./components/methods";
import Button from "./components/button";
import Output from "./components/output";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {url: ''};
  }

  doRequest() {
    alert(this.state.url);
    $.ajax({
      "dataType": "jsonp",
      "url": this.state.url
    }).done(function(data) {
      alert("done");
    }).fail(function(jqhr) {
      alert("failed");
    });
  }

  onUrlChange(url) {
    this.setState({url});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Button doRequest={() =>this.doRequest()} />
          <Url onUrlChange={url => this.onUrlChange(url)} />
          <Output />
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
