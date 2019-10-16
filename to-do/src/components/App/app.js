import React from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import AddItem from '../AddItemButton/add-item';
import ItemStatusFilter from '../ItemStatusFilter';

import './app.css';

class App extends React.Component {
  id = 1969;

  state = {
    todoData: [
      this.createTodoItem('Voenkomat'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Hail Devil'),
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

  addItem = text => {
    const newTodo = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newState = [...todoData, newTodo];
      return {
        todoData: newState,
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const newData = [...todoData];
      newData.forEach(item => {
        if (id === item.id) {
          item.important = !item.important;
        }
      });
      return {
        todoData: newData,
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const newData = [...todoData];
      newData.forEach(item => {
        if (id === item.id) {
          item.done = !item.done;
        }
      });
      return {
        todoData: newData,
      };
    });
  };

  createTodoItem(label) {
    console.log(this.state);
    return {
      label,
      important: false,
      done: false,
      id: (this.id += 1),
    };
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />

          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem onAddition={this.addItem} />
      </div>
    );
  }
}
export default App;
