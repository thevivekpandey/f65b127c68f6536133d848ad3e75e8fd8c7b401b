import React from 'react';

const Time = ({time}) => {
  var style = {float: "right",
               borderRadius: 5,
               fontSize: 15,
               padding: 5,
               backgroundColor: "white",
               height: 40
              };
  var displayStatus = typeof time === "undefined" ? "none" : "block";
  style.display = displayStatus;
  
  return (
    <div style={style}>{time}ms</div>
  );
};

export default Time;
