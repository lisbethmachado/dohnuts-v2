import React from "react";
import icon from '../../images/donut.png';

function Banner() {
    return (
<div className="media">
  <div className="media-body">
    <h1 className="title">D'ohnuts</h1>
    <p className="description">Help Homer Simpson create unique, delicious donut recipes, then Bake, Eat and Repeat!
  </p>
  </div>
  <img src={icon} className="ml-3" alt="donut" />
</div>
);
}

export default Banner;