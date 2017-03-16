import React from 'react'; // Used to create components
import ReactDOM from 'react-dom'; // Used to manage the DOM

// In React, components are collections of JS code that produce HTML.
// Create a new component. This component should produce some HTML.
const App = () => {
  return <div>Hi!</div>; // JSX: dialect of JavaScript that looks like HTML.
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));

