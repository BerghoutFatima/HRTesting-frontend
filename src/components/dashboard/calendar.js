import React,{Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import QuizService from "../../services/QuizService";
import FormService from "../../services/FormService";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import MenuCollab from "./menucollab.component";

class EventCalendar extends Component{
    constructor(props){
        super(props);
        this.state = { 
          forms:[],
          quizs: []
        }
    } 

    componentDidMount(){
        
        FormService.getForms().then((response) => {
            this.setState({ forms: response.data})
        });
        QuizService.getQuizs().then((response) => {
          this.setState({ quizs: response.data})
      });
      }

    render(){
        var ch = window.location.pathname.split("/");
        console.log("le chemin est: "+ ch[2]);
        var tab=[]
        const { forms } = this.state.forms
        const { quizs } = this.state.quizs
        for(let i=0;i<this.state.forms.length;i++)
        {
            tab.push({title:"Form "+this.state.forms[i].name+", "+this.state.forms[i].user.username , date: this.state.forms[i].date_envoi})
        }
         for(let i=0;i<this.state.quizs.length;i++)
        {
            tab.push({title:"Quiz "+this.state.quizs[i].name+", "+this.state.quizs[i].user.username , date: this.state.quizs[i].date_envoi})
        }
        var menuu='';
        if(ch[2]=="dashboardcollab")
        return(   
            <div>
                <div>
                   <Navbar/> 
                </div>
                <div>
                   
                       <MenuCollab></MenuCollab>
                   <div  className="calendar" >
                         
                         
            <FullCalendar 
            eventColor = "#2f4050"
            defaultView="dayGridMonth"
            plugins={[ dayGridPlugin]}
            events={tab}/>
            </div>
            </div>
            </div>
        )
        if(ch[2]=="dashboard") return(   
            <div>
                <div>
                   <Navbar/> 
                </div>
                <div>
                   
                       <Menu></Menu>
                   <div  className="calendar" >
                         
                         
            <FullCalendar 
            eventColor = "#2f4050"
            defaultView="dayGridMonth"
            plugins={[ dayGridPlugin]}
            events={tab}/>
            </div>
            </div>
            </div>
        )
    }

}
export default EventCalendar