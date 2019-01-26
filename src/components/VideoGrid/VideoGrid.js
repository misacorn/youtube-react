import React, { Fragment } from "react";
import VideoGridHeader from "./VideoGridHeader/VideoGridHeader";
import "./VideoGrid.scss";
import { Divider } from "semantic-ui-react";
import VideoPreview from "../VideoPreview/VideoPreview";

const VideoGrid = props => {
  const divider = props.hideDivider ? null : <Divider />;
  return (
    <Fragment>
      <div className="video-section">
        <VideoGridHeader title="Trending" />
        <div className="video-grid">
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
        </div>
      </div>
      {divider}
    </Fragment>
  );
};

export default VideoGrid;
