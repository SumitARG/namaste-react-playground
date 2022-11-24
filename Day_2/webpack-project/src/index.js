// const root = document.createElement('div');
// root.setAttribute('id', 'root');
// const header = document.createElement('h1');
// header.innerHTML += "Hello World From Webpack"
// root.appendChild(header) ;
// document.body.appendChild(root);
import React from 'react';
import ReactDOM from 'react-dom';

// Create the React element using React object
const heading = React.createElement("h1", {}, "Hello World From Webpack");

const container = React.createElement("div",null,heading);

// Create the react application root using ReactDOM object
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render element in react root
// root.render();
