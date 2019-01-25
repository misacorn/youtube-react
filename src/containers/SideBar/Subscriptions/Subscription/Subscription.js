import React from "react";
import { Icon, Image, Menu } from "semantic-ui-react";
import "./Subscription.scss";

const Subscription = props => {
  let rightEl = null;
  const { broadcastting, amountNewVideos } = props;
  if (broadcastting) {
    rightEl = <Icon name="signal" />;
  } else if (amountNewVideos) {
    rightEl = <span className="new-videos-count">{amountNewVideos}</span>;
  }
  return (
    <Menu.Item>
      <div className="subscription">
        <Image src="http://via.placeholder.com/28x28' avatar" />
        <span>{props.label}</span>
        {rightEl}
      </div>
    </Menu.Item>
  );
};

export default Subscription;
