import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Projects from "./components/Projects";
import Hire from "./components/Hire";
import About from "./components/About";
import RingLoader from "react-spinners/RingLoader";
import Logo from "./assets/Logo500x300.png";

function App() {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading ? (
        <div className='bg-black h-screen flex justify-center items-center'>
          <div className='flex flex-col items-center space-y-6'>
            <img src={Logo} alt='Logo' />
            <RingLoader color={"#6deac9"} loading={loading} size={100} />
          </div>
        </div>
      ) : (
        <Router>
          <Header />
          <Route path='/' exact>
            <Showcase />
          </Route>
          <Route path='/projects' exact>
            <Projects />
          </Route>
          <Route path='/hire' exact>
            <Hire />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
        </Router>
      )}
    </>
  );
}

export default App;
