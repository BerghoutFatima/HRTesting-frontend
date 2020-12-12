import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import Card from '@material-ui/core/Card';
import Menu from "./menu.component";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

 class Navbar extends Component {
  constructor(props){
    super(props)
    this.state =  { forms: [] };
        
    } 
        /*id:'',
      name:'',
      questions:[],
      reponses:[]*/
    
    


/*componentDidMount(e){
        
  axios.get('/chercherForm/?mc='+e.target.value).then((response) => {
      this.setState({ forms: response.data})
  });
}

chercher = (e)  => {
  axios.get('/chercherForm/?mc='+e.target.value).then((response) => {
    this.setState({ forms: response.data})
});
  const { forms} = this.state
  //this.setState({ [e.target.name]: e.target.value})
  console.log("zzz")
  console.log(e.target.value)
  return (
    <div>       
                <div>
                   <Navbar/> 
                </div>
                <div>
                   <Menu></Menu>
                   
                   <div  id="box" >
                   <h1>Liste de formulaires</h1>
                   {this.state.forms.map(form => (
                     
                   <Card id="boxs" className="border border-info " >
                   
      <CardContent >
        <Typography variant="h6" component="h2">
        {form.name}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button style={{ backgroundColor:"#17a2b8"}} size="small" onClick={()=> {window.location.pathname = "edit/"+form.id;
                                }}>Editer</Button>
        <br/>
      </CardActions>
    </Card>
                   ))
                                
                             }
                         
                   </div>
                </div>
            </div>
                   )
    //console.log(response.data)
    
  
}*/
    
    render() {
      const { id, name, questions,reponses} = this.state
        return (
          <div className="">
          <nav className="navbar navbar-expand-lg navbar navbar-dark bg-info navbar fixed-top">
  <a className="navbar-brand" style={{marginLeft:55, fontWeight:'Bold',fontSize:28}}>H R T <a className="navbar-brand" style={{fontSize:15,fontWeight:"normal"}}>CNSS</a></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Chercher" aria-label="Search"/>
      <button className="btn btn-outline-dark my-2 my-sm-0" type="submit"><SearchSharpIcon/></button>
      <ul className="navbar-nav mr-auto">
      
      <li className="nav-item dropdown">
      <Avatar style={{marginLeft:40}} className="bg-dark" icon="user">B</Avatar>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="">Déconnexion</a>
          
        </div>
      </li>
    </ul>
    </form>
  </div>
</nav>
</div>
            
          );
        
    }
}
export default Navbar;

