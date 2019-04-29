import React from "react";
import ReactDOM from "react-dom";
import "./imports.js";
import { Pop1 } from "./pops/pop1.js";
import { Pop2 } from "./pops/pop2.js";
import { Pop10 } from "./pops/pop10.js";
import logo from "../public/presentation-assets/img/new_logo.png";
import hipster_white from "../public/presentation-assets/img/news_white.png";

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("bd6c75ce07f548c495161947b459a3de");

const Logo = () => {
  return (
    <a
      id="logo"
      rel="noopener noreferrer"
      target="_blank"
      href="https://santoshge-reddy.github.io/Santosh/"
    >
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="brand">News</div>
      </div>
    </a>
  );
};

const Title = () => {
  return (
    <div className="page-description page-description-header">
      <div className="hipster-container">
        <img src={hipster_white} alt="hipster" />
      </div>
    </div>
  );
};

class App extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      articles: [],
      country: "us",
      language: "en",
      q: "",
      category: "",
      sources: "",
      input: "",
      className: "row"
    };
    this.searcheverything = this.searcheverything.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // var url = new URL("https://newsapi.org/v2/top-headlines"),
    //   params = {
    //     apiKey: "bd6c75ce07f548c495161947b459a3de",
    //     country: "in",
    //     category: "health",
    //     pageSize: 50
    //   };
    // Object.keys(params).forEach(key =>
    //   url.searchParams.append(key, params[key])
    // );

    const query = {
      language: this.state.language,
      country: this.state.country,
      q: this.state.q,
      category: this.state.category,
      sources: this.state.sources
    };
    newsapi.v2.topHeadlines(query).then(data => {
      let news = data.articles.map((article, i) => {
        if (i !== 0 && i % 5 === 0) {
          return <Pop10 />;
        } else if (i === 0) {
          return <Pop1 />;
        }
        return <Pop2 key={article.url} article={article} />;
      });

      this.setState({ articles: news });
      this.setState({ className: "masonry-container" });
    });
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  searcheverything(e) {
    e.preventDefault();
    if (this.state.input) {
      const query = {
        q: this.state.input
      };
      newsapi.v2.everything(query).then(data => {
        let search = data.articles.map(article => {
          return <Pop2 key={article.url} article={article} />;
        });
        this.setState({ articles: search });
        this.setState({ className: "masonry-container" });
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Logo />
        {/* <form className="search" action=""> */}
        <div className="row" id="search">
          <div className="col-md-4 col-sm-4" />
          <div className="col-md-4 col-sm-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
                onChange={this.handleChange}
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-btn btn-default"
                  type="button"
                  onClick={this.searcheverything}
                >
                  Go!
                </button>
              </span>
            </div>
          </div>
          <div className="col-md-4 col-sm-4" />
        </div>
        {/* </form> */}
        <div className="container">
          <Title />
          <div className={this.state.className}>{this.state.articles}</div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
