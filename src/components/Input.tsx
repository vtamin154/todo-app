import React, { Component } from 'react';

interface Props{
    data: string
}

export class Input extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
        data: ''
    }
  }
  render() {
    return (
      <div>
        <input type="text"/>
      </div>
    );
  }
}

export default Input;
