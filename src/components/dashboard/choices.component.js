import React, { Component } from "react";
import { Backpack } from 'react-kawaii';

class  Choices extends Component {

        render (){
          var res = window.location.pathname.split("/");
          var key = res[2];
          var values = [];
          if(key == 0) {values=[["Calendrier",""],["Evaluations",""],["Bilan des évaluations",""]]}
          if(key == 1) {values=[["aaa","ee"],["bbb","hhh"]]}
          if(key == 2) {values=[["Créer un formulaire d'évaluation","/newform"],["Créer un questionnaire d'évaluation","/questionnaire"],["Modifier un formulaire d'évaluation",""],["Modifier un questionnaire d'évaluation",""], ["Attribuer un formulaire à un collaborateur",""], ["Attribuer un questionnaire à un collaborateur",""]]}
          if(key == 3) {values=[["aaaa",""],["bbbb",""]]}
          if(key!=0 && key!=1 && key!=2 && key!=3 && key!=4) {return(<div className="bag" style={{fontWeight:'bold',fontSize:28, color:"#17a2b8"}}><Backpack size={300} mood="happy" color="#FFD882" text="Hello World!" /> Bienvenue sur <a style={{fontWeight:'Bold',fontSize:30}}>H R T<a style={{fontSize:15,fontWeight:"normal"}}>CNSS</a> </a></div>)}
         
          return(
            <div id="box">
                    {values.map(item => <button  className="choice btn btn- my-3 border border-info "   onClick={()=> {window.location.pathname = item[1];}}> 
                    {item[0]}
                </button>)}    
                </div>       
          );         
}
}export default Choices;


