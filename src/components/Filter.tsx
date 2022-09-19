import React, { Component } from 'react'

interface Props{
  getFilter:any,
  filter:string
}

export class Filter extends Component <Props> {
  constructor(props: Props){
    super(props);
  }
  render() {
    return (
      <div className='filter'>
        <label htmlFor="">List</label>
          <select onChange={(e) => this.props.getFilter(e)}>
            <option value="all">All</option>
            <option value="todo">To do</option>
            <option value="done">Done</option>
          </select>
      </div>
    )
  }
}

export default Filter