import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Workout at OrangeTheory', isCompleted: true },
        { description: 'Meditation for 20 minutes', isCompleted: false },
        { description: 'Spanish homework', isCompleted: false },
      ]
    };
  }

  render() {
    return (
      <div className="App">
       <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
