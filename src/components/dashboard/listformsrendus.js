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
    
  });

class  ListFormsRendus extends Component {

    constructor(){
        super();
        this.state = { forms: [] };
        
    } 

    

    componentDidMount(){
        let tab=[]
        FormService.getForms().then((response) => {
            for(let i=0; i<response.data.length ; i++){
                if(response.data[i].reponses[0] != "")
                {
                    tab.push(response.data[i]);
                }

            }
            this.setState({ forms: tab})
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
                   
                   <div  id="boxi" >
                   <u><h2>Liste de formulaires rendus</h2></u>
                   {this.state.forms.map(form => (
                   <Card id="bo" className="border border-info" >
                   
      <CardContent style={{color:"#197c8c"}}>
        <Typography variant="h6" component="h2">
        {form.name}
        </Typography>
        <div className="left-side" >
           <li style={{color:"#17364e"}}>Collaborateur: {form.user.username}</li>
        </div>
      </CardContent>
      <CardActions className="right-side">
        <Button style={{ backgroundColor:"#17a2b8"}} size="small" onClick={()=> {window.location.pathname = "detailsform/"+form.id;
                                }}>Details</Button>
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
}export default ListFormsRendus;

