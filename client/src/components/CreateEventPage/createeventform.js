import React from "react";
import Autocomplete from "../Autocomplete/Autocomplete"

function CreateEventForm(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <div className="row SubContainer">
                            <form className="col s12">
                                <div className="row">
                                    <div className="col s12">
                                        <span className="card-title" style={{ fontSize: "3rem" }}>Create your community</span>
                                        <div className="card-image">
                                            <img src="https://user-images.githubusercontent.com/106893616/201538628-11b1b006-8e03-4558-97a6-f8ba12b9535d.jpg" style={{ width: '90%' }}></img>
                                        </div>
                                        <div className="card-content">
                                            <div className="input-field col s12">
                                                <input id="event_name" type="text" className="validate" name="eventName"

                                                    onChange={props.handleInputChange}
                                                ></input>

                                                <label htmlFor="event_name">Community Name</label>
                                            </div>

                                            <div className="input-field col s12">
                                                <Autocomplete/>
                                            </div>

                                            <div className="input-field col s12">
                                                <input id="createdate" type="date" className="validate" name="date"

                                                    onChange={props.handleInputChange}


                                                ></input>
                                                <label htmlFor="date">Date</label>
                                            </div>

                                            <div className="input-field col s12">
                                                <input id="createtime" type="time" className="validate" name="time"

                                                    onChange={props.handleInputChange}


                                                ></input>
                                                <label htmlFor="time">Time</label>
                                            </div>

                                            <div className="input-field col s12">
                                                <input id="createdescription" type="text" className="validate" name="description"

                                                    onChange={props.handleInputChange}

                                                ></input>
                                                <label htmlFor="description">Description</label>
                                            </div>
                                            <div className="row fileInput">
                                                <div className="col s12">
                                                    <form action="#">

                                                    </form>
                                                </div>
                                            </div>
                                            <a className="waves-effect waves-light btn grey" id="createEvent" onClick={props.handleFormSubmit}>Create your community</a>
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

export default CreateEventForm;