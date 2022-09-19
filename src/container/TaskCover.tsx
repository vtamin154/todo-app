import React, { Component } from 'react';

interface Props {
  todoList: [{ todo: string; status: boolean }];
  setStatus: any;
  removeTodo: any;
}

export class TaskCover extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    // console.log(this.props.todoList);
    return (
      <div>
        <ul className="listTodo">
          {this.props.todoList.length > 0 &&
            this.props.todoList.map((item, index) => (
              <li key={index}>
                <label
                  className={item.status ? 'done' : 'not'}
                  onClick={() => this.props.setStatus(index)}
                >
                  {index + 1}. {item.todo}
                </label>
                <i
                  className={`fa-solid fa-trash display`}
                  onClick={() => this.props.removeTodo(index)}
                ></i>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default TaskCover;
