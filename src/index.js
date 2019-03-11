import React from "react";
import ReactDOM from "react-dom";
import withFormik from "formik";
import Yup from "yup";

import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

const App = () => (
  <div>
    <input type="email" name="email" placeholder="email" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
