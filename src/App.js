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
import Forms from "./components/dashboard/forms.component";
import Quizs from "./components/dashboard/quizs.component";
import Editform from "./components/dashboard/editform.component";
import Editquiz from "./components/dashboard/editquiz.component";
import Formcollab from "./components/dashboard/formcollab.component";
import Quizcollab from "./components/dashboard/quizcollab.component";

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
            <Route path="/forms" component={Forms} />
            <Route path="/quizs" component={Quizs} />
            <Route path="/edit" component={Editform} />
            <Route path="/editquiz" component={Editquiz} />
            <Route path="/formcollab" component={Formcollab} />
            <Route path="/quizcollab" component={Quizcollab} />
            <Route path="/newform" component={CreerFormulaire} />
            <Route path="/questionnaire" component={CreerQuestionnaire} />
          </Switch>
        </div>
      
        
    </Router>
  );
}

export default App;
