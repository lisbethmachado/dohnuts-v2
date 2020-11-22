import React from "react";
import icon from '../../images/donut.png';

function Banner() {
    return (
<div style={{paddingTop: 15}} className="media">
  <div className="media-body">
    <h1 className="title">D'ohnuts</h1>
    <p className="description">An interactive tribute to Homer Simpson and his love for donuts. Envision yourself as Homer Simpson and Create any donut you can imagine!
  </p>
  </div>
  <img src={icon} style={{paddingTop: 15, paddingRight: 15}} className="ml-3" alt="donut" />
</div>
);
}

export default Banner;