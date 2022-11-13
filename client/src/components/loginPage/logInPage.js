import React from "react";

function LogInPageComponent(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <div className="row subContainer">
                            <form className="col s12">
                                <div className="row">
                                    <div className="col s12">
                                        <span className="card-title" style={{ fontSize: "3rem" }}>Log In</span>
                                        <div className="card-image">
                                            <img src={"https://media.giphy.com/media/mL2btWhzx5JSMm2lPx/giphy.gif?cid=ecf05e47ou1lko3wjra2gowkae7jw2cyato2dd3bk7osd8n8&rid=giphy.gif&ct=g"} style={{ width: "300px"}} />
                                        </div>
                                        <br />
                                        <div className="card-content">
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input id="username" type="text" className="validate" name="username"

                                                    onChange={props.handleInputChange}
                                                    

                                                    ></input>
                                                    <label htmlFor="username">Username</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input id="password" type="password" className="validate" name="password"
                                                    
                                                    onChange={props.handleInputChange}
                                                    

                                                    ></input>
                                                    <label htmlFor="password">Password</label>
                                                </div>
                                            </div>
                                            <a className="waves-effect waves-light btn green" id="login" onClick={props.handleFormSubmit}>Log In</a>
    <br></br><br></br>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default LogInPageComponent;