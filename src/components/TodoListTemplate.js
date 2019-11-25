import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    return(
        <main className = "todo-list-template">
            <div className = "title">
                TodoList
            </div>
            <section className = "form-wrapper">
                {form}
            </section>
            <section className = "todos-wrapper">
                {children}
            </section>
        </main>
    );
}; //arr.func
  // form, children 쓰는 이유: 머드라
export default TodoListTemplate;