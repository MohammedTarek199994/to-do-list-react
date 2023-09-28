import React from "react";

function Button(props) {
  const buttonStyle = { 
    backgroundColor: props.backgroundColor,
    width : props.width
  }
  return (
    <div className="card-buttons">
      <button className="update-button" style={buttonStyle} type="submit" onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
