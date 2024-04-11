

// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [editTodoId, setEditTodoId] = useState(null);
//   const [editTitle, setEditTitle] = useState('');
//   const [editDescription, setEditDescription] = useState('');
//   const [filter, setFilter] = useState('all'); // 'all', 'completed', 'not completed'
//   const [deletedTaskIds, setDeletedTaskIds] = useState([]);

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem('todos'));
//     if (storedTodos) {
//       setTodos(storedTodos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const handleCreateTodo = () => {
//     const newTodo = {
//       id: Date.now(),
//       title,
//       description,
//       status: 'not completed',
//       createdAt: new Date().toLocaleString()
//     };
//     setTodos([...todos, newTodo]);
//     setTitle('');
//     setDescription('');
//   };

//   const handleDeleteTodo = (id) => {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     setTodos(updatedTodos);
//     setDeletedTaskIds([...deletedTaskIds, id]);
//   };

//   const handleStatusChange = (id, newStatus) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, status: newStatus } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   const handleEditTodo = (id) => {
//     const todoToEdit = todos.find(todo => todo.id === id);
//     setEditTodoId(id);
//     setEditTitle(todoToEdit.title);
//     setEditDescription(todoToEdit.description);
//   };

//   const handleUpdateTodo = () => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === editTodoId ? { ...todo, title: editTitle, description: editDescription } : todo
//     );
//     setTodos(updatedTodos);
//     setEditTodoId(null);
//     setEditTitle('');
//     setEditDescription('');
//   };

//   const filteredTodos = filter === 'all'
//     ? todos
//     : filter === 'completed'
//       ? todos.filter(todo => todo.status === 'completed')
//       : todos.filter(todo => todo.status !== 'completed');

//   return (
//     <div className="container-fluid">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <Link to="/todo-list" onClick={() => setFilter('all')}>All Tasks</Link>
//           </li>
//           <li className="nav-item active">
//             <Link to="/completed-tasks" onClick={() => setFilter('completed')}>Completed Tasks</Link>
//           </li>
//           <li className="nav-item active">
//             <Link to="/not-completed-tasks" onClick={() => setFilter('not completed')}>Not Completed Tasks</Link>
//           </li>
//           <li className="nav-item active">
//             <Link to="/deleted-tasks">Deleted Tasks</Link>
//           </li>
//         </ul>
//       </nav>

//       <div className="container-fluid">
//         <h2>Create Todo</h2>
//         <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
//         <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
//         <button onClick={handleCreateTodo} type="button" className="btn btn-primary">Create Todo</button>
//       </div>

//       {editTodoId && (
//         <div className="container-fluid">
//           <h2>Edit Todo</h2>
//           <input type="text" placeholder="Title" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
//           <input type="text" placeholder="Description" value={editDescription} onChange={e => setEditDescription(e.target.value)} />
//           <button onClick={handleUpdateTodo} type="button" className="btn btn-success">Update Todo</button>
//         </div>
//       )}

//       <div className="container-fluid">
//         <h2>Todo List</h2>
//         {filteredTodos.map(todo => (
//           <div key={todo.id} className="card">
//             <h3>{todo.title}</h3>
//             <p>{todo.description}</p>
//             <p>Status: {todo.status}</p>
//             <p>Created At: {todo.createdAt}</p>
//             {!deletedTaskIds.includes(todo.id) && (
//               <>
//                 <button onClick={() => handleDeleteTodo(todo.id)} type="button" className="btn btn-danger">Delete</button>
//                 <button onClick={() => handleStatusChange(todo.id, 'completed')} type="button" className="btn btn-primary">Mark as Completed</button>
//                 {!todo.status && (
//                   <button onClick={() => handleStatusChange(todo.id, 'not completed')} type="button" className="btn btn-warning">Mark as Not Completed</button>
//                 )}
//                 <button onClick={() => handleEditTodo(todo.id)} type="button" className="btn btn-success">Edit</button>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TodoApp;

// ---------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';

// function TodoList({ todos, handleDeleteTodo, handleStatusChange, filter }) {
//   const filteredTodos = filter === 'completed'
//     ? todos.filter(todo => todo.status === 'completed')
//     : filter === 'not-completed'
//     ? todos.filter(todo => todo.status !== 'completed')
//     : todos;

