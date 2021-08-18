import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Link, Route } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
// import Contact from "./Components/Contact";

function App() {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    fetch("/aboutData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAboutData(data);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" render={(props) => <Home props={aboutData} />} />

        <Route
          exact
          path="/AboutUs"
          render={(props) => <About data={aboutData.main} />}
        />
      </Switch>
    </div>
  );
}

export default App;
