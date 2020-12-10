import React, { Component } from "react";
import Contact from "./contactComponent";
import Head from "./headComponent";
import Inputs from "./InputComponent";

class Container extends Component {
  state = { contact: [] };


  checkContactAlreadyExists = (phoneNumber) => {
    let isExists = false;
    this.state.contact.forEach((contact) => {
      if (contact.phone === phoneNumber) {
        isExists = true;
      }
    });
    return isExists;
  };

  addContact = (event) => {
    event.preventDefault();

    if (!this.checkContactAlreadyExists(event.target[2].value)) {
      this.setState({
        contact: [
          ...this.state.contact,
          {
            name: event.target[0].value,
            email: event.target[1].value,
            phone: event.target[2].value,
          },
        ],
      });
    } else {
      alert("Contact already exists !!");
    }
  };

  deleteContact = (event) => {
    console.log("delete button clicked " + event.target.value);
    const newData = this.state.contact.filter(
      (contact) => contact.phone !== event.target.value
    );
    this.setState({ contact: [...newData] });
  };

  render() {
    return (
      <>
        <Head />
        <Inputs Add={this.addContact} />
        {this.state.contact.map((data) => (
          <Contact
            key={data.phone}
            delete={this.deleteContact}
            contact={data}
          />
        ))}
      </>
    );
  }
}

export default Container;
