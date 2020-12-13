import React, { Component } from "react";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import QuizService from "../../services/QuizService";
import { formatMs, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { EditRounded, ThreeSixty } from "@material-ui/icons";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
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


  class Editquiz extends React.Component {
    constructor() {
      
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
  
    
  
    componentDidMount() {
      var res = window.location.pathname.split("/");
      var key = res[2];
       axios.get('http://localhost:8080/detailsQuiz/'+key).then(response =>{
                this.setState({ quiz: response.data})
              })
            }

            updatehandler = (quiz)=> {
              var res = window.location.pathname.split("/");
              var key = res[2];
              axios.put('/updateQuiz/'+key,quiz).then(response =>{
                
                console.log("quiz")
                console.log(quiz)
              })
            }

            deletehandler = ()=> {
              var res = window.location.pathname.split("/");
              var key = res[2];
              axios.delete('http://localhost:8080/supprimerQuiz/'+key).then(response =>{
                
                console.log("responseOnDelete")
                console.log(response)
              })
            }
            
          

          handleSubmit = (e) => {
            var res = window.location.pathname.split("/");
            var key = res[2];
            axios.get('http://localhost:8080/detailsQuiz/'+key).then(response =>{
                this.setState({ quiz: response.data})
                window.location.pathname = "quizs"
               /* console.log('&&&')
                console.log(this.state.form)
                console.log('$$$')*/
            //this.state.form.=this.handleChangeInput(e).name;
            console.log(this.state.quiz.name)
            
          })
        }

    render() {
      var res = window.location.pathname.split("/");
      var key = res[2];
      const { quiz } = this.state
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
                   <Menu></Menu>
                   <div className="form">
                   <div className="">
                   <div className="inner2">
                  <Container >
                    <h3>Editer le questionnaire {this.state.quiz.name}</h3>
                    {
                      this.state.quiz.questions.map( (x,index) => (
                      <TextField key={index} className="form-control"
                      label={x}
                      name="this.state.quiz.questions[index]"
                      //value={this.state.quiz.questions[index]}
                      
                      onChange={event => {
                        x=event.target.value
                        this.state.quiz.questions[index]=x
                        
                        this.updatehandler(this.state.quiz);
                        
                      }
                      }
                      />
                      
                      
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
  }export default Editquiz;

  
