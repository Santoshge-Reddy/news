import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "masonry-layout";
import "./links/links.js";
import "./styles.css";

import logo from "../src/presentation-assets/img/new_logo.png";
import hipster_white from "../src/presentation-assets/img/hipster_logo_white.png";

import lifestyle_8 from "./assets/img/lifestyle-8.jpg";
import lifestyle_1 from "./assets/img/lifestyle-1.jpg";

function Logo() {
  return (
    <a href="https://santoshge-reddy.github.io/Santosh/">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="brand">Creative Tim</div>
      </div>
    </a>
  );
}

function App() {
  return (
    <div className="wrapper">
      <Logo />
      <div className="container">
        <div className="page-description page-description-header">
          <div className="hipster-container">
            <img src={hipster_white} alt="hipster" />
          </div>
        </div>

        <div className="row">
          <Pop1 />
          <Pop2 />
          <Pop3 />
          <Pop4 />
          <Pop5 />
          <Pop6 />
          <Pop7 />
          <Pop8 />
          <Pop9 />
          <Pop10 />
          <Pop11 />
          <Pop12 />
          <Pop13 />
          <Pop14 />
          <Pop15 />
          <Pop16 />
        </div>
      </div>
    </div>
  );
}

function Pop1() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div
        className="card card-with-border card-just-text"
        data-background="color"
        data-color="black"
      >
        <div className="content">
          <h4 className="title">
            "In the end we only <b>regret</b> the chances we didn't take."
          </h4>
          <p className="description">- Hipster Quote</p>
        </div>
      </div>
    </div>
  );
}

function Pop2() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div className="card">
        <div className="header">
          <img src={require("./assets/img/lifestyle-8.jpg")} alt="lifestyle" />
          <div className="filter" />

          <div className="actions">
            <button className="btn btn-round btn-fill btn-neutral btn-modern">
              Read Article
            </button>
          </div>
        </div>

        <div className="content">
          <h6 className="category">News</h6>
          <h4 className="title">
            <a href="liftstyle">Try the new hairstyle from this Barber Shop </a>
          </h4>
          <p className="description">
            When selling products it's always a good idea to go with commanding
            fonts that are good at showing authority and security. I feel like
            Raleway and Roboto do just that.
          </p>
        </div>
      </div>
    </div>
  );
}

function Pop3() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div className="card" data-background="image" data-src={lifestyle_1}>
        <div className="header">
          <div className="category">
            <h6 className="label label-danger">Hipster Tag</h6>
          </div>
        </div>

        <div className="content">
          <h4 className="title title-uppercase">
            <a href="">Here can be your special title for this card</a>
          </h4>
          <p className="description">
            When selling products it's always a good idea to go with commanding
            fonts that are good at showing authority and security. I feel like
            Raleway and Roboto do just that.
          </p>
        </div>
        <div className="filter" />
      </div>
    </div>
  );
}

function Pop4() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div className="card">
        <div className="content">
          <h6 className="category">Best stories</h6>
          <h4 className="title">
            <a href="link">This is a plain Hipster Card, see for yourself</a>
          </h4>
          <p className="description">
            When selling products it's always a good idea to go with commanding
            fonts that are good at showing authority and security. I feel like
            Raleway and Roboto do just that.
          </p>
        </div>
      </div>
    </div>
  );
}

function Pop5() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div className="card">
        <div className="header">
          <img src={lifestyle_8} alt="img" />

          <div className="social-line social-line-visible" data-buttons="4">
            <button className="btn btn-social btn-facebook">
              <i className="fa fa-facebook" />
            </button>
            <button className="btn btn-social btn-twitter">
              <i className="fa fa-twitter" />
            </button>
            <button className="btn btn-social btn-pinterest">
              <i className="fa fa-pinterest" />
            </button>
            <button className="btn btn-social btn-google">
              <i className="fa fa-google-plus" />
            </button>
          </div>
        </div>

        <div className="content">
          <h6 className="category">News</h6>
          <h4 className="title">Use this card and see what you can achive</h4>
          <p className="description">
            When selling products it's always a good idea to go with commanding
            fonts that are good at showing authority and security. I feel like
            Raleway and Roboto do just that.
          </p>
        </div>
      </div>
    </div>
  );
}

function Pop6() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div
        className="card"
        data-background="image"
        data-src="assets/img/lifestyle-2.jpg"
      >
        <div className="header">
          <div className="category">
            <h6 className="label label-warning">Trending Post</h6>
          </div>

          <div className="social-line" data-buttons="3">
            <button className="btn btn-social btn-facebook">
              <i className="fa fa-facebook-square" /> Share
            </button>
            <button className="btn btn-social btn-twitter">
              <i className="fa fa-twitter" /> Tweet
            </button>
            <button className="btn btn-social btn-pinterest">
              <i className="fa fa-pinterest" /> Pin
            </button>
          </div>
        </div>

        <div className="content">
          <h4 className="title">
            Tobias Van Schneider is a German designer raised in Austria...
          </h4>
          <p className="description">
            When selling products it's always a good idea to go with commanding
            fonts that are good at showing authority and security.
          </p>
        </div>
        <div className="filter" />
      </div>
    </div>
  );
}

function Pop7() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div
        className="card card-with-border"
        data-background="image"
        data-src="assets/img/fashion-1.jpg"
      >
        <div className="header" />

        <div className="content text-center">
          <p className="description">
            When selling products it's always a good idea to go with commanding
            fonts that are good at showing authority and security. I feel like
            Raleway and Roboto do just that.
          </p>
        </div>
        <div className="footer text-center">
          <a href="#" className="btn btn-danger btn-fill btn-round">
            Read article
          </a>
        </div>
        <div className="filter" />
      </div>
    </div>
  );
}

