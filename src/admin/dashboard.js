import React from "react";
export default () => {
  var quote_list = [
    '"In the end we only regret the chances we didn\'t take."',
    '"Hello Hello Hello"',
    '"Hi Hi Hi Hi Hi"'
  ];
  var length_quote = quote_list.length;
  var random_quote = Math.floor(Math.random() * Math.floor(length_quote));

  return (
    <div>
      <div className="card-box col-md-4 col-sm-6">
        <div
          className="card card-with-border card-just-text"
          data-background="color"
          data-color="black"
        >
          <div className="content">
            <h4 className="title">{quote_list[random_quote]}</h4>
            <p className="description">- Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};
