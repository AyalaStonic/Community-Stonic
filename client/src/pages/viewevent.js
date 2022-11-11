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


    getEventData = (eventID) => {
        axios.get(`/event/${eventID}`)
            .then((response) => {
                // BLOCK #1 FOR DEFAULT VALUE INPUT
                localStorage.setItem("eventName", response.data.fromDB.name);
                localStorage.setItem("eventAddress", response.data.fromDB.address);
                localStorage.setItem("eventDate", response.data.fromDB.date);
                localStorage.setItem("eventTime", response.data.fromDB.time);
                localStorage.setItem("eventDescription", response.data.fromDB.description);

                let attendeesArray = [];

                for (let i = 0; i < response.data.fromDB.attendees.length; i++) {
                    let userInfoPacket = {};
                    userInfoPacket.username = response.data.fromDB.attendees[i].username;
                    userInfoPacket.image = response.data.fromDB.attendees[i].image.url;
                    attendeesArray.push(userInfoPacket);
                }

                this.setState({
                    name: response.data.fromDB.name,
                    address: response.data.fromDB.address,
                    date: response.data.fromDB.date,
                    time: response.data.fromDB.time,
                    image: response.data.fromDB.image.url,
                    description: response.data.fromDB.description,
                    organizer: response.data.fromDB.organizerId,
                    organizername: response.data.fromDB.organizer,
                    attendees: attendeesArray,
                    timeTo: response.data.time,
                }, () => {
                    console.log(`attendees array ${this.state.attendees}`)
                    if (this.state.organizer === this.state.userID) {
                        this.setState({ administrator: true });
                    }
                    else {
                        console.log("Not an adminstrator");
                    }
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this.setState({ eventToDisplay: this.props.location.pathname.substr(12) }, () => {
            this.getEventData(this.state.eventToDisplay);
        });
    }

    edit = () => {
        this.setState({ editing: true }, () => {
        })
    }

    cancel = () => {
        this.setState({ editing: false }, () => {

        })
    }

    delete = (eventID) => {
        axios.delete(`/event/${eventID}`)
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    attend = (userID, eventID) => {
        axios.put(`/signup/${eventID}`, { userID: userID })
            .then((response) => {
                console.log(response)
                this.getEventData(this.state.eventToDisplay);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
