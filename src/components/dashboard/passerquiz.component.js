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
                          //console.log("rtrtr")
                          //console.log(ch.option)
                          //console.log(x.id)
                          if(ch.maquestion.id == x.id)
                          {
                            return (<div className="left-side" >
                              <div key={cle}>
                                
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" 
                              onChange={(e) => {
                                //console.log(this.handleChange(e));
                                ch.rep =this.handleChange(e);
                                this.updateChoice(ch)
                                if(ch.rep == 1) this.state.quiz.note = this.state.quiz.note + ch.laNote;

                                console.log(this.state.quiz.note)
                              }}
                              /*onChange={(e) => {
                                //const selectedChoice = ch.option;
                                //console.log("selected choice is")
                                //console.log(ch.option)
                                this.updateChoice(this.state.monchoix[cle]);
                              }}*/
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
  }export default Editquiz;
/*import React, { Component } from "react";
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

    constructor() {
      super();
      this.state = { 
        quiz : {},
      maquestion : [],
      monchoix : [] 
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
            console.log("---")
            console.log(this.state.quiz)
          }

        }
                
              })
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
        
          const {quiz} = this.state.quiz
          const {maquestion} = this.state.maquestion
          const {monchoix} = this.state.monchoix
          //var liste=this.state.quiz.questions;
          //console.log(form.questions[0])
          //this.state.quiz.questions = liste;
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
*/

//

/*import React, { Component } from "react";
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
            console.log("---")
            console.log(this.state.quiz)
          }

        }
                
              })
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
        
          const {quiz} = this.state.quiz
          const {maquestion} = this.state.maquestion
          const {monchoix} = this.state.monchoix
          //var liste=this.state.quiz.questions;
          //console.log(form.questions[0])
          //this.state.quiz.questions = liste;
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
*/

