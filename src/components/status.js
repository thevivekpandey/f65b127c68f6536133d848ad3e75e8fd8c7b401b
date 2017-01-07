import React from 'react';

const Status = ({status}) => {
  var style = {float: "right",
               borderRadius: 5,
               color: "white",
               fontSize: 23,
               padding: 5
              };
  
  let color = "";
  switch (Math.floor(parseInt(status) / 100)) {
    case 0:
    case 1: color = "gray";
            break;
    case 2: color = "green";
            break;
    case 3: color = "orange";
            break;
    case 4: color = "orange";
            break;
    case 5: color = "red";
            break;
    default: color = "gray";
  }
  style.backgroundColor = color;

  var displayStatus = typeof status === "undefined" ? "none" : "block";
  style.display = displayStatus;
  return (
    <div style={style}>{status}</div>
  );
};

export default Status;
