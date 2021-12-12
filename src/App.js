import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/Technology";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/destination" component={Destination} />
          <Route path="/crew" component={Crew} />
          <Route path="/technology" component={Technology} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
