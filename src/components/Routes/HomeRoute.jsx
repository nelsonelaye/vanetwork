import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/HomePageHeader";
import Home from "../Home/Home";

class MainRoutes extends React.Component {
  state = {
    scrollY: false,
  };

  getScroll = () => {
    if (window.scrollY >= 100) {
      this.setState({ scrollY: true });
    } else {
      this.setState({ scrollY: false });
    }
  };
  render() {
    window.addEventListener("scroll", this.getScroll);
    return (
      <React.Fragment>
        <Header sc={this.state.scrollY ? "sc" : null} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default MainRoutes;
