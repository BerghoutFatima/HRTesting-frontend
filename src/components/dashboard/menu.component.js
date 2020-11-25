import React, { Component } from "react";
import { MenuData } from "./menuData.component";
import Choices from "./choices.component";
import axios from 'axios';
//import panel from 'react-bootstrap/lib/Panel';


class Menu extends Component{
    /*constructor(props) {
        super(props)
        this.state = {
          selectedChoice: 1
        }
      }

       //function which is called the first time the component loads
  componentDidMount() {
    this.getChoiceData();
  }

  //Function to get the Customer Data from json
  getChoiceData() {
    axios.get('public/assets/samplejson/choiceList.json').then(response => {
      this.setState({choiceList: response})
    })
  };*/

   render(){
        return (
            
            <div className="sideBar">
                <div className="sideBarOne"><h5>Dashboard</h5></div>
                <ul className="sidebarList">
                {
                /*this.state.choiceList.data.map(choice => <panel bsStyle="info" key={choice.values} className="centeralign">
                
            <div>
              
              <p>{choice.title}</p>
              <button bsStyle="info" onClick={() => this.setState({selectedChoice: choice.id})}>

                Click to View Details

              </button>

              </div>
          </panel>*/
                    MenuData.map((val,key) => {
                      //return <li key={key} className="row" onClick={() => this.setState({selectedChoice: MenuData.id})}>
                                return <li key={key} className="row" onClick={()=> {window.location.pathname = "dashboard/"+key;
                                }}>
                                  
                                   
                                    
                                    <div id="title">
                                        {val.title} 
                                    </div>

                                </li>;

                               
                            }
                            )}
                </ul> 
                
            </div>
            
          ); 
}
}
export default Menu;


