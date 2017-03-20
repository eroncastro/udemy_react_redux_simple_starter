import React from 'react';
import VideoListItem from './video_list_item';

/*
  In a functional component, props is an argument.
  In a class based component, props are available anywhere as "this.props".

  When rendering a list, React will complain if a key prop is not provided
  for every element of the list. It does like so inm order to be efficient
  whenever a specific element should be re-rendered.
*/

const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem key={video.etag} video={video} />
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
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
