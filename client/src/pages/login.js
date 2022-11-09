import React from "react";
import Nav from "../components/mainpage/nav"
import LogInPageComponent from "../components/LogInPage/logInPage";
import OurModal from "../components/SignUpPage/modal";
import axios from "axios"
import { Link, withRouter } from "react-router-dom";

class Login extends React.Component {
    state = {
        loggedIn: false,
        username: "",
        password: "",
        visible: false
    }

    login = (credentials) => {
        let that = this;
        axios.post("/login", credentials)
        .then((response) => {

            localStorage.setItem("userID", response.data.id);
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("userImage", response.data.image);

            this.setState({loggedIn: true}, () => {
                localStorage.setItem("loggedIn", true);
                window.location.replace("/");
            });