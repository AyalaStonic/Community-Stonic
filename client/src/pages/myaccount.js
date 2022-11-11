import React from "react";
import Nav from "../components/mainpage/nav"
import MyAccountComponent from "../components/MyAccount/myAccount";
import OurModal from "../components/SignUpPage/modal"
import axios from "axios";

class MyAccount extends React.Component {
    state = {
        loggedIn: localStorage.getItem("loggedIn"),
        userID: "",

        username: "",
        firstname: "",
        lastname: "",
        password: "",
        email: "",
        image: "",

        newfirstname: "",
        newlastname: "",
        newpassword: "",
        newemail: "",
        newimage: "",

        visible: false,

    }

    // this will GET details that are already saved in DB
    getUserDetails = (userIDFromState) => {
        axios.get(`/user/${userIDFromState}`)
            .then((response) => {
                // data was returned as response.data, which is an array.  
                this.setState({
                    username: response.data[0].username,
                    firstname: response.data[0].firstname,
                    lastname: response.data[0].lastname,
                    email: response.data[0].email,
                    image: localStorage.getItem("userImage")
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    changeUserDetails = (userIDFromState, changesToUser) => {
        axios.put(`/user/${userIDFromState}`, changesToUser)
            .then((response) => {
                console.log(response);
                this.setState({
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    image: response.data.image.url,
                    missingdetails: false
                }, () => {
                    localStorage.setItem("userImage", response.data.image.url, () => {
                        this.getUserDetails(this.state.userID)
                    })
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }