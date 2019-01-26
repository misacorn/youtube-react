import React, { Component } from "react";
import HeaderNav from "./containers/HeaderNav/HeaderNav";
import SideBar from "./containers/SideBar/SideBar";
import Home from "./containers/Home/Home";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <SideBar />
        <Home />
      </div>
    );
  }
}

export default App;
