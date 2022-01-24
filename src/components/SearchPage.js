import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import React from "react";
import ChannelRow from "./ChannelRow";
import "./SearchPage.css";
import SidebarRow from "./SidebarRow";
import VideoRow from "./VideoRow";
import "../App.css";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://source.unsplash.com/random/200x200"
        channel="unsplash"
        verified
        subs="660K"
        noOfVidoes={382}
        description="The best resources of images"
      />
      <hr />
      <VideoRow
        image="https://source.unsplash.com/random/200x202"
        channel="unsplash"
        views="650K"
        subs="660K"
        timestamp="1 minute ago"
        title="Images in Unsplash"
        description="The best resources of images"
      />
      <VideoRow
        image="https://source.unsplash.com/random/200x202"
        channel="unsplash"
        views="650K"
        subs="660K"
        timestamp="1 minute ago"
        title="Images in Unsplash"
        description="The best resources of images"
      />
      <VideoRow
        image="https://source.unsplash.com/random/200x203"
        channel="unsplash"
        views="650K"
        subs="660K"
        timestamp="1 minute ago"
        title="Images in Unsplash"
        description="The best resources of images"
      />
      <VideoRow
        image="https://source.unsplash.com/random/200x204"
        channel="unsplash"
        views="650K"
        subs="660K"
        timestamp="1 minute ago"
        title="Images in Unsplash"
        description="The best resources of images"
      />
    </div>
  );
}
export default SearchPage;