//   return (
//     <div className="container-fluid">
//       {filteredTodos.map(todo => (
//         <div key={todo.id} className="card">
//           <h3>{todo.title}</h3>
//           <p>{todo.description}</p>
//           <p>Status: {todo.status === 'completed' ? 'Completed' : 'Not Completed'}</p>
//           <p>Created At: {todo.createdAt}</p>
//           {!todo.isDeleted && (
//             <>
//               <button onClick={() => handleDeleteTodo(todo.id)} type="button" className="btn btn-danger">Delete</button>
//               <button onClick={() => handleStatusChange(todo.id, todo.status === 'completed' ? 'not completed' : 'completed')} type="button" className={`btn ${todo.status === 'completed' ? 'btn-success' : 'btn-warning'}`}>
//                 {todo.status === 'completed' ? 'Mark as Not Completed' : 'Mark as Completed'}
//               </button>
//               <Link to={`/edit-todo/${todo.id}`} className="btn btn-primary">Edit</Link>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// function DeletedTasks({ deletedTasks, handleRemoveFromDeleted }) {
//   return (
//     <div className="container-fluid">
//       <h2>Deleted Tasks</h2>
//       {deletedTasks.map(todo => (
//         <div key={todo.id} className="card">
//           <h3>{todo.title}</h3>
//           <p>{todo.description}</p>
//           <p>Status: {todo.status === 'completed' ? 'Completed' : 'Not Completed'}</p>
//           <p>Created At: {todo.createdAt}</p>
//           <button onClick={() => handleRemoveFromDeleted(todo.id)} type="button" className="btn btn-danger">Remove Permanently</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Home({ onCreateTodo, setTitle, setDescription, title, description }) {
//   return (
//     <div className="container-fluid">
//       <h2>Create Todo</h2>
//       <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
//       <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//       <button onClick={onCreateTodo} type="button" className="btn btn-primary">Create Todo</button>
//     </div>
//   );
// }

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [deletedTasks, setDeletedTasks] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const location = useLocation();

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     const storedDeletedTasks = JSON.parse(localStorage.getItem('deletedTasks')) || [];
//     setTodos(storedTodos);
//     setDeletedTasks(storedDeletedTasks);
//   }, []);

//   const saveTodosToLocalStorage = (updatedTodos) => {
//     localStorage.setItem('todos', JSON.stringify(updatedTodos));
//   };

//   const saveDeletedTasksToLocalStorage = (updatedDeletedTasks) => {
//     localStorage.setItem('deletedTasks', JSON.stringify(updatedDeletedTasks));
//   };

//   const handleCreateTodo = () => {
//     const newTodo = {
//       id: Date.now(),
//       title,
//       description,
//       status: 'not completed',
//       createdAt: new Date().toLocaleString(),
//       isDeleted: false
//     };
//     const updatedTodos = [...todos, newTodo];
//     setTodos(updatedTodos);
//     saveTodosToLocalStorage(updatedTodos);
//     setTitle('');
//     setDescription('');
//   };

//   const handleDeleteTodo = (id) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, isDeleted: true } : todo
//     );
//     const deletedTodo = todos.find(todo => todo.id === id);
//     setTodos(updatedTodos);
//     setDeletedTasks([...deletedTasks, deletedTodo]);
//     saveTodosToLocalStorage(updatedTodos);
//     saveDeletedTasksToLocalStorage([...deletedTasks, deletedTodo]);
//   };

//   const handleRemoveFromDeleted = (id) => {
//     const updatedDeletedTasks = deletedTasks.filter(task => task.id !== id);
//     setDeletedTasks(updatedDeletedTasks);
//     saveDeletedTasksToLocalStorage(updatedDeletedTasks);
//   };

//   const handleStatusChange = (id, newStatus) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, status: newStatus } : todo
//     );
//     setTodos(updatedTodos);
//     saveTodosToLocalStorage(updatedTodos);
//   };

