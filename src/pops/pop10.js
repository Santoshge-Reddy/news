import React from "react";
export default () => {
  return (
    <div className="card-box col-md-4 col-sm-6">
      <div
        className="card card-with-border"
        data-background="color"
        data-color="orange"
      >
        <div className="content">
          <h4 className="title">ProExamini.com</h4>
          <p className="description">
            ProExamini is the premier destination for certification preparation
            for PMI-PMP and PMI-ACP exams.
          </p>
          <a
            href="https://proexamini.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-neutral btn-round btn-fill btn-modern">
              Try Now!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
