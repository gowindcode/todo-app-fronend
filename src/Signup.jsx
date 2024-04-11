import React, { useState } from 'react';
import axios from 'axios';
import { API } from './global';
import { useNavigate } from 'react-router-dom';


const Signup = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
 

  const handleSendToken = async () => {
    try {
      const response = await axios.post(`${API}/signup`, { email });
      if (response.status === 201) {
        const { _id } = response.data.user;
        localStorage.setItem('token', _id); // Store token in localStorage
        setToken(_id); // Set the token in state
        setErrorMessage('');
        alert(`Your Login Token: ${_id}`);
        //  // Navigate to the login page
        onSignupSuccess();
        navigate('/home');
      }
    } catch (error) {
      console.error('Error sending token:', error);
      setErrorMessage('Error sending token. Please try again.');
    }
  };

  return (
    <div>
      {token ? (
        <>
          <h2>Login</h2>
        
          <div class="form-group">
          <input type="email" placeholder="Please Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Token" value={token} readOnly />
          <button onClick={onSignupSuccess}>Login</button>
          </div>
        
        </>
      ) : (
        <>
          <h2>Signup</h2>
     
          <div class="form-group">
          <input type="email" placeholder="Please Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className='btn btn-primary' onClick={handleSendToken}>Generate Token</button>
          </div>
    
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </>
      )}
    </div>
  );
};

export default Signup;

// ----------------------------------------above working------------
// import React, { useState } from 'react';
// import axios from 'axios';
// import { API } from './global';
// import { useNavigate } from 'react-router-dom';

// const Signup = ({ onSignupSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [token, setToken] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSendToken = async () => {
//     try {
//       const response = await axios.post(`${API}/signup`, { email });
//       if (response.status === 201) {
//         const { _id } = response.data.user;
//         localStorage.setItem('token', _id); // Store token in localStorage
//         setToken(_id); // Set the token in state
//         setErrorMessage('');
//         alert(`Your Login Token: ${_id}`);
//         //  // Navigate to the login page
//         onSignupSuccess();
//         navigate('/login');
//       }
//     } catch (error) {
//       console.error('Error sending token:', error);
//       setErrorMessage('Error sending token. Please try again.');
//     }
//   };

//   return (
//     <div>
//           <h2>Signup</h2>
//           <div class="form-group">
//           <input type="email" placeholder="Please Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           <button className='btn btn-primary' onClick={handleSendToken}>Generate Token</button>
//           </div>
//           {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//     </div>
//   );
// };

// export default Signup;
// // ----------------------------------------------------------------
// import React, { useState } from 'react';
// import axios from 'axios';
// import { API } from './global';
// import { useNavigate } from 'react-router-dom';

// const Signup = ({ onTokenSent }) => {
//   const [email, setEmail] = useState('');
//   const [token, setToken] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSendToken = async () => {
//     try {
//       const response = await axios.post(`${API}/signup`, { email });
//       if (response.status === 201) {
//         const { _id } = response.data.user;
//         localStorage.setItem('token', _id); // Store token in localStorage
//         const { email } = response.data.user; 
//         setToken(_id); // Set the token (user ID) to state
//         setEmail(email); 
//         setErrorMessage('');
//         alert(`Your Login Token: ${_id}`);
//         onTokenSent(); // Trigger callback to indicate token sent successfully
//         navigate('/login');
//       }
//     } catch (error) {
//       console.error('Error sending token:', error);
//       setErrorMessage('Error sending token. Please try again.');
//     }
//   };

//   return (
//     <div className='container-fluid'>
//         <div className='Signup-Div'>
//       <h2>Signup</h2>
//         <input
//           type="email"
//           placeholder="Please Enter your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button className="btn btn-primary" onClick={handleSendToken}>
//           Generate Token
//         </button>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default Signup;

// ----------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { API } from './global';

// const Signup = ({ onTokenSent }) => {
//   const [email, setEmail] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSendToken = async () => {
//     try {
//       const response = await axios.post(`${API}/signup`, { email });
//       if (response.status === 201) {
//         const { user } = response.data;
//         const { _id } = user;
//         alert(`Your Login Token: ${_id}`);
//         onTokenSent(email, _id); // Pass email and token to the login page
//         navigate('/login'); // Navigate to the login page after token generation
//       } else {
//         setErrorMessage('Token generation failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error sending token:', error);
//       setErrorMessage('Error sending token. Please try again.');
//     }
//   };

//   return (
//     <div className='container-fluid'>
//       <div className='Signup-Div'>
//         <h2>Signup</h2>
//         <input
//           type="email"
//           placeholder="Please Enter your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button className="btn btn-primary" onClick={handleSendToken}>
//           Generate Token
//         </button>
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default Signup;
