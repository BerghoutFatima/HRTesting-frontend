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
import FormService from "../../services/FormService";
import { CheckBox } from "@material-ui/icons";
import DoneIcon from '@material-ui/icons/Done';


  class ResultForm extends React.Component {
    constructor() {
        super();
        this.state = {
            form : {}
        }
    }

    componentDidMount() {
        var res = window.location.pathname.split("/");
        var key = res[2];
        FormService.getForms().then(response =>{
          for(let i=0; i<response.data.length ; i++)
          {
            
  
            if(response.data[i].user.username == res[2])
            {
              this.setState({ form : response.data[i]})
              console.log("---")
              console.log(this.state.form)
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
                <img src="/done.png" className="logoDone" />
            </div>
            </div>
            </div>
            </div>
            </div>
            )
    }
    }export default ResultForm;
                