import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Header from "./components/Header/Header";
import MainRoutes from "./components/Routes/MainRoutes";
import HomeRoute from "./components/Routes/HomeRoute";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    scrollY: false,
    pathname: window.location.pathname,
  };

  getScroll = () => {
    const scroll = window.scrollY;
    if (scroll >= 100) {
      this.setState({ scrollY: true });
    }
  };

  render() {
    window.addEventListener("scroll", this.getScroll);

    console.log(this.state.pathname);

    return (
      <React.Fragment>
        <BrowserRouter>
          <HomeRoute />
          <MainRoutes />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
