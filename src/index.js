// React -> Used to create components
// ReactDOM -> Used to manage the DOM
// Whenever we are importing code that we wrote, we need
// to specify a file reference to import from, which is different
// from importing components from a library.

import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAJR2L0efa9BChxcQfCVm-qDIa4AjUFTmM ';

// In React, components are collections of JS code that produce HTML.
// Create a new component. This component should produce some HTML.
// JSX: dialect of JavaScript that looks like HTML.

/*
  Downwards data flow - only the most parent component in the application should
  be responsible for fetching data. For now, index is the most parente component we have.
*/

/*
  Passing data from parent to child is very straightforward. We just have to define a property
  on the JSX tag. This is referred in React as passing props.
*/

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
      this.setState({ videos });
      // this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));

