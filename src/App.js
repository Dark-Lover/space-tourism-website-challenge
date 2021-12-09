import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/Technology";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/destination" component={Destination} />
          <Route path="/crew" component={Crew} />
          <Route path="/technology" component={Technology} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
