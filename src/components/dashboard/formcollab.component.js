import { Component } from "react";
import UserService from "../../services/UserService";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import FormService from "../../services/FormService";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { EditRounded } from "@material-ui/icons";
import axios from 'axios'

class Formcollab extends Component {
  constructor(props){
    super(props);
    this.state = { 
      users: [] ,
      forms: []
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
} 

componentDidMount(){
        
  UserService.getUsers().then((response) => {
    
      this.setState({ users: response.data})
      
  });
 
  FormService.getForms().then((response) => {
    this.setState({ forms: response.data})
    console.log("----oooo-----")
    console.log(response.data)
});

}

updatehandler = (form)=> {
  console.log("updating....")
  this.findUserByUsername(form.user.username);
 
  var res = window.location.pathname.split("/");
  var key = res[2];
  axios.put('/updateForm/'+form.id,form).then(response =>{
    
    console.log("form is ")
    console.log(form)
  })
}
findUserByUsername = (username)=> {
  //window.location.pathname = window.location.pathname+"form"
  var res = window.location.pathname.split("/");
  var key = res[2];
  axios.get('/trouverUserByUsername?un='+username).then(response =>{
  
    let messgtosend = {
      sendTo : '',
      subject : 'H R T - cnss',
      body : 'Bonjour '+username+', \non vous informe que votre chef de division vient de vous attribuer un formulaire d évaluation à remplir et à rendre dans un délais d une semaine.\n\nNB: Vous allez le retrouver dans votre espace collaborateur. \n\nBonne journée.'
    }
    console.log("aze ")
    messgtosend.sendTo = response.data[0].email
    console.log(messgtosend.sendTo)
    axios.post('v1/notification/textemail', messgtosend)
    console.log("OK!")
    
  })
}

handleSubmit (event) {
  console.log("ccc")
  console.log(event)
  //alert("your form is: "+event.target);
  event.preventDefault();
  

}

handleChange = (event) => {
  this.setState({ value: event.target.value})
  console.log("didi")
  console.log(event.target.value)
}


    render() {
      const { users} = this.state.users
      const { forms} = this.state.forms
      //const [ userState, setUserState] = useState();
    return (

      <div>       
      <div>
         <Navbar/> 
      </div>
      <div>
         <Menu></Menu>
         
         <div  id="box" >
         <u><h2>Liste de formulaires</h2></u>
         {this.state.forms.map(form => (
         <Card id="boxss" className="border border-info " >
         
          <CardContent style={{color:"#197c8c"}} >
            <Typography variant="h6" component="h2">
                 {form.name}
            </Typography>

         </CardContent>
         <div className="left-side" >
         <label ><li>Délai:</li></label>
         <h6 style={{color:"red"}}>{form.date_envoi}</h6>
           <label ><li>Collaborateur:</li></label>
           <br></br>
           <h6 style={{color:"#17364e"}}>{form.user.username}</h6>
           
    <select 
    id="inputState" 
    onChange={(e) => {
      const selectedUser = e.target.value;
      
      form.user.username= selectedUser
      this.updatehandler(form);
      console.log("myform")
      console.log(form)
      
    }
    
    
  }
    >
      
      {
        this.state.users.map(user => (
            //console.log(user)
            <option    
            onClick={event => {
              console.log("dddd")
              console.log(user)
            }}
              >{user.username}</option>
            //console.log(user)
            
            
        )
        )
        
    }
    </select>
  </div>
             <br/>

             <CardActions className="right-side">
        <Button style={{ backgroundColor:"#17a2b8"}} size="small" onClick={this.handleSubmit}
        //onClick={()=> {window.location.pathname = "edit/"+form.id;
                                //}}
                                >Enregistrer</Button>
        <br/>
      </CardActions>
         </Card>
                       ))
                   }
               
         </div>
      </div>
  </div>

      );
    }
  }export default Formcollab;
  
  
  /*import { Component } from "react";
import UserService from "../../services/UserService";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import FormService from "../../services/FormService";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { EditRounded } from "@material-ui/icons";
import axios from 'axios'

class Formcollab extends Component {
  constructor(props){
    super(props);
    this.state = { 
      users: [] ,
      forms: []
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
} 

componentDidMount(){
        
  UserService.getUsers().then((response) => {
    
      this.setState({ users: response.data})
      
  });
 
  FormService.getForms().then((response) => {
    this.setState({ forms: response.data})
    console.log("----oooo-----")
    console.log(response.data)
});

}

updatehandler = (form)=> {
  console.log('UPDATING')
  this.findUserByUsername(form.user.username);
 
  var res = window.location.pathname.split("/");
  var key = res[2];
  axios.put('/updateForm/'+form.id,form).then(response =>{
    
    console.log("form is ")
    console.log(form)
  })
}
findUserByUsername = (username)=> {
  //window.location.pathname = window.location.pathname+"form"
  var res = window.location.pathname.split("/");
  var key = res[2];
  axios.get('trouverUserByUsername?un='+username).then(response =>{
  
    let messgtosend = {
      sendTo : '',
      subject : 'H R T - cnss',
      body : 'Bonjour '+username+', \non vous informe que votre chef de division vient de vous attribuer un formulaire d évaluation à remplir et à rendre avant le délais.\n\nNB: Vous allez le retrouver dans votre espace collaborateur. \n\nBonne journée.'
    }
    messgtosend.sendTo = response.data[0].email
    console.log("sese "+response.data[0].email)
    axios.post('v1/notification/textemail', messgtosend)
    console.log("OK!")
    
  })
}

handleSubmit (event) {
  console.log("ccc")
  console.log(event)
  //alert("your form is: "+event.target);
  event.preventDefault();
  

}

handleChange = (event) => {
  this.setState({ value: event.target.value})
  console.log("didi")
  console.log(event.target.value)
}


    render() {
      const { users} = this.state.users
      const { forms} = this.state.forms
      //const [ userState, setUserState] = useState();
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
         <Card id="boxss" className="border border-info " >
         
          <CardContent style={{color:"#197c8c"}} >
            <Typography variant="h6" component="h2">
                 {form.name}
            </Typography>

         </CardContent>
         <div className="left-side" >
           <label >Collaborateur:</label>
           <br></br>
           <h6 style={{color:"#17364e"}} className=" btn btn-" >{form.user.username}</h6>
    <select 
    id="inputState" 
    onChange={(e) => {
      const selectedUser = e.target.value;
      
      form.user.username= selectedUser
      this.updatehandler(form);
      console.log(form)
    }}
    >
      {
        this.state.users.map(user => (
            //console.log(user)
            <option  selected  
            onClick={event => {
              console.log("dddd")
              console.log(user)
            }}
              >{user.username}</option>
            //console.log(user)
            
            
        )
        )
        
    }
    </select>
  </div>
             <br/>

             <CardActions className="right-side">
        <Button style={{ backgroundColor:"#17a2b8"}} size="small" onClick={this.handleSubmit}
        //onClick={()=> {window.location.pathname = "edit/"+form.id;
                                //}}
                                >Enregistrer</Button>
        <br/>
      </CardActions>
         </Card>
                       ))
                   }
               
         </div>
      </div>
  </div>

      );
    }
  }export default Formcollab;
  */