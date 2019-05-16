import React from "react";
import ReactDOM from "react-dom";
import Masonry from "react-masonry-component";

import "./imports.js";

import Pop1 from "./pops/pop1.js";
import Pop2 from "./pops/pop2.js";
import Pop10 from "./pops/pop10.js";
import Logo from "./includes/logo.js";
import Title from "./includes/title.js";
import Messenger from "./bot/messenger.js";
import pop1 from "./pops/pop1.js";

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
      searchtype: "", //everything or topHeadlines
      page: 1,
      isloading: true
    };

    this.searcheverything = this.searcheverything.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  // Binds our scroll event handler
  handleScroll() {
    // const {
    //   loadArticles,
    //   state: { error, isLoading, hasMore }
    // } = this;

    //   // Bails early if:
    //   // * there's an error
    //   // * it's already loading
    //   // * there's nothing left to load
    // if (error || isLoading || !hasMore) return;
    // console.log("bottom");
    //   // Checks that the page has scrolled to the bottom
    // if (
    //   window.innerHeight + document.documentElement.scrollTop ===
    //   document.documentElement.offsetHeight
    // ) {
    if (this.state.isloading && this.state.page !== 6) {
      this.setState({ isloading: false });
      this.loadArticles();
    }
    // }
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.onScroll, false);
  // }

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
    window.addEventListener("scroll", this.handleScroll);
    this.loadArticles();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
          let search = data.articles.map(article => {
            return <Pop2 key={article.url} article={article} />;
          });
          var joined = this.state.articles.concat(search);
          this.setState({
            articles: joined,
            searchtype: "everything",
            isloading: true,
            page: this.state.page + 1
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
          let news = data.articles.map(article => {
            return <Pop2 key={article.url} article={article} />;
          });

          var joined = this.state.articles.concat(news);
          this.setState({
            articles: joined,
            searchtype: "topHeadlines",
            isloading: true,
            page: this.state.page + 1
          });
        }
      });
    }
  };

  handleChange(e) {
    this.setState({ q: e.target.value });
  }

  searcheverything(e) {
    e.preventDefault();
    this.setState({
      articles: [],
      country: "",
      language: "en",
      q: this.state.q,
      category: "",
      sources: "",
      searchtype: "", //everything or topHeadlines
      page: 1,
      isloading: true
    });
    document.getElementById("search-field").blur();
    this.loadArticles();
  }

  render() {
    return (
      <div className="wrapper">
        <Logo />
        <Messenger />
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
