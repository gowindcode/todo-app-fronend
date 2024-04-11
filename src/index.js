// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <Router>
// {/* <React.StrictMode> */}
//       <App />
//    {/* </React.StrictMode>  */}
// </Router>
// );

// reportWebVitals();

// ---------------------above work normally---------

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// --------------------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'; // Import your main App component

// // Use createRoot to render the app (React 18+)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// --------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
