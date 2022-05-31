import React from "react";

export default function(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <div className="content">
        <div className="header">
          <strong>{name}</strong>
        </div>
        <div>{email}</div>
      </div>
      <div className="ui right floated">
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "4px", marginBottom: "9px" }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </div>
  );
}
