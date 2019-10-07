import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {
  const items = ['Learn React', 'Build Awesome App'];
  return (
      <ul>
        {/*{ items.map((item) => <li>{item}</li>) }*/}
        <li><TodoListItem label='Build React App'
                          important/></li>
        <li><TodoListItem label='Grow an abs'/></li>
        <li><TodoListItem label='Achieve level 7'/></li>
      </ul>
  )
};

export default  TodoList;