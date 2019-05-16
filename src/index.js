import React from "react";
import ReactDOM from "react-dom";
import Masonry from "react-masonry-component";
// import request from "superagent";
import "./imports.js";

import Pop1 from "./pops/pop1.js";
import Pop2 from "./pops/pop2.js";
import Pop10 from "./pops/pop10.js";
import Logo from "./includes/logo.js";
import Title from "./includes/title.js";

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("bd6c75ce07f548c495161947b459a3de");

class App extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      articles: [],
      country: "",
      language: "en",
      q: "",
      category: "",
      sources: "",
      page: 1
    };
    this.searcheverything = this.searcheverything.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // Binds our scroll event handler
    window.onscroll = () => {
      const {
        loadArticles,
        state: { error, isLoading, hasMore }
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || isLoading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadArticles();
      }
    };
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

    this.loadArticles();
  }

  // loadArticles = () => {
  //   this.setState({ isLoading: true }, () => {
  //     // const url = new URL("https://newsapi.org/v2/top-headlines/");
  //     const query = {
  //       apiKey: "bd6c75ce07f548c495161947b459a3de",
  //       language: this.state.language,
  //       country: this.state.country,
  //       q: this.state.q,
  //       category: this.state.category,
  //       sources: this.state.sources,
  //       page: this.state.page
  //     };
  //     newsapi.v2
  //       .topHeadlines(query)
  //       .then(results => {
  //         console.log(results);
  //         // Creates a massaged array of user data

  //         const nextUsers = results.body.results.map(user => ({
  //           email: user.email,
  //           name: Object.values(user.name).join(" "),
  //           photo: user.picture.medium,
  //           username: user.login.username,
  //           uuid: user.login.uuid
  //         }));

  //         // Merges the next users into our existing users
  //         this.setState({
  //           // Note: Depending on the API you're using, this value may
  //           // be returned as part of the payload to indicate that there
  //           // is no additional data to be loaded
  //           hasMore: this.state.users.length < 100,
  //           isLoading: false,
  //           users: [...this.state.users, ...nextUsers]
  //         });
  //       })
  //       .catch(err => {
  //         this.setState({
  //           error: err.message,
  //           isLoading: false
  //         });
  //       });

  // //     this.setState({ articles: news });
  // //     this.setState({ className: "masonry-container" });

  //   });
  // };

  loadArticles = () => {
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
          return <Pop10 key={i} />;
        } else if (i === 0) {
          return <Pop1 key={i} />;
        }
        return <Pop2 key={article.url} article={article} />;
      });

      this.setState({ articles: news });
      this.setState({ className: "masonry-container" });
      console.log(news);
    });
  };

  handleChange(e) {
    this.setState({ q: e.target.value });
  }

  searcheverything(e) {
    e.preventDefault();
    document.getElementById("search-field").blur();
    if (this.state.q) {
      const query = {
        language: this.state.language,
        q: this.state.q,
        category: this.state.category,
        sources: this.state.sources
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
        <form onSubmit={this.searcheverything}>
          <div className="row" id="search">
            <div className="col-md-4 col-sm-4" />
            <div className="col-md-4 col-sm-4">
              <div className="input-group">
                <input
                  type="text"
                  id="search-field"
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
        </form>
        <div className="container">
          <Title />
          <Masonry className={"my-gallery-class"}>
            {this.state.articles}
          </Masonry>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
