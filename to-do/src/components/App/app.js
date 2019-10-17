import React from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemAddForm from '../AddItemButton/item-add-form';
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
    searchData: [],
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

  toggleProperty = (arr, id, propName) => {
    const newData = [...arr];
    newData.forEach(item => {
      if (id === item.id) item[propName] = !item[propName];
    });
    return newData;
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };

  onSearch = text => {
    console.log(text);
    this.setState(({ todoData }) => {
      const newData = todoData.filter(({label}) => label.includes(text));
      return { searchData: newData };
    });
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: (this.id += 1),
    };
  }

  render() {
    const { todoData, searchData } = this.state;
    const todoCount = todoData.filter(el => !el.done).length;
    const doneCount = todoData.filter(el => el.done).length;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />

          <ItemStatusFilter />
        </div>
        <TodoList
          todos={searchData.length === 0 ? todoData : searchData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onAddition={this.addItem} />
      </div>
    );
  }
}
export default App;
