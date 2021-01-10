import React, { Component } from "react";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import UserService from "../../services/UserService";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

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

class  Reports extends Component {

    constructor(){
        super();
        this.state = { 
          users: [],
          reports:[],
          selectedFile: null,
          report:{
            name:'',
            link:'',
            username:''
          }
        };
        
    } 

    // On file select (from the pop up) 
    onFileChange = event => { 
     
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
     
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = (r) => { 
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "file", 
        this.state.selectedFile,
        this.state.selectedFile.name
      ); 
     
      // Details of the uploaded file 
      console.log("this is selectedfile: "); 
       
      console.log(this.state.selectedFile); 
     
      // Request made to the backend api 
      // Send formData object 
      this.state.report.name=this.state.selectedFile.name;
      this.state.report.link="http://localhost:8080/files/"+this.state.selectedFile.name;
      this.state.report.username=r;
      console.log("monrapport:")
      console.log(this.state.report)
      axios.post("/postReport", formData); 
      axios.post("/post-Report", this.state.report);
    }; 

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });

        axios.get('/listReports').then(response =>{
          this.setState({ reports: response.data})
        
          })
        }

   

        render (){
            const { reports} = this.state
            const { users} = this.state
            return(
              
                <div>       
                <div>
                   <Navbar/> 
                </div>
                <div>
                   <Menu></Menu>
                   <div  id="boxi" >
                   <u><h2>Rapports des évaluations</h2></u>
                   {this.state.users.map(user => (
                   <Card id="boxis" className="border border-info " >
                   
      <CardContent style={{color:"#197c8c"}}>
        <Typography variant="h6" component="h2">
        {user.username}
        </Typography>
        <br></br>
        <h6>
          {this.state.reports.map(report => {
            if(report.username == user.username){
               return <h6 className="left-side" style={{color:'black'}}>Télécharger <a href={report.link}>{report.name}</a></h6>
            }
        })}
        </h6>
         
        <div> 
            <input type="file" onChange={this.onFileChange} /> 
            <br></br>
        </div> 
        
      </CardContent>
      
      <CardActions className="right-side">
      
        <Button style={{ backgroundColor:"#17a2b8"}} size="small" onClick={() => this.onFileUpload(user.username)}>Charger</Button>
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
}export default Reports;

