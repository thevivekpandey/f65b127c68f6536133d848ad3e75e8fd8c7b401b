import React, {Component} from "react";

class OutputHeaders extends Component {
  constructor(props) {
    super(props);
    this.state = {result: this.props.result};
    console.log(this.state.result);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({result: nextProps.result});
  }

  render() {
    var state = this.state;
    var style = {
      fontSize: 13,
      workBreak: 'break-all',
      overflow: 'scroll'
    };
    var tstyle = {
      marginLeft: 20,
      marginTop: 15
    };
    var keyList = Object.keys(this.state.result).map(function(key) {
      console.log(key);
      return <tr key={key}>
               <th width="15%">{key}</th>
               <td width="85%">{state.result[key]}</td>
             </tr>;
    });
    return (
      <div id = "output" style={style}>
        <table style={tstyle}>
          <tbody>
            {keyList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OutputHeaders;
