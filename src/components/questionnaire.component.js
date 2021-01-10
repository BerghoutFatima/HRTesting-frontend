import React, { Component, useState } from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Button ,Radio} from "@material-ui/core";
import Navbar from "./dashboard/navbar.component";
import Menu from "./dashboard/menu.component";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import axios from 'axios'
import moment from 'moment'

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

////

function CreerQuestionnaire(){
    const classes = useStyles()

    const quiz = {
        id:'',
        name:'',
        date_envoi:'',
        note:0,
        user:{
            id:'',
            username:'',
            password:'',
            email:''
        }
    } 
    const maquestion={
            id:'',
            question:'',
            quiz:{}
    }
    const monchoix={
        id:'',
        option:'',
        rep:'',
        laNote:0,
        maquestion:{}
    }
    /*const quiz = {
        id:'',
        name:'',
        questions:[],
        date_envoi:'',
        note:0,
        user:{
            id:'',
            username:'',
            password:'',
            email:''
        }
    } 
    const maquestion={
            id:'',
            question:'',
            choices:[]
    }*/

    const [inputFields, setInputField] = useState([
        
            { nom:'',ladate:'',compo:{question: '',choices:[{option:'',rep:false, laNote:0},{option:'',rep:false, laNote:0},{option:'',rep:false, laNote:0},{option:'',rep:false, laNote:0},{option:'',rep:false, laNote:0}]},user:{}},
        ]);

    const [choice, setChoix] = useState([
        
            { leChoix: '', laReponse: ''},
        ]);

    const handleAddFields = () => {
        const values = [...choice];
            setInputField([...inputFields,{nom:'',ladate:'',compo:{question:'',choices:[{option:'',rep:false, laNote:0},{option:'',rep:false, laNote:0},{option:'',rep:false, laNote:0},{option:'',rep:false, laNote:0},{option:'',rep:false, laNote:0}]}}])
           
        }
    
    const handleRemoveFields = (index) => {
            const values = [...inputFields];
            values.splice(index,1);
            setInputField(values);
        }
    
    const handleAddChoice = () => {
            setChoix([...choice,{leChoix:'', laReponse:''}])
           

           
           
        }
    
    const handleRemoveChoice = (index) => {
            const values = [...choice];
            values.splice(index,1);
            setChoix(values);
        }

    const handleChangeInput = (index, event)=> {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
        console.log("this is inputFields")
        console.log(values)
        //return values;
        
    }
    
    

    const handleChangeChoice = (key, event)=> {
        const values = [...choice];
        
        /*for(let i=0; i<values.length; i++){
            //[...inputFields][index].choix[i] = values[i];
            [...inputFields][index].choix.push(values[i]);
        }*/
        //console.log("titi")
        //console.log([...inputFields])
        //console.log("-------")
        //[...inputFields][index].choix.push("azzazaza")
        //console.log([...inputFields]);
        //console.log(index)
        values[key][event.target.name] = event.target.value;
        setChoix(values);
        //console.log("this is choices")
        //console.log(values)
        //handleChangeInput(index, event).choix.push(choix.leChoix)
                //console.log(inputFields.choix)
        //console.log("°°°°°°°°°°")
        console.log("okok")
        console.log(values)
        console.log("###")
        //res=values;
        return values;
    }

    /*const changeHandler = (event)  => {
        const values = [...inputFields];
        const valeurs = [...choice];
        values[0][event.target.name] = event.target.value;
        for(let i=0; i<values.length; i++){
            for(let j=0; j<valeurs.length; j++){
            //[...inputFields][index].choix[i] = values[i];
            values[i].choix.push(valeurs[j]);
        }}
        setInputField(values);
        event.preventDefault();
        //valeurs = { leChoix: '', laReponse: ''}
        return valeurs;
    }*/

    const changeHandler = (event)  => {
        //console.log("eeeeeyy")
        //console.log([...inputFields])
        const values = [...inputFields];
        values[0][event.target.name] = event.target.value;
        setInputField(values);
        event.preventDefault();
        return values;
    }

    const changeDateHandler = (event)  => {
        const values = [...inputFields];
        values[0].ladate = event.target.value;
        setInputField(values);
        event.preventDefault();
        return values;
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        //changeHandler(e)[0].compo.question = changeHandler(e)[0].question;
        //console.log("----")
        //console.log(changeHandler(e)[0])
        //console.log("____")
        quiz.name=changeHandler(e)[0].nom;
        quiz.date_envoi=changeHandler(e)[0].ladate;

        axios
        .post('addQuiz', quiz)
        .then(response => {
            console.log("dddddd")
            console.log(response)
            //
            for(let i=0;i<changeHandler(e).length;i++)
        {
            changeHandler(e)[i].compo.question = changeHandler(e)[i].question;
            //qst.push(changeHandler(e)[i].question)
            //choix.push(changeHandler(e)[i].choice)
            maquestion.question = changeHandler(e)[i].compo.question;
            quiz.id = response.data.id;
            maquestion.quiz = quiz;
            console.log("^^^^^^^")
            console.log(maquestion)
            axios
            .post('addQuestion', maquestion)
            .then(resp => {
                console.log(".......")
                console.log(resp)
                //
                for(let k=0;k<changeHandler(e)[i].compo.choices.length;k++){
                    console.log("ffffffffff")
                 //console.log(monchoix.opt = changeHandler(e)[i].compo.choices[k]);
                 monchoix.option = changeHandler(e)[i].compo.choices[k].option;
                 monchoix.rep = changeHandler(e)[i].compo.choices[k].rep;
                 monchoix.laNote = changeHandler(e)[i].compo.choices[k].laNote
                 maquestion.id = resp.data.id;
                 monchoix.maquestion = maquestion;
                 
                 if(monchoix.option != ''){
                    //console.log("::::")
                    //console.log(monchoix.option)
                    //console.log(monchoix)
                    axios
                    .post('addChoice', monchoix)
                    .then(response => {
                      console.log("%%%%%")
                      console.log(response)
                      }) 
                    .catch(error => {
                      console.log(error)
                    })

                 }
                }
        }) 
        .catch(error => {
            console.log(error)
        })
           
            /*axios
               .post('addQuestion', changeHandler(e)[i].compo)
               .then(response => {
                console.log(".......")
                console.log(response)
               }) 
               .catch(error => {
                console.log(error)
               })*/
            //quiz.questions[i].choices = changeHandler(e)[i].choice;
            //push("{"+changeHandler(e)[i].question+","+changeHandler(e)[i].choice+"}")
            //quiz.choices.push("")

        }
        }) 
        .catch(error => {
            
            console.log(error)
        })

       
        
        //window.location.pathname = "quizs"
        //console.log('&&&')
        //console.log(quiz);
        //console.log(qst)
        //console.log(choix)
        //console.log('$$$')
        

        /*axios
        .post('addQuestion', maquestion)
        .then(response => {
            console.log(".......")
            console.log(response)
        }) 
        .catch(error => {
            console.log(error)
        })

        axios
        .post('addQuiz', quiz)
        .then(response => {
            console.log(".......")
            console.log(response)
        }) 
        .catch(error => {
            console.log(error)
        })*/
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
                    <u>Nouveau questionnaire</u>
                </h2>
                <br></br>
                <div>
                <TextField  className="outer2" id="outlined-basic"  variant="outlined" placeholder="Nom du questionnaire" name="nom" value={inputFields.nom} 
                onChange={changeHandler}/>
                </div>
                <br></br>
                <div>
                <input  name="ladate"  type="date" 
                 value={ moment(inputFields.ladate).format("YYYY-MMM-DD") } 
                 className="form-control"
                 onChange={changeDateHandler} />
                </div>
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
                                }
                                />
                                <br></br>

                                {inputField.compo.choices.map((ch,key)=>(
                                   
                                   <div key={key}>
                                       <TextField 
                                       name="leChoix"
                                       label="Choix"
                                       value={choice.leChoix}
                                       onChange={event => {
                                        inputFields[index].compo.choices[key].option = event.target.value;
                                           console.log(inputFields[index].compo.choices[key])
                                       }
                                       }
                                       
                                       />
                                       <TextField 
                                       name="laNote"
                                       label="Note"
                                       value={choice.leChoix}
                                       onChange={event => {
                                        inputFields[index].compo.choices[key].laNote = event.target.value;
                                           console.log(inputFields[index].compo.choices[key])
                                       }}
                                       />
                                       </div> 
                                ))
                                /*choice.map((ch, key) =>(
                                <div>
                                <div key={key}>
                                    <TextField 
                                    name="leChoix"
                                    label="Choix"
                                    value={choice.leChoix}
                                    onChange={event => {
                                        console.log(key)
                                        //inputField.choix.push(choice.leChoix)
                                        //handleChangeInput(key, event)
                                        handleChangeChoice(key, event)
                                    }
                                    //console.log("wiwiw");
                                       //console.log(inputField)
                                    }
                                    
                                    />
                                    <IconButton 
                                    onClick = { () => handleAddChoice()
                                }>
                                        <AddCircleIcon/>
                                    </IconButton>
                                    <IconButton 
                                    onClick = { () => handleRemoveChoice()}>
                                        <CancelRoundedIcon/>
                                    </IconButton>
                                    </div>
                                    </div>
                            ))*/
                            }
                                <IconButton 
                                onClick = { () => {
                                    handleAddFields()}}>
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
                    onClick={()=> {window.location.pathname = "dashboard/2"}}>
                    Annuler</Button>

                </form>
            </Container>
           
            </div>
            </div>
            </div>
            </div>
            </div>
        );
        
    
}export default CreerQuestionnaire;