//   return (
//     <div className="container-fluid">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <ul className="nav nav-tabs nav justify-content-end mr-5">
//           <li className="nav-item active">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="nav-item active">
//             <Link to="/todo-list">All Tasks</Link>
//           </li>
//           <li className="nav-item active">
//             <Link to="/completed-tasks">Completed Tasks</Link>
//           </li>
//           <li className="nav-item active">
//             <Link to="/not-completed-tasks">Not Completed Tasks</Link>
//           </li>
//           <li className="nav-item active">
//             <Link to="/deleted-tasks">Deleted Tasks</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home onCreateTodo={handleCreateTodo} setTitle={setTitle} setDescription={setDescription} title={title} description={description} />} />
//         <Route path="/todo-list" element={<TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleStatusChange={handleStatusChange} filter="all" />} />
//         <Route path="/completed-tasks" element={<TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleStatusChange={handleStatusChange} filter="completed" />} />
//         <Route path="/not-completed-tasks" element={<TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleStatusChange={handleStatusChange} filter="not-completed" />} />
//         <Route path="/deleted-tasks" element={<DeletedTasks deletedTasks={deletedTasks} handleRemoveFromDeleted={handleRemoveFromDeleted} />} />
//         <Route path="*" element={<Navigate to="/todo-list" />} />
//       </Routes>
//     </div>
//   );
// }

// export default TodoApp;

// ---------------------------------------------------the below code is working well----------------------

// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Link, Navigate } from 'react-router-dom';
// import { TodoList } from './TodoList';
// import { Home } from './Home';
// import { DeletedTasks } from './DeletedTasks';
// import { EditTodo } from './EditTodo';


// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [deletedTasks, setDeletedTasks] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     const storedDeletedTasks = JSON.parse(localStorage.getItem('deletedTasks')) || [];
//     setTodos(storedTodos);
//     setDeletedTasks(storedDeletedTasks);
//   }, []);

//   const saveTodosToLocalStorage = (updatedTodos) => {
//     localStorage.setItem('todos', JSON.stringify(updatedTodos));
//   };

//   const saveDeletedTasksToLocalStorage = (updatedDeletedTasks) => {
//     localStorage.setItem('deletedTasks', JSON.stringify(updatedDeletedTasks));
//   };

//   const handleCreateTodo = () => {
//     const newTodo = {
//       id: Date.now(),
//       title,
//       description,
//       status: 'not completed',
//       createdAt: new Date().toLocaleString(),
//       isDeleted: false
//     };
//     const updatedTodos = [...todos, newTodo];
//     setTodos(updatedTodos);
//     saveTodosToLocalStorage(updatedTodos);
//     setTitle('');
//     setDescription('');
//   };

//   const handleDeleteTodo = (id) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, isDeleted: true } : todo
//     );
//     const deletedTodo = todos.find(todo => todo.id === id);
//     setTodos(updatedTodos);
//     setDeletedTasks([...deletedTasks, deletedTodo]);
//     saveTodosToLocalStorage(updatedTodos);
//     saveDeletedTasksToLocalStorage([...deletedTasks, deletedTodo]);
//   };

//   const handleRemoveFromDeleted = (id) => {
//     const updatedDeletedTasks = deletedTasks.filter(task => task.id !== id);
//     setDeletedTasks(updatedDeletedTasks);
//     saveDeletedTasksToLocalStorage(updatedDeletedTasks);
//   };

//   const handleStatusChange = (id, newStatus) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, status: newStatus } : todo
//     );
//     setTodos(updatedTodos);
//     saveTodosToLocalStorage(updatedTodos);
//   };

