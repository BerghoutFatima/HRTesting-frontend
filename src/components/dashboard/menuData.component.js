import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./navbar.component";
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import AlbumSharpIcon from '@material-ui/icons/AlbumSharp';

export const  MenuData = [
    {
        title:"Accueil",
        link:"/choices"
    },
    {
        title:"Calendrier des entretiens",
        link:"/choices"
    },
    {
        title:"Passer les évaluations",
        link:"/choices"
    },
    {
        title:"Consulter les résultats",
        link:"/choices"
    },
    {
        title:"Gérer les bilans et rapports",
        link:"/choices"
    }
] 
    
  