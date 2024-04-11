import React from 'react';
import { Link } from 'react-router-dom';

export function TodoList({ todos, handleDeleteTodo, handleStatusChange, filter }) {
  const filteredTodos = filter === 'completed'
    ? todos.filter(todo => todo.status === 'completed' && !todo.isDeleted)
    : filter === 'not-completed'
      ? todos.filter(todo => todo.status !== 'completed' && !todo.isDeleted)
      : todos.filter(todo => !todo.isDeleted);

  return (
    <div className="Details-Page">
      {filteredTodos.map(todo => (
        <div key={todo.id} className="card p-2">
          <h3>Title: {todo.title}</h3>
          <p>Description: {todo.description}</p>
          <p>Status: {todo.status === 'completed' ? 'Completed': 'Not Completed'}</p>
          <p>Created At: {todo.createdAt}</p>
          {!todo.isDeleted && (
            <>
              <div className='cardButtons'>
              <button onClick={() => handleDeleteTodo(todo.id)} type="button" className="btn btn-danger">Delete</button>
              <button onClick={() => handleStatusChange(todo.id, todo.status === 'completed' ? 'not completed' : 'completed')} type="button" className={`btn ${todo.status === 'completed' ? 'btn-success' : 'btn-warning'}`}>
                {todo.status === 'completed' ? 'Mark as Not Completed' : 'Mark as Completed'}
              </button>
              <Link to={`/edit-todo/${todo.id}`} className="btn btn-primary">Edit</Link>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
