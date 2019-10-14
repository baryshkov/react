import React from 'react';
import TodoListItem from '../TodoListItem';
import './todo-list.css';

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map(todo => {
    const { id, ...itemProps } = todo;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
