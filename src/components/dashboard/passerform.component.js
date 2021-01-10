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

class  PasserForm extends Component {

    constructor(){
      super();
      this.state = { 
        form:{
          id:'',
        name:'',
        questions:[],
        reponses:[]
      }
      //forms:[]
      };
        
    } 

    

    componentDidMount(){
      var res = window.location.pathname.split("/");
      var key = res[2];
      console.log("ce "+key)
      FormService.getForms().then(response =>{
        for(let i=0; i<response.data.length ; i++)
        {
          

          if(response.data[i].user.username == res[2])
          {
            this.setState({ form: response.data[i]})

          }

        }
                
              })
    }

    updatehandler = (form)=> {
      var res = window.location.pathname.split("/");
      var key = res[2];
      //window.location.pathname = res[1]
      axios.put('/updateForm/'+form.id,form).then(response =>{
        
        console.log("form")
        console.log(form)
      })
    }

    handleSubmit = (e) => {
      var res = window.location.pathname.split("/");
      var key = res[2];
      window.location.pathname = res[1]
      axios.get('detailsForm/'+key).then(response =>{
          this.setState({ form: response.data})
      window.location.pathname = "resultform/"+res[2]
      console.log("aq "+window.location.pathname)
      
    })
  }

        render (){
        
          const { form} = this.state
          console.log("jiji")
          console.log(this.state.form)
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
                       <MenuCollab></MenuCollab>
                       <div className="form">
                       <div className="">
                       <div className="inner2">
                      <Container >
                        <h3>Répondre au formulaire {this.state.form.name}</h3>
                        {
                          this.state.form.reponses.map( (x,index) => (
                            <div>
                          <h6 className="left-side"> {this.state.form.questions[index]}</h6>
                          <TextField key={index} className="form-control"
                          label={x}
                          name="this.state.form.reponses[index]"
                          //value={this.state.form.questions[index]}
                          
                          onChange={event => {
                            x=event.target.value
                            this.state.form.reponses[index]=x
                            
                            this.updatehandler(this.state.form);
                            
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
}export default PasserForm;

