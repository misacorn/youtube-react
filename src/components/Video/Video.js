import React from "react";
import "./Video.scss";

const BASE_EMBED_URL = "https://www.youtube.com/embed/";

const Video = props => {
  if (!props.id) {
    return null;
  }
  const embedUrl = `${BASE_EMBED_URL}${props.id}`;
  return (
    <iframe
      title={"video"}
      width={"560"}
      height={"315"}
      src={embedUrl}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
};
export default Video;
