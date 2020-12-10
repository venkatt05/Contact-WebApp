import React from "react";
import "../CSS/CardCss.css";
import image from "../images/img_avatar.png";

export default function Contact(props) {
  const phone = "tell:+91 " + props.contact.phone;
  const mailTo = "mailto:" + props.contact.email;

  return (
    <div className="card">
      <img src={image} alt="avatar" style={{ width: "100%" }} />
      <div className="container">
        <h3>{props.contact.name}</h3>
        <p>
          {props.contact.phone}
          <a href={phone}>Call</a>
        </p>
        <p>
          {props.contact.email} <a href={mailTo}>Mail</a>
        </p>
        <button onClick={props.delete} value={props.contact.phone}>
          Delete
        </button>
      </div>
    </div>
  );
}
