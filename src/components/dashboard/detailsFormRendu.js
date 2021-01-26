import React, { Component } from "react";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
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

class  DetailsFormRendu extends Component {

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
                       <Menu></Menu>
                       <div className="form">
                       <div className="">
                       <div className="inner2">
                      <Container >
                      <h3><u>Les réponses du formulaire: </u>{this.state.form.name}</h3>
                      <br></br>
                      <br></br>
                      <h5 className="left-side">Collaborateur: {this.state.form.user.username}</h5>
                      
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
                        <h6 className="left-side"> Donner une note: </h6>
                        <TextField
                          name="this.state.form.note"
                          onChange={event => {
                              let x=0;
                              x = event.target.value
                            this.state.form.note = x;
                            console.log(this.state.form.note)
                            this.updatehandler(this.state.form);
                            
                          }
                          }
                          />
                          
                        <br></br>
                        <br></br>
                        <Button  style={{color:"white", backgroundColor:"#17a2b8"}}
                        variant="contained"
                        type="submit"
                        onClick={this.handleSubmit}
                        >
                        Valider</Button>
                        <Button  style={{color:"white",backgroundColor:"#6c6f75"}}
                        variant="contained"
                        type="cancel"
                        //onClick={this.deletehandler()}
                        onClick={()=> {window.location.pathname = "listformsrendus"}}
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
}export default DetailsFormRendu;

