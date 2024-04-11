import React from 'react';

export function DeletedTasks({ deletedTasks, handleRemoveFromDeleted }) {
  return (
    <div className="container-fluid">
      <h2>Deleted Tasks</h2>
      {deletedTasks.map(todo => (
        <div key={todo.id} className="card p-2">
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.status === 'completed' ? 'Completed' : 'Not Completed'}</p>
          <p>Created At: {todo.createdAt}</p>
          <button onClick={() => handleRemoveFromDeleted(todo.id)} type="button" className="btn btn-danger mr-3">Remove Permanently</button>
        </div>
      ))}
    </div>
  );
}
