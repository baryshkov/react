import React from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

import './app.css';

class App extends React.Component {
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 0 },
      { label: 'Make Awesome App', important: true, id: 1 },
      { label: 'Hail Devil', important: false, id: 2 },
    ],
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const newState = todoData.filter(elementId => elementId.id !== id);
      return {
        todoData: newState,
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />

          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}
export default App;
