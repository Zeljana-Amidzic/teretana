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

        const { currentUser } = this.state;

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{currentUser.korisnickoime}</strong> profil
                    </h3>
                </header>
                <p>
                    <strong>Token:</strong>{" "}
                    {currentUser.accessToken.substring(0, 20)}...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
                <p>
                    <strong>Ime i prezime:</strong>{" "}
                    {currentUser.imeprezime}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {currentUser.email}
                </p>
            </div>
        );
    }
};