import React, { Component } from "react";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { formatMs, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import moment from 'moment'
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
        quiz : {
          /*id:'',
          name:'',
          date_envoi:'',
          note:0,
          user:{
              id:'',
              username:'',
              password:'',
              email:''
          }*/
      },
      maquestion : [
        /*{
              id:'',
              question:'',
              quiz:{}
      }*/
    ],
      //monchoix : []
      monchoix : [
        /*{
          id:'',
          option:'',
          rep:'',
          laNote:0,
          maquestion:{}
      }*/
    ] 
      };
    }
  
    
  
    componentDidMount() {
      console.log('componentDidMount() lifecycle');
      var res = window.location.pathname.split("/");
      var key = res[2];
       axios.get('http://localhost:8080/detailsQuiz/'+key).then((response) =>{
         console.log("je suis quiz")
                this.setState({ quiz: response.data});
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
            

            /*deletehandler = ()=> {
              var res = window.location.pathname.split("/");
              var key = res[2];
              axios.delete('http://localhost:8080/supprimerQuiz/'+key).then(response =>{
                
                console.log("responseOnDelete")
                console.log(response)
              })
            }*/
            
          

          /*handleSubmit = (e) => {
            var res = window.location.pathname.split("/");
            var key = res[2];
            //
            axios.get('http://localhost:8080/trouverChoixParQuizId?un='+this.state.quiz.id).then(resp =>{
      //console.log("je suis choices")  
    this.setState({ monchoix: resp.data});
      //console.log("----")
      //console.log(this.state.monchoix)
              })
              //
            axios.get('http://localhost:8080/detailsQuiz/'+key).then(response =>{
                this.setState({ quiz: response.data})
                window.location.pathname = "quizs";
            console.log(this.state.quiz.name)
            
          })
        }*/

    render() {
      const { quiz } = this.state.quiz;
      const { maquestion } = this.state.maquestion;
      const { monchoix } = this.state.monchoix;
      
      console.log("szsz")
      var res = window.location.pathname.split("/");
      var key = res[2];

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
                    <h3><u>Editer le questionnaire: </u>{this.state.quiz.name}</h3>
                    <br></br>
                    <h5 className="left-side">Le délai: <h5 style={{color:"red"}}>{this.state.quiz.date_envoi}</h5></h5>
                    <div>
                <input  name="this.state.quiz.date_envoi"  type="date" 
                 value={ moment(this.state.quiz.date_envoi).format("YYYY-MMM-DD") } 
                 className="form-control"
                 onChange={event => {
                  this.state.quiz.date_envoi=event.target.value
                   this.updatehandler(this.state.quiz)} }/>
                </div>
                    {
                      //les questions
                      this.state.maquestion.map( (x,index) => (
                        <div>
                      <TextField key={index} className="form-control"
                      label={x.question}
                      name="this.state.maquestion[index].question"
                      
                      onChange={event => {
                        x.question=event.target.value
                        this.state.maquestion[index].question=x.question
                        
                        this.updateQuestion(this.state.maquestion[index]);
                        
                      }
                      }
                      />
                      <br></br>
                      <br></br>
                      <div>
                      {
                        this.state.monchoix.map((ch,cle) => {
                          console.log("rtrtr")
                          console.log(ch.option)
                          //console.log(x.id)
                          if(ch.maquestion.id == x.id)
                          {
                            return (<div className="left-side" >
                              <div key={cle}>
  
                              <TextField name="leChoix"
                              label={ch.option} 
                              onChange={event => {
                                ch.option = event.target.value
                                this.state.monchoix[cle].option=ch.option
                                
                                this.updateChoice(this.state.monchoix[cle]);
                                
                              }
                              }/>
                              <TextField name="laNote" 
                              label={ch.laNote} 
                              onChange={event => {
                              ch.laNote=event.target.value
                              this.state.monchoix[cle].laNote=ch.laNote
                        
                              this.updateChoice(this.state.monchoix[cle]);
                        
                      }
                      } />
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
  }export default Editquiz;

  



/*import React, { Component } from "react";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { formatMs, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import moment from 'moment'

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
        date_envoi:'',
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
                window.location.pathname = "quizs";
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
                    <h3><u>Editer le questionnaire: </u>{this.state.quiz.name}</h3>
                    <br></br>
                    <h5 className="left-side">Le délai: <h5 style={{color:"red"}}>{this.state.quiz.date_envoi}</h5></h5>
                    <div>
                <input  name="this.state.quiz.date_envoi"  type="date" 
                 value={ moment(this.state.quiz.date_envoi).format("YYYY-MMM-DD") } 
                 className="form-control"
                 onChange={event => {
                  this.state.quiz.date_envoi=event.target.value
                   this.updatehandler(this.state.quiz)} }/>
                </div>
                    {
                      
                      this.state.quiz.questions.map( (x,index) => (
                      <TextField key={index} className="form-control"
                      label={x}
                      name="this.state.quiz.questions[index]"
                      
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
  }export default Editquiz;*/

  
