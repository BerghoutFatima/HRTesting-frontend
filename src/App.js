import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Navbar from "./components/navbar.component";
import Menu from "./components/menu.component";

function App() {
  return (<Router>
    
    <div className="App">
    
      
    <navbar/>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/navbar" component={Navbar} />
            <Route path="/menu" component={Menu} />
          </Switch>
        </div>
      
        
    </Router>
  );
}

export default App;
