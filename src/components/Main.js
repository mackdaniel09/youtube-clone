import React from "react";
import "../App.css";
import RecommendVideos from "./RecommendVideos";
import SidebarRow from "./SidebarRow";

function Main() {
  return (
    <div className="app_page">
      <SidebarRow />
      <RecommendVideos />
      <h1>Main Page</h1>
    </div>
  );
}
export default Main;
