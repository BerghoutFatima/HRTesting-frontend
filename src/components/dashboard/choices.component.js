import React, { Component } from "react";
import { Backpack } from 'react-kawaii';

class  Choices extends Component {

        render (){
          
          var res = window.location.pathname.split("/");
          var key = res[2];
          console.log("az "+res[1])
          var values = [];
          if (res[1] == "dashboard"){
            if(key == 0) {values=[["Calendrier","/calendar/"+res[1]],["Grille d'évaluations","/grilles"],["Bilan des évaluations","reports"]]}
            if(key == 1) {window.location.pathname = "/calendar/"+res[1]}
            if(key == 2) {values=[["Créer un formulaire d'évaluation","/newform"],["Créer un questionnaire d'évaluation","/questionnaire"],["Créer une grille d'évaluation","/grille"],["Modifier un formulaire d'évaluation","/forms"],["Modifier un questionnaire d'évaluation","/quizs"], ["Modifier une grille d'évaluation","/grilles"], ["Attribuer un formulaire à un collaborateur","/formcollab"], ["Attribuer un questionnaire à un collaborateur","quizcollab"]]}
            if(key == 3) {values=[["aaaa",""],["bbbb",""]]}
            if(key == 4) {window.location.pathname = "/reports"}
            if(key!=0 && key!=1 && key!=2 && key!=3 && key!=4) {return(<div className="bag" style={{fontWeight:'bold',fontSize:28, color:"#17a2b8"}}><Backpack size={300} mood="happy" color="#FFD882" text="Hello World!" /> Bienvenue sur <a style={{fontWeight:'Bold',fontSize:30}}>H R T<a style={{fontSize:15,fontWeight:"normal"}}>CNSS</a> </a></div>)}
          }
          if (res[1] == "dashboardcollab")
          {
            if(key == 0) {values=[["Calendrier","/calendar/"+res[1]],["Evaluations",""],["Bilan des évaluations",""]]}
            if(key == 1) {window.location.pathname = "/calendar/"+res[1]}
            if(key == 2) {values=[["Formulaire d'évaluation","/passerform"],["Questionnaire d'évaluation","/passerquiz"]]}
            if(key == 3) {values=[["aaaa",""],["bbbb",""]]}
            if(key!=0 && key!=1 && key!=2 && key!=3 && key!=4) {return(<div className="bag" style={{fontWeight:'bold',fontSize:28, color:"#17a2b8"}}><Backpack size={300} mood="happy" color="#FFD882" text="Hello World!" /> Bienvenue sur <a style={{fontWeight:'Bold',fontSize:30}}>H R T<a style={{fontSize:15,fontWeight:"normal"}}>CNSS</a> </a></div>)}
          

          }
          return(
            <div id="boxt">
                    {
                    values.map(item => (
                      //{
                      //if(item[0]==""){window.location.pathname = "/calendar"}
                      //else {
                    <button  className="choice btn btn- my-3 border border-info "   onClick={()=> {
                      if (res[1] == "dashboardcollab")
                      {
                      //window.location.pathname = item[1]+"/"+res[2]+"/"+res[3];
                      window.location.pathname = item[1]+"/"+res[3];
                      console.log("zerr: "+ item[1]+"/"+res[3])
                    }
                    else {window.location.pathname = item[1]}
                  }
                      }
                      
                      > 
                    {item[0]}
                </button>))}    
                </div>       
          );         
}
}export default Choices;


