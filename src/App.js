import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Menu from "./components/dashboard/menu.component";
import Dashboard from "./components/dashboard/dashboard.component";
import Choices from "./components/dashboard/choices.component";
import CreerFormulaire from "./components/creer_formulaire.component";
import CreerQuestionnaire from "./components/questionnaire.component";

function App() {
  return (<Router>
    
    <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/menu" component={Menu} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/choices" component={Choices} />
            <Route path="/newform" component={CreerFormulaire} />
            <Route path="/questionnaire" component={CreerQuestionnaire} />
          </Switch>
        </div>
      
        
    </Router>
  );
}

export default App;
