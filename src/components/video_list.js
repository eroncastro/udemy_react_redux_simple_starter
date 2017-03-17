import React from 'react';
import VideoListItem from './video_list_item';

/*
  In a functional component, props is an argument.
  In a class based component, props are available anywhere as "this.props".
*/

const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem video={video} />
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