/*
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
import moment from 'moment'

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



function CreerQuestionnaire(){
    const classes = useStyles()
    

    const quiz = {
        id:'',
        name:'',
        questions:[],
        date_envoi:'',
        reponses:[],
        user:{
            id:'',
            username:'',
            password:'',
            email:''
        }

    } 

    const [inputFields, setInputField] = useState([
        
            { nom:'',ladate:'',question: '', reponse: '',user:{}},
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
    const changeDateHandler = (event)  => {
        const values = [...inputFields];
        values[0].ladate = event.target.value;
        setInputField(values);
        event.preventDefault();
        return values;
    }

    const handleSubmit = (e) => {
        changeHandler(e);
        e.preventDefault();
        quiz.name=changeHandler(e)[0].nom;
        quiz.date_envoi=changeHandler(e)[0].ladate;
        for(let i=0;i<inputFields.length;i++)
        {
            quiz.questions.push(inputFields[i].question)
            quiz.reponses.push("")

        }
        
        window.location.pathname = "quizs"
        console.log('&&&')
        console.log(quiz);
        console.log('$$$')
        

        axios
        .post('addQuiz', quiz)
        .then(response => {
            console.log(response)
        }) 
        .catch(error => {
            console.log(error)
        })
    }

    const handleAddFields = () => {
        setInputField([...inputFields,{nom:'',ladate:'',question:'',reponse:''}])
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
                    <u>Nouveau questionnaire</u>
                </h2>
                <br></br>
                <div>
                <TextField  className="outer2" id="outlined-basic"  variant="outlined" placeholder="Nom du questionnaire" name="nom" value={inputFields.nom} 
                onChange={changeHandler}/>
                </div>
                <br></br>
                <div>
                <input  name="ladate"  type="date" 
                 value={ moment(inputFields.ladate).format("YYYY-MMM-DD") } 
                 className="form-control"
                 onChange={changeDateHandler} />
                </div>
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
                    onClick={()=> {window.location.pathname = "dashboard/2"}}>
                    Annuler</Button>

                </form>
            </Container>
           
            </div>
            </div>
            </div>
            </div>
            </div>
        );
        
    
}export default CreerQuestionnaire;
*/

