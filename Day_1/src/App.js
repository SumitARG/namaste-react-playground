// Create the React element using React object
const heading = React.createElement("h1", {}, "Hello World with React");

// Create the react application root using ReactDOM object
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render element in react root
root.render(heading);
