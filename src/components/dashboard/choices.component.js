import React, { Component } from "react";
import { Backpack } from 'react-kawaii';
import axios from 'axios'
import Typography from '@material-ui/core/Typography';

class  Choices extends Component {

  constructor(){
    super();
    this.state = { 
      quiz : {},
      maquestion : [],
      monchoix : [] ,
      form:{},
      grille:{},
      report:{}
    //forms:[]
    };
      
  } 

  componentDidMount(){
    var res = window.location.pathname.split("/");
    var key = res[3];
    console.log("ce "+key)
    axios.get('http://localhost:8080/listquizs').then((response) =>{
      for(let i=0; i<response.data.length ; i++){
        if(response.data[i].user.username == res[3])
        {
              this.setState({ quiz: response.data[i]});
        }
      }
              
  })
  axios.get('http://localhost:8080/listforms').then((response) =>{
      for(let i=0; i<response.data.length ; i++){
        if(response.data[i].user.username == res[3])
        {
              this.setState({ form: response.data[i]});
        }
      }
              
  })

  axios.get('http://localhost:8080/listgrilles').then((response) =>{

      for(let i=0; i<response.data.length ; i++){
        if(response.data[i].username == res[3])
        {
          console.log("pppp")
          console.log(response.data[i])
              this.setState({ grille: response.data[i]});
        }
      }
              
  })
  axios.get('/listReports').then(response =>{
    for(let i=0; i<response.data.length ; i++){
      if(response.data[i].username == res[3])
      {
        this.setState({ report: response.data[i]})
        
      }
    }
  
    })
}

        render (){
          const {form}= this.state.form
          //console.log("---")
          //let cond=1;
          //console.log(this.state.report)
          var res = window.location.pathname.split("/");
          var key = res[2];
          var values = [];
          if (res[1] == "dashboard"){
            if(key == 0) {values=[["Calendrier","/calendar/"+res[1]],["Grille d'évaluations","/grilles"],["Bilan des évaluations","reports"]]}
            if(key == 1) {window.location.pathname = "/calendar/"+res[1]}
            if(key == 2) {values=[["Créer un formulaire d'évaluation","/newform"],["Créer un questionnaire d'évaluation","/questionnaire"],["Créer une grille d'évaluation","/grille"],["Modifier un formulaire d'évaluation","/forms"],["Modifier un questionnaire d'évaluation","/quizs"], ["Modifier une grille d'évaluation","/grilles"], ["Attribuer un formulaire à un collaborateur","/formcollab"], ["Attribuer un questionnaire à un collaborateur","quizcollab"]]}
            if(key == 3) {values=[["Corriger les formulaires d'évaluation rendus","/listformsrendus"], ["Consulter les questionnaires rendus","/listquizrendus"]]}
            if(key == 4) {window.location.pathname = "/reports"}
            if(key!=0 && key!=1 && key!=2 && key!=3 && key!=4) {return(<div className="bag" style={{fontWeight:'bold',fontSize:28, color:"#17a2b8"}}><Backpack size={300} mood="happy" color="#FFD882" text="Hello World!" /> Bienvenue sur <a style={{fontWeight:'Bold',fontSize:30}}>H R T<a style={{fontSize:15,fontWeight:"normal"}}>CNSS</a> </a></div>)}
          }
          if (res[1] == "dashboardcollab")
          {
            if(key == 0) {values=[["Calendrier","/calendar/"+res[1]],["Evaluations",""],["Bilan des évaluations",""]]}
            if(key == 1) {window.location.pathname = "/calendar/"+res[1]}
            if(key == 2) {values=[["Formulaire d'évaluation","/passerform"],["Questionnaire d'évaluation","/passerquiz"]]}
            if(key == 3 && this.state.report.access == 1) {values=[["Résultat du questionnaire","/detailsquizcollab/"+this.state.quiz.id],["Résultat du formulaire","/detailsformcollab/"+this.state.form.id], ["La grille d'évaluation","/grillecollab/"+this.state.grille.id], [<h6>Télécharger le rapport <a href={this.state.report.link}>  {this.state.report.name}</a></h6> , "dashboardcollab/3"]]}
            
            if(key!=0 && key!=1 && key!=2 && key!=3 && key!=4) {return(<div className="bag" style={{fontWeight:'bold',fontSize:28, color:"#17a2b8"}}><Backpack size={300} mood="happy" color="#FFD882" text="Hello World!" /> Bienvenue sur <a style={{fontWeight:'Bold',fontSize:30}}>H R T<a style={{fontSize:15,fontWeight:"normal"}}>CNSS</a> </a></div>)}
          

          }
          if(res[1] == "dashboardcollab" && key == 3 && this.state.report.access == 0) {return(<div className="form2">
          <div className="">
          <div className="inner2">
          <div >
              <img src="/noAccess.png" className="logoDone" />
              <br></br>
              <h6 style={{color:"red"}}>Vous n'avez pas encore l'accès! </h6>
          </div>
          </div>
          </div></div>)
          }
          else
          return(
            <div id="boxt">
                    {
                    values.map(item => (
                    <button  className="choice btn btn- my-3 border border-info "   onClick={()=> {
                      if (res[1] == "dashboardcollab")
                      {
                      window.location.pathname = item[1]+"/"+res[3];
                      console.log("zerr: "+ item[1]+"/"+res[3])
                    }
                    else {window.location.pathname = item[1]}
                  }
                      }
                      
                      > 
                   <h6>{item[0]}</h6> 
                </button>))}    
                </div>       
          );         
}
}export default Choices;


