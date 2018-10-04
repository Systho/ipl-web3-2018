import React from 'react';
import TodoList from './todo_list';
import TodoForm from './todo_form';

const TodoAppComponent =({
  handleChange,
  handleSubmit,
  currentText,
  items,
}) => {

    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={items} />
        <TodoForm 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          nextPosition={items.length + 1} 
          currentText={currentText} 
        />
      </div>
    );
}

export default TodoAppComponent;
