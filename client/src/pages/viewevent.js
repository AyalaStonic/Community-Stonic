import React from "react";
import Nav from "../components/mainpage/nav";
import ViewEventComponent from "../components/ViewEvent/viewEvent";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class ViewEventAsIs extends React.Component {

    state = {
        loggedIn: localStorage.getItem("loggedIn"),
        eventToDisplay: "",
        attendees: [],
        userID: localStorage.getItem("userID"),
        administrator: false,
        editing: false,
        workaround: true,
        userimage: localStorage.getItem("userImage"),
    }