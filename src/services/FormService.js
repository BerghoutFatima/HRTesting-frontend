import React, { Component } from "react";
import axios from 'axios'

const FORMS_REST_API_URL = "/listforms";
const FORMSCOLLAB_REST_API_URL = "/chercherForm";

class FormService {
    getForms(){
        return axios.get(FORMS_REST_API_URL);
    }
    getFormsCollab(){
        return axios.get(FORMSCOLLAB_REST_API_URL);
    }
}
export default new FormService();
