import React, { Component } from "react";
import axios from 'axios'
import Navbar from "./navbar.component";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ModalAddUser from './modalAddUser';
import Modal from './modal'

class Administrateur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requiredItem : 0,
      isOpen : false,
      isShow : false,
      users:[],
      reports:[]  
    }
  
  }

  componentDidMount(){
    
    axios.get('http://localhost:8080/listerUsers').then((response) =>{
      
      this.setState({ users: response.data})
    }) 
    axios.get('http://localhost:8080/listReports').then((response) =>{
      
      this.setState({ reports: response.data})
    })
    
  }

listUsers(){
  var maliste = []
      maliste = this.state.users;  
      return maliste
}

  saveModalDetails = (item) => {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  deleteUser = (user) => {
    axios.delete('http://localhost:8080/supprimerUser/'+user.id).then((response) => {
        console.log('oook!')
    })
}
  
  render() { 
    

    const brochure = this.listUsers().map((user, index) => (
      
      <tr>
      <td>{index+1}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td><u><a href="#" onClick={() => {
      this.setState({requiredItem : index})
      this.setState({isOpen : !this.state.isOpen})}}>Editer</a></u></td>
      <td><u><a href="#" onClick={()=>{this.deleteUser(user)}}>Supprimer</a></u></td>
      <td>
        {
          this.state.reports.map(report => {
            if(report.username == user.username){
               return <h6 className="left-side" style={{color:'black'}}>Télécharger <a href={report.link}>{report.name}</a></h6>
            }
        })
        }</td>
    </tr>
  ))
    
    let modalData = this.listUsers()[this.state.requiredItem];
    
    return (
      <div>
      <div>
          <Navbar/> 
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="">
          <h2>DASHBOARD ADMIN</h2>
          <br></br>
          <div className="right-side">
            <Button 
               style={{color:"#2d33c4",backgroundColor:"#fafafa"}}
               variant="primary"
               onClick={() => this.setState({isShow : !this.state.isShow})}
               ><AddIcon></AddIcon>Ajouter</Button>
               {this.state.isShow ? (
               <div>
                 <ModalAddUser></ModalAddUser>
               </div>
               ) : null}
               
          </div>
          <br></br><br></br>
                       
            <div class="container">
            <table class="table">
            <thead class="thead-dark">
              <tr>
                <th>Id</th>
                <th>Nom du collaborateur</th>
                <th>Adresse email</th>
                <th>Editer le compte</th>
                <th>Supprimer le compte</th>
                <th>Rapport d'évaluation</th>
              </tr>
            </thead>
            
            <tbody>
              {brochure}
            </tbody>
            </table>
            </div>
          {this.state.isOpen ? (
               <div>
                 <Modal 
                 id={modalData.id}
                 username={modalData.username}
                 email={modalData.email}
                 ></Modal>
               </div>
               ) : null}
               <br></br>
        
      </div>
      <br></br><br></br>
      
    </div>
    );
  }
}

export default Administrateur; 
