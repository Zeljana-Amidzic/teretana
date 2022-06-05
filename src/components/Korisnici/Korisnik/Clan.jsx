import React, { Component } from "react";
import { Button, Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import { Container, makeStyles, Paper, responsiveFontSizes, TextField } from "@material-ui/core";

export default class Clan extends Component{
    constructor(props){
        super(props);
        this.state = {
            idclan: props.idclan,
            idkorisnik: props.idkorisnik,
            zdravstveniprob: props.zdravstveniprob,
            datumuclanjenja: props.datumuclanjenja,
            brojkartice: props.brojkartice,
            tipkartice: props.tipkartice,
            vazido: props.vazido
        };
    }

    render = () => {
        const clan = this.state;

        return(
            <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="zdravstveniprob"
                  fullWidth
                  id="zdravstveniprob"
                  label="Zdravstveni problem"
                  autoFocus
                  value={clan?.zdravstveniprob}
                />
                <TextField
                  autoComplete="given-name"
                  name="datumuclanjenja"
                  fullWidth
                  id="datumuclanjenja"
                  label="Datum uclanjenja"
                  autoFocus
                  value={clan?.datumuclanjenja}
                />
                <TextField
                  autoComplete="given-name"
                  name="brojkartice"
                  fullWidth
                  id="brojkartice"
                  label="Broj kartice"
                  autoFocus
                  value={clan?.brojkartice}
                />
                <TextField
                  autoComplete="given-name"
                  name="tipkartice"
                  fullWidth
                  id="tipkartice"
                  label="Tip kartice"
                  autoFocus
                  value={clan?.tipkartice}
                />
                <TextField
                  autoComplete="given-name"
                  name="vazido"
                  fullWidth
                  id="vazido"
                  label="Clanarina do:"
                  autoFocus
                  value={clan?.vazido}
                />
            </Grid>
        )
    }
}