import React from 'react';

class Todo extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <label>
          <input type="checkbox" />
          {text}
        </label>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default Todo;
