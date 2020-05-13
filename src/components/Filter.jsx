import React from 'react';

class Filter extends React.Component {
  render() {
    const { filter } = this.props;

    return (
      <select value={filter} onChange={this.handleChange}>
        <option value="all">All</option>
        <option value="uncompleted">Uncompleted</option>
        <option value="completed">Completed</option>
      </select>
    );
  }

  handleChange = (e) => {
    this.props.onChange(e.currentTarget.value);
  };
}

export default Filter;
