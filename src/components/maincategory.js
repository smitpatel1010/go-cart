import React, { Component } from "react";
import "../style/App.css";
import "../style/style.css";
import CardDeck from "./carddeck";

class mainCategory extends Component {
  render() {
    const Categories = this.props.categories.map(category => {
      return (
        <div>
          <CardDeck category={category} />
          <br />
          <br />
        </div>
      );
    });
    return <div>{Categories}</div>;
  }
}

export default mainCategory;
