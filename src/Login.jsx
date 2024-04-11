// -------------------------------------------------below is working well---------------------

import React, { useState } from 'react';
import axios from 'axios';
import { API } from './global';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [tokenGenerated, setTokenGenerated] = useState(false);
  const navigate = useNavigate();

  const handleSendToken = async () => {
    try {
      const response = await axios.post(`${API}/signup`, { email });
      if (response.status === 201) {
        const { _id } = response.data.user; // Extract the token (user ID) from the response
        setToken(_id); // Set the token (user ID) to state
        setTokenGenerated(true); // Update state to indicate token has been generated
        setErrorMessage('');
        alert(`Login token: ${_id}`); // Show token in alert message
      }
    } catch (error) {
      console.error('Error sending token:', error);
      setErrorMessage('Error sending token. Please try again.');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API}/login`, { email, token });
      if (response.status === 200) {
        alert('Login successful!');
        onLoginSuccess();
        navigate('/home');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {!tokenGenerated ? (
        <button onClick={handleSendToken}>Generate Token</button>
      ) : (
        <>
          <input type="text" placeholder="Token" value={token} readOnly />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Login;


// // ------------------------------------ seperate file split--------
// import React, { useState } from 'react';
// import axios from 'axios';
// import { API } from './global';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [token, setToken] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(`${API}/login`, { email, token });
//       if (response.status === 200) {
//         alert('Login successful!');
//         onLoginSuccess();
//         navigate('/home'); // Navigate to the home page after successful login
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setErrorMessage('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="text" placeholder="Token" value={token} onChange={(e) => setToken(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//     </div>
//   );
// };

// export default Login;

// -----------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import axios from 'axios';
// import { API } from './global';

// const Login = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [token, setToken] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(`${API}/login`, { email, token });
//       if (response.status === 200) {
//         alert('Login successful!');
//         onLoginSuccess();
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setErrorMessage('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div className='container-fluid'>
//       <div className='Login-Div'>
//       <h2>Login</h2>
//       <input type="email" placeholder="Email" value={email} readOnly />
//       <input type="text" placeholder="Token" value={token} readOnly />
//       <button className="btn btn-primary" onClick={handleLogin}>Login</button>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;

// // ---------------------------------------------------------------------------
// import React, { useState } from 'react';
// import axios from 'axios';
// import { API } from './global';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ onLoginSuccess, email, token }) => {
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(`${API}/login`, { email, token });
//       if (response.status === 200) {
//         onLoginSuccess();
//         alert('Login successful!');
//         navigate('/home'); // Navigate to the home page upon successful login
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setErrorMessage('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div className='container-fluid'>
//       <div className='Login-Div'>
//         <h2>Login</h2>
//         {/* Display email and token values in input fields */}
//         <input
//           type="email"
//           value={email} // Use the email prop as the value
//           readOnly={email}
//         />
//         <input
//           type="text"
//           value={token} // Use the token prop as the value
//           readOnly={token}
//         />
//         <button className="btn btn-primary" onClick={handleLogin}>
//           Login
//         </button>
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;