function Pop8() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div
        className="card card-just-text card-with-border"
        data-background="image"
        data-src="assets/img/lifestyle-9.jpg"
      >
        <div className="content">
          <h4 className="title title-modern">
            "I liked nutella, triangles and outerspace way before hipsters."
          </h4>
          <p className="description">- Not A Hipster</p>
        </div>
        <div className="filter" />
      </div>
    </div>
  );
}

function Pop9() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div
        className="card card-with-border"
        data-background="color"
        data-color="azure"
      >
        <div className="header">
          <div className="icon">
            <i className="pe-7s-radio" />
          </div>
        </div>
        <div className="content text-center">
          <h4 className="title title-modern">Nicecream.fm</h4>
          <p className="description">
            Best vibes in the marketplace. Listen to the best music from '89. I
            feel like Nicecream and .fm do just that.
          </p>
        </div>
        <div className="footer text-center">
          <button className="btn btn-neutral btn-round btn-fill btn-modern">
            Listen Now!
          </button>
        </div>
      </div>
    </div>
  );
}

function Pop10() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div
        className="card card-with-border"
        data-background="color"
        data-color="orange"
      >
        <div className="content">
          <h6 className="category">Hot Article</h6>
          <h4 className="title">
            <a href="#"> Try the new hairstyle from this Barber Shop</a>
          </h4>
          <p className="description">
            When selling products it's always a good idea to go with commanding
            fonts that are good at showing authority and security. I feel like
            Raleway and Roboto do just that.
          </p>
        </div>
      </div>
    </div>
  );
}

function Pop11() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div
        className="card text-center"
        data-background="image"
        data-src="assets/img/city-2.png"
      >
        <h4 className="title title-modern">Hipster Vacation</h4>

        <div className="content">
          <div className="price">
            <h6>From</h6>
            <h4>
              2.799<b className="currency">$</b>
            </h4>
          </div>
          <p className="description">
            When selling products it's always a good idea to go with commanding
            fonts that are good at showing authority and security.
          </p>
        </div>
        <div className="filter" />
        <div className="footer btn-center">
          <button className="btn btn-neutral btn-round btn-fill">
            Book Now!
          </button>
        </div>
      </div>
    </div>
  );
}

function Pop12() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div className="card card-with-border">
        <div className="header">
          <div className="icon">
            <i className="pe-7s-glasses" />
          </div>
        </div>
        <div className="content text-center">
          <h4 className="title text-center">Hipster Glasses App</h4>
          <p className="description">
            Here can be a description about the application that is for
            download. I feel like this app is what I need.
          </p>
        </div>
        <div className="footer btn-center">
          <button className="btn btn-default btn-round btn-fill btn-info btn-modern">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

function Pop13() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div
        className="card card-just-text card-with-border"
        data-background="image"
        data-src="assets/img/music-3.jpg"
      >
        <div className="content">
          <div className="filter filter-red" />
          <h4 className="title title-modern">
            "I like the way you work it No diggity, I gotta bag it up."
          </h4>
          <p className="description">- Chet Faker</p>
        </div>

        <div className="filter" />
      </div>
    </div>
  );
}

function Pop14() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div
        className="card card-with-border"
        data-background="color"
        data-color="green"
      >
        <div className="header">
          <div className="icon">
            <i className="pe-7s-gift" />
          </div>

          <div className="social-line" data-buttons="3">
            <button className="btn btn-social btn-facebook">
              <i className="fa fa-facebook" />
            </button>
            <button className="btn btn-social btn-twitter">
              <i className="fa fa-twitter" />
            </button>
            <button className="btn btn-social btn-pinterest">
              <i className="fa fa-pinterest" />
            </button>
          </div>
        </div>
        <div className="content text-center">
          <p className="description">
            Your friend <b>Michael Osborn</b> has sent you a hipster gift card.
          </p>
          <br />
        </div>
        <div className="footer btn-center">
          <button className="btn btn-neutral btn-fill btn-modern">
            View Gift Details
          </button>
        </div>
      </div>
    </div>
  );
}

function Pop15() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div className="card" data-background="color" data-color="black">
        <div className="header">
          <img src="assets/img/home-1.jpg" />

          <div className="social-line" data-buttons="2">
            <button className="btn btn-social">
              <i className="fa fa-facebook-square" /> Share
            </button>
            <button className="btn btn-social">
              <i className="fa fa-twitter" /> Tweet
            </button>
          </div>
        </div>

        <div className="content">
          <h6 className="category">Interior Design</h6>
          <h4 className="title">
            <a href="#">Hipster Apartment sold for $1.2 mil.</a>
          </h4>
          <p className="description">
            When selling products it's always a good idea to go with commanding
            fonts that are good at showing authority and security. I feel like
            Raleway and Roboto do just that.
          </p>
        </div>
      </div>
    </div>
  );
}

function Pop16() {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div
        className="card text-center"
        data-background="image"
        data-src="assets/img/city-1.jpg"
      >
        <h4 className="title title-modern">Hipster City</h4>

        <div className="content">
          <div className="price">
            <h6>From</h6>
            <h4>
              1.499<b className="currency">$</b>
            </h4>
          </div>
        </div>

        <div className="footer btn-center">
          <button className="btn btn-neutral btn-round btn-modern">
            Buy Ticket
          </button>
        </div>

        <div className="filter filter-blue" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
