import React, { Component } from "react";
import Navbar from "./navbar.component";
import MenuCollab from "./menucollab.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { formatMs, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles({});


  class DetailsQuizCollab extends React.Component {
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
                    <h3><u>Questionnaire</u>: {this.state.quiz.name}</h3>
                    <br></br>
                    <div>
                </div>
                    {
                      //les questions
                      this.state.maquestion.map( (x,index) => (
                          
                        <div>
                            <br></br>
                      <li  className="form-control left-side">{x.question}</li>
                      
                      <div>
                      {
                        this.state.monchoix.map((ch,cle) => {
                          if(ch.maquestion.id == x.id && ch.rep == 1)
                          {
                            return (
                            <div className="left-side" >
                              <div>
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked disabled
                              />
                                    <label class="form-check-label" for="flexCheckChecked">
                                    {ch.option} 
                                    </label>
                              
                              </div>
                              </div>
                              )
                              }

                              if(ch.maquestion.id == x.id && ch.rep == 0)
                          {
                            return (
                            <div className="left-side" >
                              <div>
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled
                              />
                                    <label class="form-check-label" for="flexCheckChecked">
                                    {ch.option} 
                                    </label>
                              
                              </div>
                              </div>
                              )
                              }

                          
                          }
                        )
                      }
                      </div>
                      
                      <br></br>
                      

                      </div>
                      ))
                      
                      
                    }
                    <br></br>
                    
                    <Button  style={{color:"#17364e", backgroundColor: "success"}}
                    variant="contained"
                    disabled
                    ><b>La note: {this.state.quiz.note} /10</b></Button>
                    
                    <br></br>
                    <br></br>
                   
                  </Container>
                  
            </div> 
            </div> 
            </div> 
            </div>
            </div>  
            </div> 
      );
    
  }
  }export default DetailsQuizCollab;

  



  
