import React, { Fragment, Component } from "react";
import Video from "../../components/Video/Video";
import VideoPreview from "../../components/VideoPreview/VideoPreview";
import "./Watch.scss";

class Watch extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ maxWidth: "60%" }}>
          <Video id="TdrL3QxjyVw" />
        </div>
        <VideoPreview horizontal={true} />
        <VideoPreview />
      </Fragment>
    );
  }
}

export default Watch;
