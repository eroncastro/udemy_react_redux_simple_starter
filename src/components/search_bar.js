import React from 'react';

/*
  Functional component: function that returns JSX
  const SearchBar = () => {
    return <input />;
  };
*/

/*
  Handling an event in React has two steps:
  1) We declare an event handler, which is a function that should run whenever the event occurs;
  2) We pass the event handler to the element we want to monitor for events.
*/

// Class based component
class SearchBar extends React.Component {
  // Every class based component must have a render method what will return JSX.
  render() {
    // camelcase([on + [event name]])
    return <input onChange={event => console.log(event.target.value)} />;
  }

  /*
    Syntax convention for event handler:
    camelCase([handle or on] + [element name] + [event name])
  */
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
