import React, { Component } from "react";
import Navbar from "./navbar.component";
import MenuCollab from "./menucollab.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import FormService from "../../services/FormService";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

const useStyles = makeStyles({
  });

class  DetailsFormCollab extends Component {

    constructor(){
      super();
      this.state = { 
        form:{
          id:'',
        name:'',
        questions:[],
        reponses:[],
        note:0,
        user:{
            id:'',
            username:'',
            password:'',
            email:''
        }
      }
      //forms:[]
      };
        
    } 

    

    componentDidMount(){
      var res = window.location.pathname.split("/");
      var key = res[2];
      console.log("ce "+key)
      axios.get('http://localhost:8080/detailsForm/'+key).then((response) =>{
                this.setState({ form: response.data});
                
    })
}

    updatehandler = (form)=> {
      var res = window.location.pathname.split("/");
      var key = res[2];
      axios.put('/updateForm/'+form.id,form).then(response =>{
        
        console.log("form")
        console.log(form)
      })
    }

    handleSubmit = (e) => {
      var res = window.location.pathname.split("/");
      var key = res[2];
      //window.location.pathname = "resultform/"+res[2]
  }

        render (){
          const { form} = this.state
          var liste=this.state.form.questions;
          this.state.form.questions = liste;
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
                      <h3><u>Formulaire</u>: {this.state.form.name}</h3>
                      <br></br>
                      
                        {
                          this.state.form.reponses.map( (x,index) => (
                            
                            <div>
                                <br></br>
                          <li  className="form-control left-side">Q{index+1}:  {this.state.form.questions[index]}</li>
                          <h6 className="left-side"> {x}</h6>
                          
                          </div>
                          
                          ))
                          
                          
                        }
                        <br></br>
                        <Button  style={{color:"#17364e", backgroundColor: "success" }}
                    variant="contained"
                    disabled
                    ><b>La note: {this.state.form.note} /10</b></Button>
                        
                          
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
}export default DetailsFormCollab;

