import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MenuData } from "./menuData.component";
import Navbar from "./navbar.component";

function Menu(){
    
        
        return (
            
            <div className="sideBar">
                <div className="sideBarOne"><h5>Dashboard</h5></div>
                <ul className="sidebarList">
                    {MenuData.map((val,key) => {
                                return <li key={key} className="row" onClick={()=> {window.location.pathname = val.link;}}>
                                    
                                    <div id="title">
                                        {val.title} 
                                    </div>
                                </li>;
                            })}
                </ul> 
            </div>
            
          ); 
}
export default Menu;

/*import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./navbar.component";

export default class Menu extends Component {
    
     NavMenu = React.createClass({
        getDefaultProps: function()
        {
            return {
                isOpen: false
            };
        },
 
        render: function()
        {
            if (this.props.isOpen)
            {
                return (
                    <div className="dropdown">
                        <ul>
                            <li><a href="#">News</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Guidelines</a></li>
                            <li><a href="#">Exchange</a></li>
                            <li><a href="#">Forum</a></li>
                        </ul>
                    </div>
                );
            }
            return null;
        }
 });
}*/
