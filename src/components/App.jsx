import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' />
          <button>Add</button>
        </form>

        <label>
          <input type='checkbox' />
          All Completed!
        </label>

        <slect>
          <opiton>All</opiton>
          <opiton>Uncompleted</opiton>
          <opiton>Completed</opiton>
        </slect>

        <ul>
          <li>
            <label>
              <input type='checkbox' />
              Workout
            </label>
            <button>Edit</button>
            <button>Delete</button>
          </li>
          <li>
            <label>
              <input type='checkbox' />
              foobar
            </label>
            <button>Edit</button>
            <button>Delete</button>
          </li>
          <li>
            <label>
              <input type='checkbox' />
              hoge
            </label>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;