import "./App.css";
import Header from "./components/Header";
import RecommendVideos from "./components/RecommendVideos";
import Sidebar from "./components/Sidebar";
import SearchPage from "./components/SearchPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app_page">
        <Routes>
          <Route path="/" element={[<Sidebar />, <RecommendVideos />]} />
          {/* <Route path="/" element={<RecommendVideos />} /> */}
          <Route path="/search/:id" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
