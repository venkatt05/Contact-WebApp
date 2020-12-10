import React from "react";

function Inputs(props) {
  return (
    <form onSubmit={props.Add} style={{ margin: "20px" }}>
      <label htmlFor="contactName"> Name </label>
      <input type="text" name="contactName" required />
      <label htmlFor="emailId"> Email </label>
      <input type="email" name="emailId" />
      <label htmlFor="phoneNumber"> Phone </label>
      <input type="number" name="phoneNumber" required />
      <input type="submit" value="ADD" />
    </form>
  );
}

export default Inputs;
