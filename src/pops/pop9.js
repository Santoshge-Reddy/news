import React from "react";

export default Props => {
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
};
