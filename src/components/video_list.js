import React from 'react';

/*
  In a functional component, props is an argument.
  In a class based component, props are available anywhere as "this.props".
*/

const VideoList = (props) => {
  const videos = props.videos;

  return (
    <ul className="col-md-4">
      {props.videos.length}
    </ul>
  );
}

/*
  VideoList as a class based component

  class VideoList extends React.Component {
    render() {
      return (
        <ul className="col-md-4">
          {this.props.videos.length}
        </ul>
      )
    }
  }
*/

export default VideoList;
