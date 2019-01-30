import React, { Component } from 'react';

class ToDo extends Component {

  deleteTodo(e) {
    e.preventDefault()
    this.props.deleteTodo(this.props.description)

  }
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete }/>
        <span>{ this.props.description }</span>
        <button className="deleteTask" onClick={ (e) => this.deleteTodo(e)}>DELETE</button>
        {() => this.deleteTodo(this.props.description)}
      </li>
    );
  }
}

export default ToDo;
