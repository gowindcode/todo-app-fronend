import React from 'react';

export function Home({ onCreateTodo, setTitle, setDescription, title, description }) {
  return (
    <div className="containerDiv-home">
      
      <div className="containerHome">
      <h2>Create Todo</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={onCreateTodo} type="button" className="btn btn-primary">Create Todo</button>
      </div>
    </div>
  );
}
