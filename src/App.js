import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Projects from "./components/Projects";
import Hire from "./components/Hire";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' exact>
        <Showcase />
      </Route>
      <Route path='/projects'>
        <Projects />
      </Route>
      <Route path='/hire'>
        <Hire />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </Router>
  );
}

export default App;
