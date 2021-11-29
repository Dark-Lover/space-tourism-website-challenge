import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Section from "./pages/section/Section";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:section" element={<Section />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
