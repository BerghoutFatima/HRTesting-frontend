import React, { Component } from "react";
import axios from 'axios'

const FORMS_REST_API_URL = "/listforms";
const FORMSCOLLAB_REST_API_URL = "/chercherForm";
const DETAILSFORM_REST_API_URL = "/detailsForm/";

class FormService {
    getForms(){
        return axios.get(FORMS_REST_API_URL);
    }
    getFormsCollab(){
        return axios.get(FORMSCOLLAB_REST_API_URL);
    }
    getDetailsForm(key){
        return axios.get(DETAILSFORM_REST_API_URL+key);
    }
}
export default new FormService();
