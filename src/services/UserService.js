import React, { Component } from "react";
import axios from 'axios'

const USERS_REST_API_URL = "http://localhost:8080/listerUsers";

class UserService {
    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
}
export default new UserService();
