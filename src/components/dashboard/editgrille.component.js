import React, { Component } from "react";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { formatMs, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import UserService from "../../services/UserService";
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


  class Editgrille extends React.Component {
    constructor() {
      
      super();
      this.state = { 
        users: [] ,
        grille:{
          id:'',
        username:'',
        _1: [],
        _2: [],
        _3: [],
        _4: [],
        _5: [],
        _6: [],
        _7: [],
        _8: []
      }
      };
    }
  
    
  
            componentDidMount() {
              var res = window.location.pathname.split("/");
              var key = res[2];
              UserService.getUsers().then((response) => {
                this.setState({ users: response.data})
                 });
             axios.get('http://localhost:8080/detailsGrille/'+key).then(response =>{
                this.setState({ grille: response.data})
                console.log(this.state.grille)
              })
            }


            updatehandler = (grille)=> {
              var res = window.location.pathname.split("/");
              var key = res[2];
              axios.put('/updateGrille/'+key,grille).then(response =>{
                
                console.log("grille")
                console.log(grille)
              })
            }

            deletehandler = ()=> {
              var res = window.location.pathname.split("/");
              var key = res[2];
              axios.delete('/supprimerGrille/'+key).then(response =>{
                
                console.log("responseOnDelete")
                console.log(response)
              })
            }
            
          

          handleSubmit = (e) => {
            var res = window.location.pathname.split("/");
            var key = res[2];
            console.log("ux "+key)
            axios.get('detailsGrille/'+key).then(response =>{
                this.setState({ grille: response.data})
                window.location.pathname = "grilles"
            console.log(this.state.grille.name)
            
          })
        }

    render() {
      var res = window.location.pathname.split("/");
      var key = res[2];
      const { users } = this.state.users
      const { grille } = this.state.grille
      //var liste=this.state.grille.questions;
      //console.log(form.questions[0])
      //this.state.grille.questions = liste;
      return (
        
        <div>  
          <div>       
                <div>
                   <Navbar/> 
                </div>
                <div>
                   <Menu></Menu>
                   <div className="grille">
        
                    <Container >
                      
                    <h3><u>Editer la grille N° {key}</u></h3>
                <br></br>
                
                <div className="left-side" >
                    Nom du collaborateur : <b style={{color:"#197c8c"}}>{this.state.grille.username}</b>
                    <br></br>
                <select id="inputState" onChange={(e) => {const selectedUser = e.target.value; this.state.grille.username= selectedUser}}>
                 {
            this.state.users.map(user => (
            <option   
            onClick={event => {
              console.log(user)
            }}
              >{user.username}</option>
            
            
        )
        )
        
    }

    </select>
    </div>
                
                <br></br>
            <table className="table">
   <tr>
       <th></th>
       <th>Moyenne pondérée/5</th>
       <th>Point d'amélioration</th>
       <th>En dessous du niveau attendu</th>
       <th>Atteinte du niveau attendu</th>
       <th>Au dessus du niveau attendu</th>
       <th>Excellence</th>
   </tr>
   <th className="savoirfaire">Savoir faire</th>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
{
    
   
        <tr>
       
       <td className="left-side" >Performance dans son poste (Qualité de travail fourni)</td>
       
       <td><label>{this.state.grille._1[0]}</label><TextField onChange={(e) => {this.state.grille._1[0] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._1[1]}</label><TextField onChange={(e) => {this.state.grille._1[1] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._1[2]}</label><TextField onChange={(e) => {this.state.grille._1[2] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._1[3]}</label><TextField onChange={(e) => {this.state.grille._1[3] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._1[4]}</label><TextField onChange={(e) => {this.state.grille._1[4] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._1[5]}</label><TextField onChange={(e) => {this.state.grille._1[5] = e.target.value}}></TextField></td> 
   </tr>
   
   
    }

<th className="savoirfaire">Savoir être</th>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
    
    
        <tr>
       
       <td className="left-side">Sens de coopération</td>
       
       <td><label>{this.state.grille._2[0]}</label><TextField onChange={(e) => {this.state.grille._2[0] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._2[1]}</label><TextField onChange={(e) => {this.state.grille._2[1] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._2[2]}</label><TextField onChange={(e) => {this.state.grille._2[2] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._2[3]}</label><TextField onChange={(e) => {this.state.grille._2[3] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._2[4]}</label><TextField onChange={(e) => {this.state.grille._2[4] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._2[5]}</label><TextField onChange={(e) => {this.state.grille._2[5] = e.target.value}}></TextField></td>
       </tr>
  
  <tr>
       <td>Orientation client</td>
       
       <td><label>{this.state.grille._3[0]}</label><TextField onChange={(e) => {this.state.grille._3[0] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._3[1]}</label><TextField onChange={(e) => {this.state.grille._3[1] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._3[2]}</label><TextField onChange={(e) => {this.state.grille._3[2] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._3[3]}</label><TextField onChange={(e) => {this.state.grille._3[3] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._3[4]}</label><TextField onChange={(e) => {this.state.grille._3[4] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._3[5]}</label><TextField onChange={(e) => {this.state.grille._3[5] = e.target.value}}></TextField></td>
  </tr>

  <tr >     
       <td>Fiabilité et respect de deadlines</td>

       <td><label>{this.state.grille._4[0]}</label><TextField onChange={(e) => {this.state.grille._4[0] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._4[1]}</label><TextField onChange={(e) => {this.state.grille._4[1] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._4[2]}</label><TextField onChange={(e) => {this.state.grille._4[2] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._4[3]}</label><TextField onChange={(e) => {this.state.grille._4[3] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._4[4]}</label><TextField onChange={(e) => {this.state.grille._4[4] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._4[5]}</label><TextField onChange={(e) => {this.state.grille._4[5] = e.target.value}}></TextField></td>
  </tr>
       
  <tr >
       <td>Engagement dans ses missions</td>
       <td><label>{this.state.grille._5[0]}</label><TextField onChange={(e) => {this.state.grille._5[0] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._5[1]}</label><TextField onChange={(e) => {this.state.grille._5[1] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._5[2]}</label><TextField onChange={(e) => {this.state.grille._5[2] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._5[3]}</label><TextField onChange={(e) => {this.state.grille._5[3] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._5[4]}</label><TextField onChange={(e) => {this.state.grille._5[4] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._5[5]}</label><TextField onChange={(e) => {this.state.grille._5[5] = e.target.value}}></TextField></td>
   </tr>

   <tr >
       <td>Autonomie</td>
       <td><label>{this.state.grille._6[0]}</label><TextField onChange={(e) => {this.state.grille._6[0] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._6[1]}</label><TextField onChange={(e) => {this.state.grille._6[1] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._6[2]}</label><TextField onChange={(e) => {this.state.grille._6[2] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._6[3]}</label><TextField onChange={(e) => {this.state.grille._6[3] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._6[4]}</label><TextField onChange={(e) => {this.state.grille._6[4] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._6[5]}</label><TextField onChange={(e) => {this.state.grille._6[5] = e.target.value}}></TextField></td>
   </tr>
   <tr>
       <td>Investissement dans l'entreprise</td>
       <td><label>{this.state.grille._7[0]}</label><TextField onChange={(e) => {this.state.grille._7[0] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._7[1]}</label><TextField onChange={(e) => {this.state.grille._7[1] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._7[2]}</label><TextField onChange={(e) => {this.state.grille._7[2] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._7[3]}</label><TextField onChange={(e) => {this.state.grille._7[3] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._7[4]}</label><TextField onChange={(e) => {this.state.grille._7[4] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._7[5]}</label><TextField onChange={(e) => {this.state.grille._7[5] = e.target.value}}></TextField></td>
   </tr>
   <tr>
       <td>Autres qualités personnelles: capacité à mobiliser, à convaincre et capacité d'écoute</td>
       <td><label>{this.state.grille._8[0]}</label><TextField onChange={(e) => {this.state.grille._8[0] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._8[1]}</label><TextField onChange={(e) => {this.state.grille._8[1] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._8[2]}</label><TextField onChange={(e) => {this.state.grille._8[2] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._8[3]}</label><TextField onChange={(e) => {this.state.grille._8[3] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._8[4]}</label><TextField onChange={(e) => {this.state.grille._8[4] = e.target.value}}></TextField></td>
       <td><label>{this.state.grille._8[5]}</label><TextField onChange={(e) => {this.state.grille._8[5] = e.target.value}}></TextField></td>
   </tr>
   
                
</table>
<Button style={{ backgroundColor:"#17a2b8"}} className="right-side" onClick={() => {axios.put('/updateGrille/'+key,this.state.grille).then((response) => {
            console.log("wiix")
            console.log(response)
        })}}>Confirmer</Button>
<br></br>
<br></br>
<br></br>
<br></br>
    
            </Container>
            </div> 
            </div> 
            </div> 
            </div>
      );
    
  }
  }export default Editgrille;

  
