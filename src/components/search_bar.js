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

/*
  In React, state is a plain JavaScript object that is used to record and react to user events.
  Each class based component has its own state object. Whenever a component's state changes,
  the component re-renders and forces all of its children to re-render as well.

  Before we ever use state inside of a component, we need to initialize the state object.
  To initiliaze state, we set the property state to a plain JavaScript object inside of the
  class constructor method. Functional components do not have state, only class based components do.
*/

/*
  To change our component state, we use this.setState method.
*/

/*
  Controlled field - form element whose value is set by the state. So the component value will only
  change whenever that state changes.
*/

// Class based component
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: 'surfboards' }; // This is how we initialize state inside a class based component.
  }
  // Every class based component must have a render method what will return JSX.
  render() {
    // camelcase([on + [event name]])
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
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
