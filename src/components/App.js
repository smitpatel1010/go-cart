import React, { Component } from "react";
import NavBar from "./navbar";
import MainCategory from "./maincategory";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: ["Men", "Women", "Kids"]
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <br />
        <br />
        <MainCategory categories={this.state.categories} />
      </div>
    );
  }
}

export default App;
