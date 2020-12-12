import React, { Component } from "react";
import { MenuData } from "./menuData.component";



class Menu extends Component{
   

   render(){
        return (
            
            <div className="sideBar ">
                <div className="sideBarOne"><h5>D A S H B O A R D</h5></div>
                <ul className="sidebarList">
                {
                    MenuData.map((val,key) => {
                      //return <li key={key} className="row" onClick={() => this.setState({selectedChoice: MenuData.id})}>
                                return <div>
                                  
                                  <li key={key} className="row" onClick={()=> {window.location.pathname = "dashboard/"+key;
                                }}>
                                  
                                   
                                    
                                    <div id="title">
                                        {val.icon}
                                        <span>{val.title}</span>
                                         
                                    </div>

                                </li>
                                </div>

                               
                            }
                            )}
                </ul> 
                
            </div>
            
          ); 
}
}
export default Menu;