//   return (
//     <div className="container-fluid">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div class="container-fluid">
//         <ul className="nav nav-tabs nav justify-content-end mr-5">
//           <li className="nav-item active">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="nav-item active">
//             <Link to="/todo-list">All Tasks</Link>
//           </li>
//           <li className="nav-item active">
//             <Link to="/completed-tasks">Completed Tasks</Link>
//           </li>
//           <li className="nav-item active">
//             <Link to="/not-completed-tasks">Not Completed Tasks</Link>
//           </li>
//           <li className="nav-item active">
//             <Link to="/deleted-tasks">Deleted Tasks</Link>
//           </li>
//         </ul>
//         </div>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home onCreateTodo={handleCreateTodo} setTitle={setTitle} setDescription={setDescription} title={title} description={description} />} />
//         <Route path="/todo-list" element={<TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleStatusChange={handleStatusChange} filter="all" />} />
//         <Route path="/completed-tasks" element={<TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleStatusChange={handleStatusChange} filter="completed" />} />
//         <Route path="/not-completed-tasks" element={<TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleStatusChange={handleStatusChange} filter="not-completed" />} />
//         <Route path="/deleted-tasks" element={<DeletedTasks deletedTasks={deletedTasks} handleRemoveFromDeleted={handleRemoveFromDeleted} />} />
//         <Route path="/edit-todo/:id" element={<EditTodo todos={todos} setTodos={setTodos} />} />
//         <Route path="*" element={<Navigate to="/todo-list" />} />
//       </Routes>
//     </div>
//   );
// }

// export default TodoApp;

// -----------------------------------another option-----------------
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import { TodoList } from './TodoList';
import { Home } from './Home';
import { DeletedTasks } from './DeletedTasks';
import { EditTodo } from './EditTodo';
import Signup from './Signup';
import Login from './Login';
import Start from './Start';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const storedDeletedTasks = JSON.parse(localStorage.getItem('deletedTasks')) || [];
    setTodos(storedTodos);
    setDeletedTasks(storedDeletedTasks);
  }, []);

  const saveTodosToLocalStorage = (updatedTodos) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const saveDeletedTasksToLocalStorage = (updatedDeletedTasks) => {
    localStorage.setItem('deletedTasks', JSON.stringify(updatedDeletedTasks));
  };

  const handleCreateTodo = () => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      status: 'not completed',
      createdAt: new Date().toLocaleString(),
      isDeleted: false
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
    setTitle('');
    setDescription('');
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isDeleted: true } : todo
    );
    const deletedTodo = todos.find(todo => todo.id === id);
    setTodos(updatedTodos);
    setDeletedTasks([...deletedTasks, deletedTodo]);
    saveTodosToLocalStorage(updatedTodos);
    saveDeletedTasksToLocalStorage([...deletedTasks, deletedTodo]);
  };

  const handleRemoveFromDeleted = (id) => {
    const updatedDeletedTasks = deletedTasks.filter(task => task.id !== id);
    setDeletedTasks(updatedDeletedTasks);
    saveDeletedTasksToLocalStorage(updatedDeletedTasks);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage or relevant session data
    navigate('/signup'); // Navigate to the sign-in page
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };
  
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="nav nav-tabs nav justify-content-end mr-5">
            <li className="nav-item active mr-3">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item active mr-3">
              <Link to="/todo-list">All Tasks</Link>
            </li>
            <li className="nav-item active mr-3">
              <Link to="/completed-tasks">Completed Tasks</Link>
            </li>
            <li className="nav-item active mr-3">
              <Link to="/not-completed-tasks">Not Completed Tasks</Link>
            </li>
            <li className="nav-item active mr-3">
              <Link to="/deleted-tasks">Deleted Tasks</Link>
            </li>
          </ul>
        </div>
      </nav>
    
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/home" element={<Home onCreateTodo={handleCreateTodo} setTitle={setTitle} setDescription={setDescription} title={title} description={description} />} />
        {/* <Route path="/signup" element={<Signup onSignupSuccess={handleCreateTodo} />} /> */}
        {/* <Route path="/login" element={<Login onLoginSuccess={handleCreateTodo} />} /> */}
        <Route path="/todo-list" element={<TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleStatusChange={handleStatusChange} filter="all" />} />
        <Route path="/completed-tasks" element={<TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleStatusChange={handleStatusChange} filter="completed" />} />
        <Route path="/not-completed-tasks" element={<TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleStatusChange={handleStatusChange} filter="not-completed" />} />
        <Route path="/deleted-tasks" element={<DeletedTasks deletedTasks={deletedTasks} handleRemoveFromDeleted={handleRemoveFromDeleted} />} />
        <Route path="/edit-todo/:id" element={<EditTodo todos={todos} setTodos={setTodos} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </div>
  );
}

export default TodoApp;

