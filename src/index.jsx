// It is the file that we will see getting loaded in the website's source code
// <script type="module" src="/src/index.jsx?t=1704804785772"></script>
// This loaded file will contain the transformed React code, which is browser executable

// It acts as a main entry point of our react applications since it is the first file to be loaded by HTML file

import ReactDOM from "react-dom/client";
// Imports the App component
import App from "./App.jsx";

// Responsible for including the index.css file in the react project
import "./index.css";

const entryPoint = document.getElementById("root");

// 
// ReactDOM library boots up the React App
// createRoot - takes an existing HTML element as an input (elt that is not being created by React, but is already a part of index.html). HERE: div with id = 'root'.
// JSX code (<App />) passed to render function. It injects the React component into the selected HTML element. It renders this component, including its nested component, into this div.
// Thus, all the HTML written inside App.jsx will be placed inside this div with id = 'root'.
// App component becomes the root component here.
ReactDOM.createRoot(entryPoint).render(<App />);
