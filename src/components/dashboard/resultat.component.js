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
import DoneIcon from '@material-ui/icons/Done';


  class Resultat extends React.Component {
    constructor() {
        super();
        this.state = {
            quiz : {}
        }
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
        })
    }
    render(){
        return(
            <div>
        <div>
            <Navbar/> 
         </div>
         <div>
            <MenuCollab></MenuCollab>
            <div className="form">
            <div className="inner2">
            <div >
                <br></br>
                <br></br>
                <h6>Vos réponses sont envoyées au divisionnaire</h6>
                <h6>Votre note est : {this.state.quiz.note} /20</h6>
                <img src="/done.png" className="logoDone" />
            </div>
            </div>
            </div>
            </div>
            </div>
            )
    }
    }export default Resultat;
                