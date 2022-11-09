import React from "react";
import Nav from "../components/mainpage/nav"
import CreateEventForm from "../components/CreateEventPage/createeventform"
import axios from "axios";

class CreateEvent extends React.Component {

    state = {
        loggedIn: localStorage.getItem("loggedIn"),
        userID: localStorage.getItem("userID"),
        username: localStorage.getItem("username"),
        userimage: localStorage.getItem("userImage"),
        eventName: "",
        address: "",
        date: "",
        time: "",
        description: "",
    }
