import React, { Component } from "react";
import "../style/App.css";
import "../style/style.css";

class CardDeck extends Component {
  render() {
    const category = this.props.category;
    return (
      <div>
        <h2 className="Nav-space">Explore in {category}</h2>
        <br />
        <div class="card-deck deck-margin">
          <div class="card">
            <img
              src={require("../assets/images/img.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Van Heusen</h5>
              <p class="card-text">Shoe 4</p>
              <p class="card-text">
                <small class="text-muted">30% Off</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src={require("../assets/images/img.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Nike</h5>
              <p class="card-text">Shoe 3</p>
              <p class="card-text">
                <small class="text-muted">20% Off</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src={require("../assets/images/img.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Adidas</h5>
              <p class="card-text">Shoe 1</p>
              <p class="card-text">
                <small class="text-muted">30% Off</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src={require("../assets/images/img.jpg")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Puma</h5>
              <p class="card-text">Shoe 2</p>
              <p class="card-text">
                <small class="text-muted">40% Off</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardDeck;
