import React, { Component } from "react";

export default class Hello extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.header}</h1>
        <h2>Good night, {this.props.username}!</h2>
        <p>Your age is {this.props.age}</p>
        {this.props.isLoggedin && (
          <button onClick={this.props.logout}>You got me</button>
        )}
      </div>
    );
  }
}
