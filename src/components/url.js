import React, {Component} from "react";

class Url extends Component {
  constructor(props) {
    super(props);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.state = {url: ""};
  }

  render() {
    return (
      <div>
        <input size="50"
          value={this.state.term}
          onChange={event => this.onUrlChange(event.target.value)} />
      </div>
    );
  }

  onUrlChange(url) {
    this.props.onUrlChange(url);
  }
}

export default Url;

