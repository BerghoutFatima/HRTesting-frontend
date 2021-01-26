import React, { Component } from "react";
import Navbar from "./navbar.component";
import MenuCollab from "./menucollab.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { formatMs, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import moment from 'moment';
import QuizService from "../../services/QuizService";
import { CheckBox } from "@material-ui/icons";

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
        quiz : {},
      maquestion : [],
      monchoix : [] 
      };
    }
  
  
    componentDidMount() {
      console.log('componentDidMount() lifecycle');
      var res = window.location.pathname.split("/");
      var key = res[2];
      QuizService.getQuizs().then(response =>{
        for(let i=0; i<response.data.length ; i++)
        {
          

          if(response.data[i].user.username == res[2])
          {
            this.setState({ quiz: response.data[i]})
            console.log("---")
            console.log(this.state.quiz)
          }

        }
                console.log(this.state.quiz)
                axios.get('http://localhost:8080/trouverquestions?un='+this.state.quiz.id).then((response) =>{
                console.log("je suis les qsts")  
                this.setState({ maquestion: response.data});
                console.log(this.state.maquestion)
                  
                  //
    })
    axios.get('http://localhost:8080/trouverChoixParQuizId?un='+this.state.quiz.id).then((response) =>{
    console.log("je suis choices")  
    this.setState({ monchoix: response.data});
      //console.log("----")
    console.log(this.state.monchoix)
              })
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

            updateQuestion = (qst)=> {
              axios.put('/updateQuestion/'+qst.id,qst).then(response =>{
                
                console.log("qst")
                console.log(qst)
              })
            }

            updateChoice = (ch)=> {
              axios.put('/updateChoice/'+ch.id,ch).then(response =>{
                
                console.log("ch")
                console.log(ch)
              })
            }
         
            handleSubmit = (e) => {
              var res = window.location.pathname.split("/");
              var key = res[2];
              console.log("ooo")
              console.log(this.state.quiz.note)
              axios.put('/updateQuiz/'+this.state.quiz.id,this.state.quiz).then(response =>{
                
                console.log("quiz")
                console.log(this.state.quiz)
              })
              window.location.pathname = "/resultat/"+key
              
          }
            
       

        handleChange(e) {
          let isChecked = e.target.checked;
          if(isChecked) return 1;
          return 0;
          // do whatever you want with isChecked value
        }

    render() {
      const { quiz } = this.state.quiz;
      const { maquestion } = this.state.maquestion;
      const { monchoix } = this.state.monchoix;
      
      console.log("szsz")
      var res = window.location.pathname.split("/");
      var key = res[2];

      if(this.state.maquestion.length !==0 )
      {
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
                    <h3><u>Répondre au questionnaire: </u>{this.state.quiz.name}</h3>
                    <br></br>
                    <h5 className="left-side">Le délai: <h5 style={{color:"red"}}>{this.state.quiz.date_envoi}</h5></h5>
                    <div>
                
                </div>
                    {
                      //les questions
                      this.state.maquestion.map( (x,index) => (
                        <div>
                          <br></br>
                          <li className="form-control left-side">Q{index+1}: {x.question}</li>
                          
                      <div>
                      {
                        this.state.monchoix.map((ch,cle) => {
                          if(ch.maquestion.id == x.id)
                          {
                            return (<div className="left-side" >
                              <div  key={cle}>
                                
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" 
                              onChange={(e) => {
                                //console.log(this.handleChange(e));
                                ch.rep =this.handleChange(e);
                                this.updateChoice(ch)
                                if(ch.rep == 1) this.state.quiz.note = this.state.quiz.note + ch.laNote;

                                console.log(this.state.quiz.note)
                              }}
                                />
                                    <label class="form-check-label" for="flexCheckChecked">
                                    {ch.option} 
                                    </label>
                             
                              
                              </div>
                              </div>)
                          
                          }
                        })
                      }
                      </div>
                      
                      <br></br>
                      

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
                  else
                  {
                    return(
                     <div>  
                     <div>       
                           <div>
                              <Navbar/> 
                           </div>
                           <div>
                              <MenuCollab></MenuCollab>
                              <br></br>
                              <br></br>
                              <br></br>
                              <div className="form">
                              <div className="">
                              <div className="inner2">
                                <h2>Pas d'évaluation pour le moment!</h2>
                                </div>
                                </div>
           
                                </div>
                                </div>
                                </div>
                                </div>
                    )
                   
         
                  } 
    
  }
  }export default Editquiz;
