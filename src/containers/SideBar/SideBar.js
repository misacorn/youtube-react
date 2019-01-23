import React, { Component } from "react";
import "./SideBar.scss";
import { Menu } from "semantic-ui-react";
import { SideBarItem } from "./SideBarItem/SideBarItem";

class SideBar extends Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed="left" className="side-nav">
        <SideBarItem />
      </Menu>
    );
  }
}

export default SideBar;
