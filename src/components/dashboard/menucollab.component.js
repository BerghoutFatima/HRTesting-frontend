import React, { Component } from "react";
import { MenuDataCollab } from "./menuData.component";



class MenuCollab extends Component{
   

   render(){
    var res = window.location.pathname.split("/");
    
    //console.log("username = "+res[3])
        return (
            
            <div className="sideBar ">
                <div className="sideBarOne"><h5>D A S H B O A R D</h5></div>
                <ul className="sidebarList">
                {
                    MenuDataCollab.map((val,key) => {
                      //return <li key={key} className="row" onClick={() => this.setState({selectedChoice: MenuData.id})}>
                                return <div>
                                  
                                  <li key={key} className="row" onClick={()=> {window.location.pathname = "dashboardcollab/"+key+"/"+res[2];
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
export default MenuCollab;


