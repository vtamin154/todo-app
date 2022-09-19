import React, { Component } from 'react';

export class Heading extends Component {
  render() {
    return (
      <div className="heading">
        <h1>Let's add what you have to do!</h1>
        Fill the input and click button or "Enter" to add a new task into the list. To mark as completed, just click directly to the task
      </div>
    );
  }
}

export default Heading;
