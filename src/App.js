
import TodoApp from './TodoApp';
import './App.css';


function App() {
  return (
    <div className="App">
    <TodoApp/>
    </div>
  );
}

export default App;

// // -----------------------------------------------// above working for normal----------
// import React, { useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Signup from './Signup';
// import Login from './Login';
// import TodoApp from './TodoApp';
// import './App.css';

// function App() {
//   const [tokenSent, setTokenSent] = useState(false);

//   const handleTokenSent = () => {
//     setTokenSent(true);
//   };

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Navigate to="/signup" />} />
//         <Route path="/signup" element={<Signup onTokenSent={handleTokenSent} />} />
//         <Route
//           path="/login"
//           element={tokenSent ? <Login /> : <Navigate to="/signup" replace />}
//         />
//         <Route path="/home" element={<TodoApp />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
