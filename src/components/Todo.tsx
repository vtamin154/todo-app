import React, { Component } from 'react';
import Form from '../container/Form';
import TaskCover from '../container/TaskCover';
import Filter from './Filter';

type TodoProps = {
  todo: string;
  todoList: [{ todo: string; status: boolean }];
  // todoList: { todo: string; status: boolean }[];
  filter: string;
};

class Todo extends Component {
  state: TodoProps;
  constructor(props: TodoProps) {
    super(props);
    this.state = {
      todo: '',
      todoList: [{ todo: 'Learning English', status: false }],
      // todoList: [],
      filter: 'all',
    };
  }

  addTodo = (todo: string): void => {
    this.setState(
      {
        todoList: [...this.state.todoList, { todo: todo, status: false }],
      }
      // (pre) => ({
      //   todoList: [...pre.todoList, { todo: todo, status: false }],
      // })
    );
  };

  removeTodo = (index: number) => {
    const newList = this.state.todoList
      .slice(0, index)
      .concat(this.state.todoList.slice(index + 1));
    this.setState({
      todoList: [...newList],
    });
  };

  setStatus = (index: number) => {
    const todoItem = this.state.todoList[index];
    todoItem.status = !todoItem.status;

    const newList = this.state.todoList
      .slice(0, index)
      .concat(todoItem)
      .concat(this.state.todoList.slice(index + 1));
    this.setState({
      todoList: [...newList],
    });

    // console.log(this.state.todoList);
  };
  getFilter = (e: any) => {
    const filter = e.target.value;
    this.setState({ filter: filter });
  };

  getListFilter = (filter: string) => {
    switch (filter) {
      case 'done':
        return [...this.state.todoList.filter((item) => item.status === true)];
      case 'todo':
        return [...this.state.todoList.filter((item) => item.status === false)];
      case 'all':
        return [...this.state.todoList];
      // default:
      //   return [...this.state.todoList];
    }
  };
  render() {
    let newList = this.getListFilter(this.state.filter);

    return (
      <div className="todo">
        <Form addTodo={this.addTodo} todo={this.state.todo} />
        <div className='tasks'>
          <Filter getFilter={this.getFilter} filter={this.state.filter} />
          <TaskCover
            todoList={newList as [{ todo: string; status: boolean }]}
            setStatus={this.setStatus}
            removeTodo={this.removeTodo}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
