import React from 'react';

/*
  Functional component: function that returns JSX
  const SearchBar = () => {
    return <input />;
  };

  Handling an event in React has two steps:
  1) We declare an event handler, which is a function that should run whenever the event occurs;

  In React, state is a plain JavaScript object that is used to record and react to user events.
  Each class based component has its own state object. Whenever a component's state changes,
  the component re-renders and forces all of its children to re-render as well.

  Before we ever use state inside of a component, we need to initialize the state object.
  To initiliaze state, we set the property state to a plain JavaScript object inside of the
  class constructor method. Functional components do not have state, only class based components do.
*/

// Class based component
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; // This is how we initialize state inside a class based component.
  }
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
