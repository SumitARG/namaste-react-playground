import React from 'react';
import ReactDOM from 'react-dom/client';

// Create the React element using React object
const heading = React.createElement("div", {id:"continer"}, [React.createElement("h1", {id:"heading-1"}, "Nested React Heading With React.createElement")]);

// Create the react application root using ReactDOM object
const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX component (Functional)
const JSX_heading = () => (<div id="container"><h1 id="heading-jsx">Nested React Heading With JSX</h1></div>)

const JSX_heading2 = (<div id="container"><h1 id="heading-jsx">Nested React Heading With JSX 1</h1></div>)

// Render element in react root
root.render(JSX_heading());
