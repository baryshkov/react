import React from 'react';

const TodoListItem = ({ label, important = false }) => {

  const liStyle = {
    color: important ? 'tomato' : 'black',
  }
  return <span style={{ color: liStyle.color }}>{ label }</span>;
};

export default TodoListItem;