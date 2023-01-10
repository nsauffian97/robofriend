import React from 'react'; // Package to use React
import ReactDOM from 'react-dom/client'; // Package connects the React package to the DOM -- You always need a package to connect to whatever you want to use the app in (ie... VR)
import './index.css'; // Add all the CSS for the app
// Using ReactDOM's render to render the "App" into the root
import App from './containers/App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
