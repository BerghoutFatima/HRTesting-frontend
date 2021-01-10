import { Component } from "react";
import UserService from "../../services/UserService";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import QuizService from "../../services/QuizService";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { EditRounded } from "@material-ui/icons";
import axios from 'axios'

class Quizcollab extends Component {
  constructor(props){
    super(props);
    this.state = { 
      users: [] ,
      
      quizs: []

    }
} 

componentDidMount(){
        
  UserService.getUsers().then((response) => {
      this.setState({ users: response.data})
  });
  QuizService.getQuizs().then((response) => {
    this.setState({ quizs: response.data})
});
}

   
updatehandler = (quiz)=> {
  this.findUserByUsername(quiz.user.username);
  //window.location.pathname = window.location.pathname+"form"
  var res = window.location.pathname.split("/");
  var key = res[2];
  axios.put('/updateQuiz/'+quiz.id,quiz).then(response =>{
    
    console.log("quiz")
    console.log(quiz)
  })
}

findUserByUsername = (username)=> {
  //window.location.pathname = window.location.pathname+"form"
  var res = window.location.pathname.split("/");
  var key = res[2];
  axios.get('trouverUserByUsername?un='+username).then(response =>{
  
    let messgtosend = {
      sendTo : '',
      subject : 'H R T - cnss',
      body : 'Bonjour '+username+', \non vous informe que votre chef de division vient de vous attribuer un questionnaire d évaluation à remplir et à rendre dans un délais d une semaine.\n\nNB: Vous allez le retrouver dans votre espace collaborateur. \n\nBonne journée.'
    }
    messgtosend.sendTo = response.data[0].email
    axios.post('v1/notification/textemail', messgtosend)
    console.log("OK!")
    
  })
}

handleSubmit (event) {
  console.log(event)
  event.preventDefault();
  

}

handleChange = (event) => {
  this.setState({ value: event.target.value})
  console.log(event.target.value)
}


    render() {
      const { users } = this.state.users
      const { quizs } = this.state.quizs
      console.log("ezez")
      console.log(quizs)
    return (

      <div>       
      <div>
         <Navbar/> 
      </div>
      <div>
         <Menu></Menu>
         
         <div  id="box" >
         <u><h2>Liste de questionnaires</h2></u>
         {this.state.quizs.map(quiz => (
         <Card id="boxss" className="border border-info " >
         
          <CardContent style={{color:"#197c8c"}} >
            <Typography variant="h6" component="h2">
                 {quiz.name}
            </Typography>

         </CardContent>
         
           
         <div className="left-side" >
         <label ><li>Délai:</li></label>
         <h6 style={{color:"red"}}>{quiz.date_envoi}</h6>
           <label ><li>Collaborateur:</li></label>
           <h6 style={{color:"#17364e"}}>{quiz.user.username}</h6>
           
    <select 
    id="inputState" 
    onChange={(e) => {
      const selectedUser = e.target.value;
      
      quiz.user.username= selectedUser
      this.updatehandler(quiz);
      console.log(quiz)
    }}
    >
      {
        this.state.users.map(user => (
            //console.log(user)
            <option   
            onClick={event => {
              console.log("dddd")
              console.log(user)
            }}
              >{user.username}</option>
            //console.log(user)
            
            
        )
        )
        
    }
    </select>
  </div>
             <br/>

             <CardActions className="right-side">
        <Button style={{ backgroundColor:"#17a2b8"}} size="small" onClick={this.handleSubmit}
        //onClick={()=> {window.location.pathname = "edit/"+form.id;
                                //}}
                                >Enregistrer</Button>
        <br/>
      </CardActions>
         </Card>
                       ))
                   }
               
         </div>
      </div>
  </div>

      );
    }
  }export default Quizcollab;