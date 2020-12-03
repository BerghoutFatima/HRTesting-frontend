import React from "react";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

export const  MenuData = [
    {
        title:"Accueil",
        link:"/choices",
        icon:<HomeOutlinedIcon/>
    },
    {
        title:"Calendrier des entretiens",
        link:"/choices",
        icon:<DateRangeIcon/>
    },
    {
        title:"Passer les évaluations",
        link:"/choices",
        icon:<CreateOutlinedIcon/>
    },
    {
        title:"Consulter les résultats",
        link:"/choices",
        icon:<DescriptionOutlinedIcon/>
    },
    {
        title:"Gérer les bilans et les rapports",
        link:"/choices",
        icon:<SettingsOutlinedIcon/>
    }
] 
    
  