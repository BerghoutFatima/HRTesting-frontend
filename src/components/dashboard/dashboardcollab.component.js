import React, { Component } from "react";
import Navbar from "./navbar.component";
import MenuCollab from "./menucollab.component";
import Choices from "./choices.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


 class DashboardCollab extends Component {
    constructor(props) {
        super(props)
        this.state = {
          selectedMenuData: 2
        }
      }
    render() {
      
      /*var rslt = res[3].split("");
      var tt = ""
      for(let i=0; i<rslt.length; i++)
      {
        if(rslt[i]=="%") rslt[i] = " "
      }
    console.log("username = "+rslt)
    for(let i=0; i<rslt.length; i++)
      {
         tt=tt + rslt[i] 
      }
      console.log("username = "+tt)*/
        
        return (
            <div>
                <div>
                   <Navbar/> 
                </div>
                <div>
                   <MenuCollab></MenuCollab>
                   <div  className="sideBarTwo" >
                         <Choices/>
                   </div>
                </div>
            </div>
          );  
    }
}
export default DashboardCollab;

