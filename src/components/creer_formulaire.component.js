import React, { Component, useState } from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from "@material-ui/core";
import Navbar from "./dashboard/navbar.component";
import Menu from "./dashboard/menu.component";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    root: {
        '& .MuiTextField-root': {
            margin : theme.spacing(1),
        }
    },
    button : {
        margin : theme.spacing(1),
        
    }
}))

function CreerFormulaire() {
    const classes = useStyles()

    const [inputFields, setInputField] = useState([
            {question: '', reponse: ''},
        ]);

    const handleChangeInput = (index, event)=> {
        console.log(index, event.target.name)
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    }

    const handleAddFields = () => {
        setInputField([...inputFields,{question:'',reponse:''}])
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index,1);
        setInputField(values);
    }
        
    return (
        <div>
            <div>
                <Navbar></Navbar> 
            </div>

            <div>
                <Menu></Menu>
            <div className="form">
            <div className="">
            <div className="inner2">
            <form >
            <Container>
                <h2>
                    Nouveau formulaire
                </h2>
                <br></br>
                <div>
                <TextField className="outer2" id="outlined-basic" label="Nom du formulaire" variant="outlined" placeholder="Nom du formulaire"/>
                </div>
                <br></br>
                <br></br>
                <form className={classes.root} onSubmit={handleSubmit}>
                    {
                        
                        inputFields.map((inputField, index) =>(
                            //console.log("index = "+index),
                            <div>
                            <div key={index}>
                                <TextField
                                name="question"
                                label="Question"
                                value={inputField.question}
                                onChange={event => handleChangeInput(index, event)}
                                />
                                <IconButton 
                                onClick = { () => handleAddFields()}>
                                    <AddCircleIcon/>
                                </IconButton>
                                <IconButton 
                                onClick = { () => handleRemoveFields()}>
                                    <CancelRoundedIcon/>
                                </IconButton>
                            </div>
                            </div>
                            ))
                    }
                    <br></br>
                    
                    <Button className={classes.button} style={{color:"white", backgroundColor:"#17a2b8"}}
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}>
                    Enregistrer</Button>
                    <Button className={classes.button} style={{color:"white",backgroundColor:"#6c6f75"}}
                    variant="contained"
                    type="cancel"
                    onClick={()=> {}}>
                    Annuler</Button>

                </form>
            </Container>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
        );
        
    
}export default CreerFormulaire;


