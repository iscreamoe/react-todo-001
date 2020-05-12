import React from 'react';

import Form from './Form';
import Todo from './Todo';

let currentId = 0;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />

        <label>
          <input type="checkbox" />
          All Completed!
        </label>

        <select>
          <option>All</option>
          <option>Uncompleted</option>
          <option>Completed</option>
        </select>

        <ul>
          {this.state.todos.map(({ id, text }) => (
            <li key={id}>
              <Todo text={text} />
            </li>
          ))}
        </ul>
        <button>Delete All Completed</button>
      </div>
    );
  }

  handleSubmit = (text) => {
    const newTodo = {
      id: currentId,
      text,
    };
    const newTodos = [...this.state.todos, newTodo];
    this.setState({ todos: newTodos });
    currentId++;
  };
}

export default App;
