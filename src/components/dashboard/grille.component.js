import React, { Component, useState } from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import UserService from "../../services/UserService";
import axios from 'axios'


const useStyles = makeStyles((theme)=>({
    root: {
        '& .MuiTextField-root': {
            margin : theme.spacing(1),
        }
    },
    button : {
        margin : theme.spacing(1),
        
    }
}))



class Grille extends Component {

    constructor(){
        super()
        this.state = {

            users: [] ,
            grille: {
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
        }
    }
    componentDidMount(){
        
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
      }

      /*creergrille (){
          console.log("la grille :")
          console.log(this.state.grille)
          console.log("aaa")
          axios.post('/addGrille',this.state.grille).then((response) => {
            console.log("vvv")
            console.log(response)
        });
          

      }*/
      
    

    render(){
     
    const { grille } = this.state.grille
    const { users } = this.state.users
    let tab=["Performance dans son poste (Qualité de travail fourni)"]
    let tabb=["Sens de coopération","Orientation client","Fiabilité et respect de deadlines","Engagement dans ses missions","Autonomie","Investissement dans l'entreprise","Autres qualités personnelles: capacité à mobiliser, à convaincre et capacité d'écoute"]
  
    return (
        <div>
            <div>
                <Navbar></Navbar> 
            </div>

            <div>
                <Menu></Menu>
            <div className="grille">
            
            <Container >
                <u><h2>Grille d'évaluation</h2></u>
                <br></br>
                <div className="left-side" >
                    Nom du collaborateur  
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
       
       <td><TextField onChange={(e) => {this.state.grille._1[0] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._1[1] = e.target.value}} ></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._1[2] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._1[3] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._1[4] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._1[5] = e.target.value}}></TextField></td> 
   </tr>
   
   
    }

<th className="savoirfaire">Savoir être</th>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
       <td className="savoirfaire"></td>
    
    
        <tr className="left-side">
       
       <td>Sens de coopération</td>
       
       <td><TextField onChange={(e) => {this.state.grille._2[0] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._2[1] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._2[2] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._2[3] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._2[4] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._2[5] = e.target.value}}></TextField></td>
       </tr>
  
  <tr className="left-side">
       <td>Orientation client</td>
       
       <td><TextField onChange={(e) => {this.state.grille._3[0] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._3[1] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._3[2] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._3[3] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._3[4] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._3[5] = e.target.value}}></TextField></td>
  </tr>

  <tr className="left-side">     
       <td>Fiabilité et respect de deadlines</td>

       <td><TextField onChange={(e) => {this.state.grille._4[0] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._4[1] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._4[2] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._4[3] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._4[4] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._4[5] = e.target.value}}></TextField></td>
  </tr>
       
  <tr className="left-side">
       <td>Engagement dans ses missions</td>
       <td><TextField onChange={(e) => {this.state.grille._5[0] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._5[1] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._5[2] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._5[3] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._5[4] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._5[5] = e.target.value}}></TextField></td>
   </tr>

   <tr className="left-side">
       <td>Autonomie</td>
       <td><TextField onChange={(e) => {this.state.grille._6[0] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._6[1] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._6[2] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._6[3] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._6[4] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._6[5] = e.target.value}}></TextField></td>
   </tr>
   <tr className="left-side">
       <td>Investissement dans l'entreprise</td>
       <td><TextField onChange={(e) => {this.state.grille._7[0] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._7[1] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._7[2] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._7[3] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._7[4] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._7[5] = e.target.value}}></TextField></td>
   </tr>
   <tr className="left-side">
       <td>Autres qualités personnelles: capacité à mobiliser, à convaincre et capacité d'écoute</td>
       <td><TextField onChange={(e) => {this.state.grille._8[0] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._8[1] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._8[2] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._8[3] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._8[4] = e.target.value}}></TextField></td>
       <td><TextField onChange={(e) => {this.state.grille._8[5] = e.target.value}}></TextField></td>
   </tr>
   
    
</table>
<Button style={{ backgroundColor:"#17a2b8"}} className="right-side" onClick={() => {axios.post('/addGrille',this.state.grille).then((response) => {
            
            console.log(response)
        })}}>Enregistrer</Button>
<br></br>

            </Container>
            
            <br></br>
            <br></br>
            <br></br>
            </div>
            </div>
            </div>
            
        );
    }
        
    
}export default Grille;

