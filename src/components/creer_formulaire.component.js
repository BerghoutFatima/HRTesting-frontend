import React, { Component, useState } from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import Navbar from "./dashboard/navbar.component";
import Menu from "./dashboard/menu.component";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import axios from 'axios'

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
    

    const form = {
        id:'',
        name:'',
        questions:[],
        reponses:[],
        user:{
            id:'',
            username:'',
            password:'',
            email:''
        }

    } 

    const [inputFields, setInputField] = useState([
        
            { nom:'',question: '', reponse: '',user:{}},
        ]);

    const handleChangeInput = (index, event)=> {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
        console.log(values)
    }


    const changeHandler = (event)  => {
        const values = [...inputFields];
        values[0][event.target.name] = event.target.value;
        setInputField(values);
        event.preventDefault();
        return values;
    }

    const handleSubmit = (e) => {
        changeHandler(e);
        e.preventDefault();
        form.name=changeHandler(e)[0].nom;
        for(let i=0;i<inputFields.length;i++)
        {
            form.questions.push(inputFields[i].question)
            form.reponses.push("")
        }
        window.location.pathname = "forms"
        console.log('&&&')
        console.log(form);
        console.log('$$$')
        

        axios
        .post('addForm', form)
        .then(response => {
            console.log(response)
        }) 
        .catch(error => {
            console.log(error)
        })
    }

    const handleAddFields = () => {
        setInputField([...inputFields,{nom:'',question:'',reponse:''}])
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
            
            <Container >
                <h2>
                    Nouveau formulaire
                </h2>
                <br></br>
                <div>
                <TextField  className="outer2" id="outlined-basic"  variant="outlined" placeholder="Nom du formulaire" name="nom" value={inputFields.nom} 
                onChange={changeHandler}/>
                </div>
                <br></br>
                <br></br>
                <form className={classes.root} onSubmit={handleSubmit}>
                    {
                        
                        
                        inputFields.map((inputField, index) =>(
                            <div>
                                
                            <div key={index}>
                            
                                <TextField className="form-control"
                                name="question"
                                label="Question"
                                value={inputField.question}
                                onChange={event => handleChangeInput(index, event)
                                    //changeHandler(event)
                                }
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
           
            </div>
            </div>
            </div>
            </div>
            </div>
        );
        
    
}export default CreerFormulaire;

