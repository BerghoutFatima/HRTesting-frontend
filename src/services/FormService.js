import React, { Component } from "react";
import axios from 'axios'

const FORMS_REST_API_URL = "/listforms";

class FormService {
    getForms(){
        return axios.get(FORMS_REST_API_URL);
    }
}
export default new FormService();
