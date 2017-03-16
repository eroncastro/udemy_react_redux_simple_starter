// React -> Used to create components
// ReactDOM -> Used to manage the DOM
// Whenever we are importing code that we wrote, we need
// to specify a file reference to import from, which is different
// from importing components from a library.

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAJR2L0efa9BChxcQfCVm-qDIa4AjUFTmM ';

// In React, components are collections of JS code that produce HTML.
// Create a new component. This component should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  ); // JSX: dialect of JavaScript that looks like HTML.
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));

