import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./navbar.component";
import Menu from "./menu.component";
import Choices from "./choices.component";

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
                   <Navbar></Navbar> 
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

