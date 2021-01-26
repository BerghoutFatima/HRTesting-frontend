import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Menu from "./components/dashboard/menu.component";
import MenuCollab from "./components/dashboard/menucollab.component";
import PasserForm from "./components/dashboard/passerform.component";
import PasserQuiz from "./components/dashboard/passerquiz.component";
import Dashboard from "./components/dashboard/dashboard.component";
import DashboardCollab from "./components/dashboard/dashboardcollab.component";
import Choices from "./components/dashboard/choices.component";
import CreerFormulaire from "./components/creer_formulaire.component";
import CreerQuestionnaire from "./components/questionnaire.component";
import Forms from "./components/dashboard/forms.component";
import Reports from "./components/dashboard/reports.component";
import Quizs from "./components/dashboard/quizs.component";
import Editform from "./components/dashboard/editform.component";
import Editquiz from "./components/dashboard/editquiz.component";
import Formcollab from "./components/dashboard/formcollab.component";
import Quizcollab from "./components/dashboard/quizcollab.component";
import EventCalendar from "./components/dashboard/calendar";
import Grille from "./components/dashboard/grille.component";
import GrilleCollab from "./components/dashboard/grilleCollab";
import Grilles from "./components/dashboard/grilles.component";
import Editgrille from "./components/dashboard/editgrille.component";
import Resultat from "./components/dashboard/resultat.component";
import ResultForm from "./components/dashboard/resultForm.component";
import ListQuizRendus from "./components/dashboard/listquizrendus";
import ListFormsRendus from "./components/dashboard/listformsrendus";
import DetailsQuizRendu from "./components/dashboard/detailsQuizRendu";
import DetailsQuizCollab from "./components/dashboard/detailsQuizCollab";
import DetailsFormRendu from "./components/dashboard/detailsFormRendu";
import DetailsFormCollab from "./components/dashboard/detailsFormCollab";
import Administrateur from "./components/dashboard/admin";
import Modal from "./components/dashboard/modal";


function App() {
  return (<Router>
    
    <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/menu" component={Menu} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/menucollab" component={MenuCollab} />
            <Route path="/dashboardcollab" component={DashboardCollab} />
            <Route path="/choices" component={Choices} />
            <Route path="/forms" component={Forms} />
            <Route path="/quizs" component={Quizs} />
            <Route path="/edit" component={Editform} />
            <Route path="/editquiz" component={Editquiz} />
            <Route path="/formcollab" component={Formcollab} />
            <Route path="/quizcollab" component={Quizcollab} />
            <Route path="/passerform" component={PasserForm} />
            <Route path="/passerquiz" component={PasserQuiz} />
            <Route path="/calendar" component={EventCalendar} />
            <Route path="/grille" component={Grille} />
            <Route path="/grillecollab" component={GrilleCollab} />
            <Route path="/reports" component={Reports} />
            <Route path="/grilles" component={Grilles} />
            <Route path="/editgrille" component={Editgrille} />
            <Route path="/resultat" component={Resultat} />
            <Route path="/resultForm" component={ResultForm} />
            <Route path="/listquizrendus" component={ListQuizRendus} />
            <Route path="/listformsrendus" component={ListFormsRendus} />
            <Route path="/detailsquiz" component={DetailsQuizRendu} />
            <Route path="/detailsquizcollab" component={DetailsQuizCollab} />
            <Route path="/detailsform" component={DetailsFormRendu} />
            <Route path="/detailsformcollab" component={DetailsFormCollab} />
            <Route path="/newform" component={CreerFormulaire} />
            <Route path="/questionnaire" component={CreerQuestionnaire} />
            <Route path="/admin" component={Administrateur} />
            <Route path="/modal" component={Modal} />
          </Switch>
        </div>
      
        
    </Router>
  );
}

export default App;
