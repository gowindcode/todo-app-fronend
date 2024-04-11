import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
 
export function EditTodo({ todos, setTodos }) {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [updated, setUpdated] = useState(false); // State to track if the todo has  updated

  useEffect(() => {
    const todoToUpdate = todos.find(todo => todo.id === parseInt(id));
    if (todoToUpdate) {
      setTitle(todoToUpdate.title);
      setDescription(todoToUpdate.description);
    }
  }, [id, todos]);

  const handleUpdateTodo = () => {
    const updatedTodos = todos.map(todo => todo.id === parseInt(id) ? { ...todo, title, description } : todo);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setUpdated(true); // We Set updated state to true when todo is updated
  };

  return (
    <div className="container-fluid">
      <h2>Edit Todo</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      {updated ? (
        <button type="button" className="btn btn-success">Todo Updated</button>
      ) : (
        <button onClick={handleUpdateTodo} type="button" className="btn btn-success">Update Todo</button>
      )}
    </div>
  );
}