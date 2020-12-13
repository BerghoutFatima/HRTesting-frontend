import React, { Component } from "react";
import Navbar from "./navbar.component";
import MenuCollab from "./menucollab.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import QuizService from "../../services/QuizService";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

class  PasserQuiz extends Component {

    constructor(){
      super();
      this.state = { 
        quiz:{
          id:'',
        name:'',
        questions:[],
        reponses:[]
      }
      };
        
    } 

    

    componentDidMount(){
      var res = window.location.pathname.split("/");
      var key = res[2];
      console.log("ce "+key)
      QuizService.getQuizs().then(response =>{
        for(let i=0; i<response.data.length ; i++)
        {
          

          if(response.data[i].user.username == res[2])
          {
            this.setState({ quiz: response.data[i]})
          }

        }
                
              })
    }

    updatehandler = (quiz)=> {
      var res = window.location.pathname.split("/");
      var key = res[2];
      //window.location.pathname = res[1]
      axios.put('/updateQuiz/'+quiz.id,quiz).then(response =>{
        
        console.log("quiz")
        console.log(quiz)
      })
    }

    handleSubmit = (e) => {
      var res = window.location.pathname.split("/");
      var key = res[2];
      window.location.pathname = res[1]
      axios.get('detailsQuiz/'+key).then(response =>{
          this.setState({ quiz: response.data})
      //window.location.pathname = res[1]+"/"+res[2]
      console.log("aq "+window.location.pathname)
      
    })
  }

        render (){
        
          const {quiz} = this.state
          var liste=this.state.quiz.questions;
          //console.log(form.questions[0])
          this.state.quiz.questions = liste;
          return (
            
            <div>  
              <div>       
                    <div>
                       <Navbar/> 
                    </div>
                    <div>
                       <MenuCollab></MenuCollab>
                       <div className="form">
                       <div className="">
                       <div className="inner2">
                      <Container >
                        <h3>Répondre au quistionnaire {this.state.quiz.name}</h3>
                        {
                          this.state.quiz.reponses.map( (x,index) => (
                            <div>
                          <h6 className="left-side"> {this.state.quiz.questions[index]}</h6>
                          <TextField key={index} className="form-control"
                          label={x}
                          name="this.state.quiz.reponses[index]"
                          //value={this.state.form.questions[index]}
                          
                          onChange={event => {
                            x=event.target.value
                            this.state.quiz.reponses[index]=x
                            
                            this.updatehandler(this.state.quiz);
                            
                          }
                          }
                          />
                          </div>
                          
                          ))
                          
                          
                        }
                        <br></br>
                        <br></br>
                        <Button  style={{color:"white", backgroundColor:"#17a2b8"}}
                        variant="contained"
                        type="submit"
                        onClick={this.handleSubmit}
                        >
                        Enregistrer</Button>
                        <Button  style={{color:"white",backgroundColor:"#6c6f75"}}
                        variant="contained"
                        type="cancel"
                        //onClick={this.deletehandler()}
                        onClick={()=> {window.location.pathname = "quizs"}}
                        >
                        Annuler</Button>
            
                      </Container>
                </div> 
                </div> 
                </div> 
                </div>
                </div>  
                </div> 
          );
        
            
}
}export default PasserQuiz;

