import React from "react";
import { Link } from "react-router-dom";
import "./createcard.css" 

function CreateCard(props) {
  return (
    <div className="col col s12 m6 l4 xl3">
      <div className="create-card card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            style={{height: "200px"}}
            className="activator"
            src="https://media.giphy.com/media/BpGWitbFZflfSUYuZ9/giphy.gif?cid=ecf05e47kw19o1t8pie8pb4q0hvo8vugk5l8p5kjxiygfwrk&rid=giphy.gif&ct=g"
          ></img>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            <b>build your community</b><i className="material-icons right">add_circle_outline
</i>
          </span>
          <p>
            <Link to={(props.loggedIn === "true") ? "/createevent" : "/loginpage"}>Click here</Link>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Create 
          </span>
          <p>
            If you have an idea and would like do an event or project in your local community,
            click<Link to={(props.loggedIn === "true") ? "/createevent" : "/loginpage"}> here </Link>
            You will show up as the project organizer and you can also edit the event after it is created!
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateCard;
