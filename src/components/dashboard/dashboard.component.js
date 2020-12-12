import React, { Component } from "react";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import Choices from "./choices.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


 class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          selectedMenuData: 2
        }
      }
    render() {
        
        return (
            <div>
                <div>
                   <Navbar/> 
                </div>
                <div>
                   <Menu></Menu>
                   <div  className="sideBarTwo" >
                         <Choices/>
                   </div>
                </div>
            </div>
          );  
    }
}
export default Dashboard;

