import React, { Component } from "react";
import { Button, Grid } from '@material-ui/core';
import { TextField } from "@material-ui/core";
import { getByIdzaposleni } from "../../../services/zaposleni-service";
import { setAxiosInterceptors } from "../../../services/auth-one";
import { getAccountFromToken } from "../../../services/auth-one";

export default class Zaposleni extends Component{
    constructor(props){
        super(props);
        this.state = {
            izaposleni: props.idzaposleni,
            idkorisnik: props.idkorisnik,
            strucnasprema: props.strucnasprema,
            datumzaposlenja: props.datumzaposlenja,
            sertifikat: props.sertifikat,
        };
    }

    componentDidMount(){
        const currentUser = getAccountFromToken();
        this.showUsersProfile(currentUser);
        setAxiosInterceptors();
    }

    showUsersProfile(currentUser){
        console.log(currentUser);
        getByIdzaposleni(this.idkorisnik).then((resp) => {
            this.setState({
                ...this.state,
                zaposleni: resp.data,
            });
        }).catch((e) => console.log(e));
    }

    render = () => {
        const zaposleni = this.state;
        return(
            <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="strucnasprema"
                  fullWidth
                  id="strucnasprema"
                  label="Stručna sprema"
                  autoFocus
                  value={zaposleni?.strucnasprema}
                />
                <TextField
                  autoComplete="given-name"
                  name="datumzaposlenja"
                  fullWidth
                  id="datumzaposlenja"
                  label="Datum zaposlenja"
                  autoFocus
                  value={zaposleni?.datumzaposlenja}
                />
                <TextField
                  autoComplete="given-name"
                  name="sertifikat"
                  fullWidth
                  id="sertifikat"
                  label="Sertifikat"
                  autoFocus
                  value={zaposleni?.sertifikat}
                />
            </Grid>
        )
    }
}