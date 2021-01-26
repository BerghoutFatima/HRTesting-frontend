import React, { Component } from "react";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import QuizService from "../../services/QuizService";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { EditRounded } from "@material-ui/icons";

const useStyles = makeStyles({
    
  });

class  ListQuizRendus extends Component {

    constructor(){
        super();
        this.state = { quizs: [] };
        
    } 

    

    componentDidMount(){
        let tab=[]
        QuizService.getQuizs().then((response) => {
            for(let i=0; i<response.data.length ; i++){
                if(response.data[i].note != 0)
                {
                    tab.push(response.data[i]);
                }

            }
            this.setState({ quizs: tab})
        });
    }

        render (){
        
            const { quizs} = this.state
            return(
                <div>       
                <div>
                   <Navbar/> 
                </div>
                <div>
                   <Menu></Menu>
                   
                   <div  id="boxi" >
                   <u><h2>Liste de questionnaires rendus</h2></u>
                   {this.state.quizs.map(quiz => (
                   <Card id="bo" className="border border-info" >
                   
      <CardContent style={{color:"#197c8c"}}>
        <Typography variant="h6" component="h2">
        {quiz.name}
        </Typography>
        <div className="left-side" >
           <li style={{color:"#17364e"}}>Collaborateur: {quiz.user.username}</li>
           <li style={{color:"#17364e"}}>La note: {quiz.note} /10</li>
        </div>
      </CardContent>
      <CardActions className="right-side">
        <Button style={{ backgroundColor:"#17a2b8"}} size="small" onClick={()=> {window.location.pathname = "detailsquiz/"+quiz.id;
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
}export default ListQuizRendus;

