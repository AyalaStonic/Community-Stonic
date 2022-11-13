import React from "react";
import "./viewEvent.css";
import Autocomplete from "../Autocomplete/Autocomplete"
import { Link } from "react-router-dom"

function ViewEventComponent(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card-panel">
            <div className="row subContainer">
              <form className="col s12">
                <div className="row">
                  <div className="col s12">
                    <span className="card-title" style={{ fontSize: "3rem" }}>
                      View Event
                    </span>
                    <br></br>
                    <span
                      className="card-title"
                      style={{ fontSize: "1rem", color: "green" }}
                    >
                      <i>
                        {props.admin === true
                          ? "*Note:  You are the organizer for this event!  Editing this event's details can be done below."
                          : ""}
                      </i>
                    </span>
                    <br></br>
                    <div className="card-image">
                      <img
                        src={
                          (props.image) ? props.image :
                            "https://media.giphy.com/media/IOywT9BgZYs8vBfVVw/giphy.gif?cid=ecf05e47cvzrmx4mhaurp66zxhy0obpos4dp912fgq5dlux1&rid=giphy.gif&ct=g"
                        }
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                    <br />
                    <div className="card-content">
                      {props.editing === true ? (
                        <div className="collection">
                          <a className="collection-item">
                            Change Event Name from <b>{props.name}</b> to:
                          </a>

                          <input
                            id="eventname"
                            type="text"
                            className="validate"
                            name="newname"
                            onChange={props.handleInputChange}
                          />

                          <a className="collection-item">
                            Google Map Image
                            <iframe
                               style={{border:"0", width: "600", height: "450", frameborder: "0", border: "0px",
                               position: "relative",
                               width: "100%",
                               minHeight: "30rem", maxHeight: "40rem"}}
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBaLU-7p4spFKf611ZrMTTZoQUCC2KMgbg&q=${props.address}`} >
                              </iframe>
                          </a>
                          <a className="collection-item">
                            Change Event Address from <b>{props.address}</b> to:
                          </a>

                          <Autocomplete
                          color={"lightgoldenrodyellow"}></Autocomplete>
                          
                          <a className="collection-item">
                            Change Event Date from <b>{props.date}</b> to:
                          </a>

                          <input
                            id="date"
                            type="date"
                            className="validate"
                            name="newdate"
                            onChange={props.handleInputChange}
                          />
                          <label htmlFor="date"></label>

                          <a className="collection-item">
                            Change Event Time from <b>{props.time}</b> to:
                          </a>

                          <input
                            id="time"
                            type="time"
                            className="validate"
                            name="newtime"
                            onChange={props.handleInputChange}
                          />
                          <label htmlFor="time"></label>

                          <a className="collection-item">
                            Change Event Description from{" "}
                            <b>{props.description}</b> to:{" "}
                            <input
                              id="description"
                              type="text"
                              className="validate"
                              name="newdescription"
                              onChange={props.handleInputChange}
                            />
                            <label htmlFor="description"></label>
                          </a>
                          <a className="collection-item">
                            Change Event Image{" "}
                            <div className="col s12">
                              <form action="#">
                                <div className="file-field input-field">
                                  <div className="badge blue">
                                    <span id="upload">Upload New Event Picture</span>
                                    <input type="file" name="image" onChange={props.setImage} ></input>
                                  </div>
                                  <input className="file-path validate" type="text"></input>
                                </div>
                              </form>
                            </div>
                          </a>

                          <textarea
                            id="description"
                            class="materialize-textarea"
                            name="newdescription"
                            onChange={props.handleInputChange}
                          ></textarea>

                          <a className="collection-item">
                            Organizer :{" "}
                            <span className="eventorganizer">
                              {props.organizername}
                            </span>
                          </a>
                          <a className="collection-item">
                            Attendees :{" "} <br />
                            <ul>
                              {props.attendees}
                            </ul>
                          </a>
                        </div>
                      ) : (
                          <div className="collection">
                            <a className="collection-item">
                              <b>Event Name :</b>{" "}
                              <span className="eventname">{props.name}</span>
                            </a>
                            <a className="collection-item">
                              <div>
                                <p>Google Map Image</p>
                              <iframe
                               style={{border:"0", width: "600", height: "450", frameborder: "0", border: "0px",
                               position: "relative",
                               width: "100%",
                               minHeight: "30rem", maxHeight: "40rem"}}
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBaLU-7p4spFKf611ZrMTTZoQUCC2KMgbg&q=${props.address}`} >
                              </iframe>
                              </div>
                              
                            </a>
                            <a className="collection-item">
                              <b>Address :</b>{" "}
                              <span className="eventaddress">
                                {props.address}
                              </span>
                            </a>
                            <a className="collection-item">
                              <b>Date :</b>{" "}
                              <span className="eventdate">{props.date}</span>
                            </a>
                            <a className="collection-item">
                              <b>Time :</b>{" "}
                              <span className="eventtime">{props.time}</span>
                            </a>
                            <a className="collection-item">
                              <b>Event is:</b>{" "}
                              <span className="eventtime">{props.timeTo}</span>
                            </a>
                            <a className="collection-item">
                              <b>Description :</b>{" "}
                              <span className="eventdescription">
                                {props.description}
                              </span>
                            </a>
                            <a className="collection-item">
                              <b>Organizer :</b>{" "}
                              <span className="eventorganizer">
                                {props.organizername}
                              </span>
                            </a>
                            <a className="collection-item">
                              <b>Attendees :</b>{" "} <br />
                              <span className="eventattendees">
                                {props.attendees}
                              </span>
                            </a>
                            
                           
                          </div>
                        )}

                      <a
                        className="waves-effect waves-light btn green"
                        id="attend"
                        onClick={() =>
                          props.attend(props.userID, props.eventID)
                        }
                      >
                        Attend
                      </a>


                      <br></br>
                      <br></br>

                      {// Are you an admin?
                        props.admin === true ? (
                          // Yes, I am an admin

                          // If so, are you editing?
                          props.editing === true ? (
                            // Yes, I am editing
                            <div>
                              <a
                                className="waves-effect waves-light btn cyan "
                                id="attend"
                                onClick={props.handleFormSubmit}
                              >
                                Submit
                            </a>
                              <Link to={"/myevents"}>
                                <a
                                  className="waves-effect waves-light btn red "
                                  id="attend"
                                  onClick={() => props.delete(props.eventID)}
                                >
                                  Delete Event
                            </a>
                              </Link>
                              <br></br>
                              <br></br>
                              <a
                                className="waves-effect waves-light btn amber "
                                id="attend"
                                onClick={() => props.cancel()}
                              >
                                Cancel Editing
                            </a>
                            </div>
                          ) : (
                              // No, I am not editing
                              <div>

                                <a
                                  className="waves-effect waves-light btn cyan"
                                  id="attend"
                                  onClick={() => props.edit()}
                                >
                                  Edit Event
                            </a>

                              </div>
                            )
                        ) : (
                            // No, I am not an admin
                            ""
                          )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEventComponent;
