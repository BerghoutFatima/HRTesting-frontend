import React, { Component } from "react";
import { MenuData } from "./menuData.component";


class  Choices extends Component {

        render (){
          var url = window.location.pathname;
          var res = window.location.pathname.split("/");
          var key = res[2];
          var values = [];
          if(key == 0) {values=[["Calendrier",""],["Evaluations",""],["Bilan des évaluations",""]]}
          if(key == 1) {values=[["aaa","ee"],["bbb","hhh"]]}
          if(key == 2) {values=[["Créer un formulaire d'évaluation","/newform"],["Créer un questionnaire d'évaluation","/questionnaire"],["Modifier un formulaire d'évaluation",""],["Modifier un questionnaire d'évaluation",""], ["Attribuer un formulaire à un collaborateur",""], ["Attribuer un questionnaire à un collaborateur",""]]}
          if(key == 3) {values=[["aaaa",""],["bbbb",""]]}
         
          
          
          return(
              
            <div id="box">
                    
                    {
                    values.map(item => <button  className="choice btn btn- my-3 border border-info "   onClick={()=> {window.location.pathname = item[1];}}>
                    {item[0]}
                </button>
                
                
                )
                    
                    }  
                   
                </div>  
                 
          );         
}
}

export default Choices;


