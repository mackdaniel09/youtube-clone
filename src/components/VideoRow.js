import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  title,
  description,
  timestamp,
  channel,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className="videRow_headline">
          {channel} *{" "}
          <span className="videoRow_subs">
            <span className="videoRow_subsNumber">{subs} </span>
            Subscriber{" "}
          </span>
          {views} views * {timestamp}
        </p>
        <p className="videoRow_description">{description}</p>
      </div>
    </div>
  );
}
export default VideoRow;
