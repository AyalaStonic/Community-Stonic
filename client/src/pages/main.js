import React from "react";
import Nav from "../components/mainpage/nav"
import Statement from "../components/mainpage/statement"
import SearchBar from "../components/mainpage/searchbar"
import CreateCard from "../components/mainpage/createcard"
import OtherCards from "../components/mainpage/othercards"
import Carousel from "../components/mainpage/carousel"
import axios from "axios"
import OurModal from "../components/SignUpPage/modal"
import { Link, withRouter } from "react-router-dom";

class Main extends React.Component {

    state = {
        loggedIn: localStorage.getItem("loggedIn"),
        searchZIP: "",
        eventResults: [
        ],
        href: "/",
        userimage: localStorage.getItem("userImage"),
        searchquery: "",
        noresults: false,
        visible: false,
    }

    componentDidMount() {
        this.getRandomEvents();
    }

    getRandomEvents = () => {
        axios.get("/event")
            .then((response) => {
                this.setState({ eventResults: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getRandomEvents();
    }