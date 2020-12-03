import React, { Component } from "react";
import Navbar from "./dashboard/navbar.component";
import Menu from "./dashboard/menu.component";

export default class Questionnaire extends Component {
    render() {
        
        return (
            <div>
            <div>
                <div>
                   <Navbar></Navbar> 
                </div>

                <div>
                   <Menu></Menu>
                   <div className="form">
            <div className="outer ">
            <div className="inner2">
            <form >

                <h3>Questionnaire</h3>

                <div className="form-group">
                    <label>Estimez vous que tous les objectifs fixés sont atteints?</label>
                    
                    <div >
                    <input type="checkbox"  placeholder="Oui" /><label>Oui</label>
                    <br></br>
                    <input type="checkbox"  placeholder="Non" /><label>Non</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Avez-vous contribuer à combien de projets?</label>
                    <br></br>
                    <div>
                        <div className="boxleft">
                    <input type="checkbox"  placeholder="5" /><label>5</label>
                    <br></br>
                    <input type="checkbox"  placeholder="6" /><label>6</label>
                    <br></br>
                    <input type="checkbox"  placeholder="7" /><label>7</label>
                    </div>
                    <div className="boxleft">
                    <input type="checkbox"  placeholder="8" /><label>8</label>
                    <br></br>
                    <input type="checkbox"  placeholder="9" /><label>9</label>
                    <br></br>
                    <input type="checkbox"  placeholder="10" /><label>10</label></div>
                    </div>
                </div>

                <div >
                <button type="submit" className="buttonCancel" onClick={()=> {window.location.pathname = "/dashboard/2";}}>
                    Annuler
                </button>
                <button type="submit" className="buttonConfirm" onClick={()=> {window.location.pathname = ""}}>
                    Confirmer
                </button>
                </div>

                
            </form>
            </div>
            </div>
            </div>
                   
                </div>
            
            </div>
            
                
                
            
            </div>
        );
        
    }
}


