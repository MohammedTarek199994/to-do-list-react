import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-title">
        <h1>{props.title}</h1>
      </div>
      <hr />
      <div className="card-content">
        <p>{props.content}</p>
      </div>
      <hr />
      <div className="card-buttons">
        <button className="delete-button" onClick={props.onDelete}>
          Delete
        </button>
        <button className="update-button" onClick={props.onUpdate}>
          Update
        </button>
      </div>
    </div>
  );
}

export default Card;
