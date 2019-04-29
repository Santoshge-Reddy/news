import React from "react";
import hipster_white from "../../public/presentation-assets/img/news_white.png";

const Title = () => {
  return (
    <div className="page-description page-description-header">
      <div className="hipster-container">
        <img src={hipster_white} alt="hipster" />
      </div>
    </div>
  );
};

export { Title };
