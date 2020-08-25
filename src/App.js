import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/welcom/welcome";
import Clock from "./components/clock/clock";
import Contact from './components/contact/Contact';
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Error from "./components/404/error.js";
import Jeopardy from "./components/jeopardy/Jeopardy"
function App() {

  return (
    <div className="App" >
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Melissa" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        
        <Route
          path="/" 
          exact
          render={ (props)=> <Welcome {...props} name={props.match.params.name}/> 
        }
        
          />
          <Route path = "/jeopardy" component = {Jeopardy} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }

  export default App;
