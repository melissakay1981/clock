import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/welcom/welcome";
import Clock from "./components/clock/clock";
import Contact from './components/contact/Contact';
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Error from "./components/404/error.js"
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
        <Route component={Error} />
        <Route
          path="/" 
          exact
          render={ (props)=> <Welcome {...props} name={props.match.params.name}/> 
         }
          />
        </Switch>
      </div>
    );
  }

  export default App;
