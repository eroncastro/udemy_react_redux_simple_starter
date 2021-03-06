// React -> Used to create components
// ReactDOM -> Used to manage the DOM
// Whenever we are importing code that we wrote, we need
// to specify a file reference to import from, which is different
// from importing components from a library.

import _ from 'lodash';

import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
