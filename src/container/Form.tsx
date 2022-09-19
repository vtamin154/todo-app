import React, { Component } from 'react';
// import Input from '../components/Input';

interface IFormSubmit {
  todo: string;
  addTodo: any;
}

export class Form extends Component<IFormSubmit, { input: string }> {
  constructor(props: IFormSubmit) {
    super(props);
    this.state = {
      input: this.props.todo,
    };
  }
  render() {
    return (
      <form action="" className="form">
        <input
          type="text"
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            this.props.addTodo(this.state.input);
            this.setState({ input: '' });
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    );
  }
}

export default Form;
