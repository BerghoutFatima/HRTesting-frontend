import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./navbar.component";
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import AlbumSharpIcon from '@material-ui/icons/AlbumSharp';

export const  MenuData = [
   

    {
        title:"Accueil",
        link:"/home",
    },
    {
        title:"Calendrier des entretiens",
        link:"/home",
    },
    {
        title:"Passer les évaluations",
        link:"/home",
    },
    {
        title:"Consulter les résultats",
        link:"/home",
    }
] 
    
  