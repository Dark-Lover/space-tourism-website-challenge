import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";

// import Section from "./pages/section/Section";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/:section" element={<Section />} /> */}
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
