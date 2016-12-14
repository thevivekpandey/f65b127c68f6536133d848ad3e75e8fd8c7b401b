import React, {Component} from "react";
import TextField from "material-ui/TextField/TextField";

class Url extends Component {
  constructor(props) {
    super(props);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.state = {url: ""};
  }

  render() {
    const style = {marginTop: -30, width: 800};
    return (
      <div>
        <TextField hintText="Enter URL here"
                   floatingLabelText="Enter URL here"
                   style={style}
                   value={this.state.term}
                   onChange={event=>this.onUrlChange(event.target.value)}
                  />
      </div>
    );
  }

  onUrlChange(url) {
    this.props.onUrlChange(url);
  }
}

export default Url;

