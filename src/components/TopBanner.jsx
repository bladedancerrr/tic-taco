import React from "react";
import cuteTaco from "../media/cute_taco.png";
import cuteBurrito from "../media/cute_burrito.png";
import "./TopBanner.css";
import "./sharedStyles.css";

const TopBanner = () => {
  return (
    <div className="header">
      <img
        src={cuteTaco}
        alt="This a cute Mexican snack :3"
        className="BannerImage"
      ></img>
      Tic-Taco
      <img
        src={cuteBurrito}
        alt="This a cute Mexican snack :3"
        className="BannerImage"
      ></img>
    </div>
  );
};

export default TopBanner;
