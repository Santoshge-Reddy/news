import React from "react";

const Pop2 = Props => {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div className="card">
        <div
          className="header"
          style={{
            backgroundImage: "url(" + Props.article.urlToImage + ")",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        >
          <div className="filter" />

          <div className="actions">
            <button className="btn btn-round btn-fill btn-neutral btn-modern">
              <a href={Props.article.url}>Read Article</a>
            </button>
          </div>
        </div>

        <div className="content">
          <h6 className="category">{Props.article.source.name}</h6>
          <h4 className="title">
            <a>{Props.article.title}</a>
          </h4>
          <p className="description">{Props.article.content}</p>
        </div>
      </div>
    </div>
  );
};

export { Pop2 };
