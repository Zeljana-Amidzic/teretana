import { Container, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { getAccountFromToken } from "../../../services/auth-one";
import authService from "../../../services/auth-service";

export default  class Korisnik extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentUser: getAccountFromToken(),
            idkorisnik: props.idkorisnik,
	        imeprezime: props.imeprezime,
	        datumrodjenja: props.datumrodjenja,
	        telefon: props.telefon,
	        email: props.email,
	        adresa: props.adresa,
	        uloga: props.uloga,
	        korisnickoime: props.korisnickoime,
	        lozinka: props.lozinka,
        };
    }

    render() {

        const { currentUser } = this.state;

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{currentUser?.imeprezime}</strong> profil
                    </h3>
                </header>
                <p>
                    <strong>Ime i prezime:</strong>{" "}
                    {currentUser?.imeprezime}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {currentUser?.email}
                </p>
            </div>
        );
    }
};