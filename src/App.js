import React from "react";
// import ReactDOM from "react-dom";
import Masonry from "react-masonry-component";
import Select from "react-select";
// import { NavLink } from "react-router-dom";
import "./imports.js";

import Pop1 from "./pops/pop1.js";
import Pop2 from "./pops/pop2.js";
// import Pop10 from "./pops/pop10.js";
// import Logo from "./includes/logo.js";
import Title from "./includes/title.js";
import Messenger from "./bot/messenger.js";

const NewsAPI = require("newsapi");
// import NewsAPI from "newsapi";
const newsapi = new NewsAPI("bd6c75ce07f548c495161947b459a3de");

class App extends React.Component {
  constructor(Props) {
    super(Props);
    document.body.style.backgroundColor = "#555";
    this.state = {
      articles: [],
      country: "",
      language: "en",
      q: "",
      category: "",
      sources: "",
      searchtype: "", //everything or topHeadlines
      page: 1,
      isloading: false,
      shouldHide: false
    };

    this.searcheverything = this.searcheverything.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onfocus = this.onfocus.bind(this);
  }

  // Binds our scroll event handler
  onScroll = () => {
    if (this.state.isloading && this.state.page <= 5) {
      this.setState({ isloading: false });
      this.loadArticles();
    }
  };

  componentDidMount() {
    // var url = new URL("https://newsapi.org/v2/top-headlines"),
    //   params = {
    //     apiKey: "bd6c75ce07f548c495161947b459a3de",
    //     country: "",
    //    language:"en"
    //     category: "health",
    //     pageSize: 50
    //   };
    // Object.keys(params).forEach(key =>
    //   url.searchParams.append(key, params[key])
    // );
    window.addEventListener("scroll", this.onScroll, false);
    var joined = this.state.articles.concat(<Pop1 />);
    this.setState({ articles: joined });
    this.loadArticles();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  loadArticles = () => {
    if (this.state.q) {
      const query = {
        language: this.state.language,
        q: this.state.q,
        category: this.state.category,
        sources: this.state.sources,
        page: this.state.page
      };
      newsapi.v2.everything(query).then(data => {
        if (data.status === "ok") {
          var page = this.state.page + 1;
          let search = data.articles.map(article => {
            return <Pop2 key={article.url} article={article} />;
          });
          var joined = this.state.articles.concat(search);
          this.setState({
            articles: joined,
            searchtype: "everything",
            isloading: true,
            page: page
          });
        }
      });
    } else {
      const query = {
        language: this.state.language,
        country: this.state.country,
        q: this.state.q,
        category: this.state.category,
        sources: this.state.sources,
        page: this.state.page
      };
      newsapi.v2.topHeadlines(query).then(data => {
        if (data.status === "ok") {
          var page = this.state.page + 1;
          let news = data.articles.map(article => {
            return <Pop2 key={article.url} article={article} />;
          });

          var joined = this.state.articles.concat(news);
          this.setState({
            articles: joined,
            searchtype: "topHeadlines",
            isloading: true,
            page: page
          });
        }
      });
    }
  };

  handleChange(e) {
    this.setState({ q: e.target.value });
  }

  onfocus() {
    if (!this.state.shouldHide) {
      this.setState({ shouldHide: true });
      document.body.style.backgroundColor = "skyblue";
    }
  }

  searcheverything(e) {
    document.body.style.backgroundColor = "#555";
    this.setState({
      articles: [],
      country: "",
      language: this.state.language,
      q: this.state.q,
      category: "",
      sources: "",
      searchtype: "everything", //everything or topHeadlines
      page: 1,
      isloading: false,
      shouldHide: false
    });
    e.preventDefault();
    document.getElementById("search-field").blur();
    this.loadArticles();
  }

  render() {
    console.log("rendered");

    const country = [
      { value: "ca", label: "Canada" },
      { value: "cn", label: "China" },
      { value: "in", label: "India" },
      { value: "ru", label: "Russia" },
      { value: "sa", label: "South Africa" },
      { value: "us", label: "United States" }
    ];

    const category = [
      { value: "business", label: "business" },
      { value: "entertainment", label: "entertainment" },
      { value: "general", label: "general" },
      { value: "health", label: "health" },
      { value: "science", label: "science" },
      { value: "sports", label: "sports" },
      { value: "technology", label: "technology" }
    ];

    return (
      <div className="wrapper container">
        <Messenger />
        <form onSubmit={this.searcheverything}>
          <div className="row" id="search">
            <div className="col text-center">
              <input
                type="text"
                id="search-field"
                className="form-control"
                placeholder="Search for..."
                onChange={this.handleChange}
                onClick={this.onfocus}
              />
            </div>
          </div>

          <div id={this.state.shouldHide ? "" : "hidden"}>
            <br />
            <br />

            <div className="row">
              <div className="col-md-3 col-sm-1 col-xs-1" />

              {/* <div className="col-md-3 col-sm-5 col-xs-5">
                <Select
                  options={country}
                  isSearchable={false}
                  placeholder="Country"
                />
              </div>
              <div className="col-md-3 col-sm-5 col-xs-5">
                <Select
                  options={category}
                  isSearchable={false}
                  placeholder="Category"
                />
              </div> */}

              <div className="col-md-3 col-sm-1 col-xs-1" />
            </div>

            <div className="row">
              <div className="col text-center">
                <br />
                <br />
                <br />
                <br />

                <button
                  className="btn btn-primary"
                  onClick={this.searcheverything}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="container" id={this.state.shouldHide ? "hidden" : ""}>
          <Title />
          <Masonry className={"my-gallery-class"}>
            {this.state.articles}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
