import React, { Component } from "react";
import axios from 'axios'

const QUIZS_REST_API_URL = "/listquizs";

class QuizService {
    getQuizs(){
        return axios.get(QUIZS_REST_API_URL);
    }
}
export default new QuizService();
