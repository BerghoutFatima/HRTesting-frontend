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


  class Editform extends React.Component {
    constructor() {
      
      super();
      this.state = { 
        form:{
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
       axios.get('http://localhost:8080/detailsForm/'+key).then(response =>{
                this.setState({ form: response.data})
              })
            }

            updatehandler = (form)=> {
              var res = window.location.pathname.split("/");
              var key = res[2];
              axios.put('/updateForm/'+key,form).then(response =>{
                
                console.log("form")
                console.log(form)
              })
            }

            deletehandler = ()=> {
              var res = window.location.pathname.split("/");
              var key = res[2];
              axios.delete('/supprimerForm/'+key).then(response =>{
                
                console.log("responseOnDelete")
                console.log(response)
              })
            }
            
          

          handleSubmit = (e) => {
            var res = window.location.pathname.split("/");
            var key = res[2];
            console.log("ux "+key)
            axios.get('detailsForm/'+key).then(response =>{
                this.setState({ form: response.data})
                window.location.pathname = "forms"
            console.log(this.state.form.name)
            
          })
        }

    render() {
      var res = window.location.pathname.split("/");
      var key = res[2];
      const { form} = this.state
      var liste=this.state.form.questions;
      //console.log(form.questions[0])
      this.state.form.questions = liste;
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
                    <h3><u>Editer le formulaire: </u>{this.state.form.name}</h3>
                    <br></br>
                    <h5 className="left-side">Le délai: <h5 style={{color:"red"}}>{this.state.form.date_envoi}</h5></h5>
                    <div>
                <input  name="this.state.form.date_envoi"  type="date" 
                 value={ moment(this.state.form.date_envoi).format("YYYY-MMM-DD") } 
                 className="form-control"
                 onChange={event => {
                  this.state.form.date_envoi=event.target.value
                   this.updatehandler(this.state.form)} }/>
                </div>
                {
                      this.state.form.questions.map( (x,index) => (
                      <TextField key={index} className="form-control"
                      label={x}
                      name="this.state.form.questions[index]"
                      //value={this.state.form.questions[index]}
                      
                      onChange={event => {
                        x=event.target.value
                        this.state.form.questions[index]=x
                        
                        this.updatehandler(this.state.form);
                        
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
                    //onClick={this.deletehandler()}
                    onClick={()=> {window.location.pathname = "forms"}}
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
  }export default Editform;

  
