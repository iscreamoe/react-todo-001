import React from 'react';

class CheckAll extends React.Component {
  render() {
    const { allCompleted } = this.props;

    return (
      <label>
        <input
          type="checkbox"
          checked={allCompleted}
          onChange={this.handleChange}
        />
        Mark all {allCompleted ? 'completed' : 'uncompleted'}
      </label>
    );
  }

  handleChange = () => {
    const { onChange, allCompleted } = this.props;
    onChange(!allCompleted);
  };
}

export default CheckAll;
