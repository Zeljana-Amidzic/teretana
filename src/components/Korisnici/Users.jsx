import React, { Component } from "react";

export default class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            idkorisnik: props.idkorisnik,
	        imeprezime: props.imeprezime,
	        datumrodjenja: props.datumrodjenja,
	        telefon: props.telefon,
	        email: props.email,
	        adresa: props.adresa,
	        uloga: props.uloga,
	        korisnickoime: props.korisnickoime,
	        lozinka: props.lozinka,
            authorities: props.authorities,
            username: props.username,
            password: props.password,
            isaccountnonexpired: props.isaccountnonexpired,
            isaccountnonlocked: props.isaccountnonlocked,
            iscredentialsnonexpired: props.iscredentialsnonexpired,
            isenabled: props.isenabled
        };
    }

    render = () => {
        const korisnik = this.state;
        return(
            <>
                <p>
                    <strong>{korisnik?.imeprezime} ({korisnik?.uloga})</strong>
                </p>
                <br/>
                <p>
                    <strong>Email: </strong>{korisnik?.email}
                </p>
                <br/>
                <p>
                    <strong>Telefon: </strong>{korisnik?.telefon}
                </p>
            </>
        )
    }
}