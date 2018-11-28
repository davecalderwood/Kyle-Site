import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'
import Videos from './pages/Videos'
import Forms from './usingforms/Forms'
import Home from './pages/Home'
import Input from './usingforms/Forms'
import './App.css';


class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">
      {/* Create a basic framework for the site, I need a header with navigation, a footer with more navigaion */}
      {/* Hamburger menu with all of the navigation locations*/}     
        <div className="Header">
          <div className="login">
          <nav role="navigation">
            <div id="menuToggle">

              {/* The checkbox makes it clickable and the three span tags are the three lines that collapse into an X on click */}
              {/* This is the hamburger menu */}
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>

              <ul id="menu">
                <a href="/"><li>Home</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/videos"><li>Videos</li></a>
                <a href="/contact"><li>Contact</li></a>
                <a href="/input"><li>Manage Videos</li></a>
              </ul>
            </div>
          </nav>
          </div>
          
        </div>

        <div className="main">
          {/* Route paths */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/videos" component={Videos} />
          <Route path="/contact" component={Contact} />
          <Route path="/forms" component={Forms} />
          <Route path="/input" component={Input} />
        
        </div>

        <div className="footer">

        <Link to="/About">
            <div className="about">
                <h3>About</h3>
            </div>
          </Link>

        <Link to="/Videos">
          <div className="videos">
            <h3>Videos</h3>
          </div>
        </Link>

        <Link to="/Contact">
          <div className="contact">
              <h3>Contact</h3>
          </div>
        </Link>
        
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
