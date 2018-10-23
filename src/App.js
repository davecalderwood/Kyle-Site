import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './component/About'
import Contact from './component/Contact'
import Videos from './component/Videos'
import Forms from './using-forms/Forms'
// import LoginPage from './using-forms/LoginPage'
import Home from './component/Home'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
      {/* Create a basic framework for the site, I need a header with navigation, maybe a sign in so when Kyle posts they get notifications */}
      {/* Try out the hamburger menu */}

        <div className="Header">
          <div className="login">
          
          <Link to="/Forms">
            <button type="button" className="loginButton">Login or Register
            </button>
            </Link>
          </div>
          
        <Link to="/">
          <div className="return"><img src="baseline-home-24px.svg" alt="home"></img>
          </div>    
        </Link> 
        </div>

        <div className="main">
          {/* Route paths */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/videos" component={Videos} />
          <Route path="/contact" component={Contact} />
          <Route path="/forms" component={Forms} />
          {/* <h1 className="title">Kyle's Website built by me</h1> */}

        
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
