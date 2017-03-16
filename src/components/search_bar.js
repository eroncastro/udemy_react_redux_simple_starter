import React, { Component } from 'react';

/*
  Functional component: function that returns JSX
  const SearchBar = () => {
    return <input />;
  };
*/

// Class based component
class SearchBar extends Component {
  // Every class based component must have a render method what will return JSX.
  render() {
    return <input />;
  }
}


export default SearchBar;
