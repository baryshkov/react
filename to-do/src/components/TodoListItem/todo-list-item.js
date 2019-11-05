import React from 'react';
import PropTypes from 'prop-types';
import './todo-list-item.css';

const TodoListItem = props => {
  const { id, label, onDeleted, onToggleImportant, onToggleDone, important, done } = props;

  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }

  const onImportantClick = () => {
    onToggleImportant(id);
  };

  const onDeleteClick = () => {
    onDeleted(id);
  };

  const onToggleDoneClick = () => {
    onToggleDone(id);
  };

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        role="button"
        tabIndex={0}
        onClick={onToggleDoneClick}
        onKeyDown={onToggleDoneClick}
      >
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleteClick}
      >
        <i className="fa fa-trash" />
      </button>
      <button
        className="btn btn-outline-success btn-sm float-right"
        type="button"
        onClick={onImportantClick}
      >
        <i className="fa fa-exclamation" />
      </button>
    </span>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  important: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
};

export default TodoListItem;
