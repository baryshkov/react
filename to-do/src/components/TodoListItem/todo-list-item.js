import React from 'react';
import './todo-list-item.css';

// const TodoListItem = ({ label, important = false }) => {

//   return (

//   );
// };

class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
    // if (this.state.done) {
    //   this.setState({ done: false });
    // } else {
    //   this.setState({ done: true });
    // }
  };

  onImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
    // if (!this.state.important) {
    //   this.setState({ important: true });
    // } else {
    //   this.setState({ important: false });
    // }
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash" />
        </button>
        <button
          className="btn btn-outline-success btn-sm float-right"
          type="button"
          onClick={this.onImportant}
        >
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}

export default TodoListItem;
