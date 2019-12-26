import React, { Component } from 'react';
import Template from './PageTemplate/Template';
import InputTodo from './InputTodo/InputTodo';
import TodoList from './TodoList/TodoList';
import TodoItem from './TodoItem/TodoItem';

class App extends Component {
  state = {
    input: '',
  };

  onChangeHandler = (e) => {
    const {value} = e.target;
    this.setState({
      input: value,
    });
  };

  render() {
    const { input } = this.state;
    const { onChangeHandler } = this;

    return (
      <Template>
        <InputTodo onChange={onChangeHandler} value={input}/>
        <TodoList/>
      </Template>
    );
  }
}

export default App;