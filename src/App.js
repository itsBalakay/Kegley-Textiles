import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Link, Route } from "react-router-dom";

import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

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

      <div className="body-container">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home data={aboutData.main} />}
          />

          <Route
            exact
            path="/AboutUs"
            render={(props) => <About data={aboutData.main} />}
          />

          <Route
            exact
            path="/ContactUs"
            render={(props) => <Contact data={aboutData.main} />}
          />
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
