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
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    
} 

componentDidMount(){
        
  UserService.getUsers().then((response) => {
    //console.log("----")
      this.setState({ users: response.data})
      //console.log("((((")
  });
  ////
  QuizService.getQuizs().then((response) => {
    this.setState({ quizs: response.data})
});
////
}

   
updatehandler = (quiz)=> {
  //window.location.pathname = window.location.pathname+"form"
  var res = window.location.pathname.split("/");
  var key = res[2];
  axios.put('/updateQuiz/'+quiz.id,quiz).then(response =>{
    
    console.log("quiz")
    console.log(quiz)
  })
}

handleSubmit (event) {
  console.log("ccc")
  console.log(event)
  //alert("your form is: "+event.target);
  event.preventDefault();
  

}

handleChange = (event) => {
  this.setState({ value: event.target.value})
  console.log("didi")
  console.log(event.target.value)
}


    render() {
      const { users } = this.state.users
      const { quizs } = this.state.quizs
      //const [ userState, setUserState] = useState();
    return (

      <div>       
      <div>
         <Navbar/> 
      </div>
      <div>
         <Menu></Menu>
         
         <div  id="box" >
         <h1>Liste des questionnaires</h1>
         {this.state.quizs.map(quiz => (
         <Card id="boxss" className="border border-info " >
         
          <CardContent style={{color:"#197c8c"}} >
            <Typography variant="h6" component="h2">
                 {quiz.name}
            </Typography>

         </CardContent>
         <div className="left-side" >
           <label >Collaborateur:</label>
           <br></br>
           <h6 style={{color:"#17364e"}} className=" btn btn-" >{quiz.user.username}</h6>
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
            <option  selected  
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