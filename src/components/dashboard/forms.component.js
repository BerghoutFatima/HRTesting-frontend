import React, { Component } from "react";
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

class  Forms extends Component {

    constructor(){
        super();
        this.state = { forms: [] };
        
    } 

    

    componentDidMount(){
        
        FormService.getForms().then((response) => {
            this.setState({ forms: response.data})
        });
    }

        render (){
        
            const { forms} = this.state
            return(
              
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
                   
      <CardContent style={{color:"#197c8c"}}>
        <Typography variant="h6" component="h2">
        {form.name}
        </Typography>
        
      </CardContent>
      <CardActions className="right-side">
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
                                        
            ); 
            
}
}export default Forms;

