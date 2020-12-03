import React, { Component, useState } from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from "@material-ui/core";
import Navbar from "./dashboard/navbar.component";
import Menu from "./dashboard/menu.component";

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
                                onClick = { () => handleRemoveFields()}>
                                    <RemoveIcon/>
                                </IconButton>
                                <IconButton 
                                onClick = { () => handleAddFields()}>
                                    <AddIcon/>
                                </IconButton>
                                
                            </div>
                            </div>
                            ))
                    }
                    <br></br>
                    <Button className={classes.button}
                    variant="contained"
                    color=""
                    type="submit"
                    onClick={handleSubmit}>
                    Enregistrer</Button>

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


