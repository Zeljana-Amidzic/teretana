import { Container, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { Component } from "react";
import authService from "../../../services/auth-service";

export default  class Korisnik extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentUser: authService.getCurrentUser()
        };
    }

    render() {

        //const { currentUser } = this.state;

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>ANA</strong> profil
                    </h3>
                </header>
            </div>
        );
    }
};