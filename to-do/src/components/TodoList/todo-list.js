import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../TodoListItem';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(todo => {
    const { id } = todo;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...todo}
          onDeleted={onDeleted}
          onToggleImportant={onToggleImportant}
          onToggleDone={onToggleDone}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
};

export default TodoList;

/*
 * const data = {a: { b: { c: { g: 7} }}};
 * function getProperty(...rest) {
 *   rest.
 * }
 *
 * getProperty("a.b.c.g")
 *
 * -------
 * 7
 *
 * getProperty("a.b.d")
 *
 *  undefined;
 *
 * */

/*
 * const data = [{ name: "foo", value: 1 }, { name: "foo", value: 2 }, {
 *  name: "bar", value: 7 }]
 *
 * collectByName(name, data)
 *
 *  ------
 *
 *  {
 *   foo: [1, 2],
 *   bar: [7]
 * }
 *
 * */
