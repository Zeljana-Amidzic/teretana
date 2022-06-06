import React, { Component } from "react";
import Paper from '@mui/material/Paper';
import { Container , Button, Grid} from '@material-ui/core';
import { Input } from "@mui/material";
import { insertProizvod } from "../../../services/proizvod-service";
import { insertKorisnik } from "../../../services/korisnik-service";

const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}

export default class AddKorisnik extends Component{
    constructor(props){
        super(props);
        this.state = {
            idkorisnik: 0,
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
        this.changeHandlerImeprezime = this.changeHandlerImeprezime.bind(this);
        this.changeHandlerDatumrodjenja = this.changeHandlerDatumrodjenja.bind(this);
        this.changeHandlerTelefon = this.changeHandlerTelefon.bind(this);
        this.changeHandlerEmail = this.changeHandlerEmail.bind(this);
        this.changeHandlerAdresa = this.changeHandlerAdresa.bind(this);
        this.changeHandlerUloga = this.changeHandlerUloga.bind(this);
        this.changeHandlerKorisnickoime = this.changeHandlerKorisnickoime.bind(this);
        this.changeHandlerLozinka = this.changeHandlerLozinka.bind(this);
        this.handleInsert = this.handleInsert.bind(this);
    }

    changeHandlerImeprezime = (e) => {
        this.setState({ imeprezime: e.target.value })
    }

    changeHandlerDatumrodjenja = (e) => {
        this.setState({ datumrodjenja: e.target.value })
    }

    changeHandlerTelefon = (e) => {
        this.setState({ telefon: e.target.value })
    }

    changeHandlerEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    changeHandlerAdresa = (e) => {
        this.setState({ adresa: e.target.value })
    }

    changeHandlerUloga = (e) => {
        this.setState({ uloga: e.target.value })
    }

    changeHandlerKorisnickoime = (e) => {
        this.setState({ korisnickoime: e.target.value })
    }

    changeHandlerLozinka = (e) => {
        this.setState({ lozinka: e.target.value })
    }

    handleInsert = (e) => {
        e.preventDefault();
        let korisnik = {idkorisnik: 100, imeprezime: this.state.imeprezime, datumrodjenja: this.state.datumrodjenja, telefon: this.state.telefon,
        email: this.state.email, adresa: this.state.adresa, uloga: this.state.uloga, korisnickoime: this.state.korisnickoime, lozinka: this.state.lozinka,
        authorities: this.state.authorities, username: this.state.username, password: this.state.password, isaccountnonexpired: true,
        isaccountnonlocked: true, iscredentialsnonexpired: true, isenabled: false};

        insertKorisnik(korisnik);
    }

    render = () => {
        return(
            <Container>
      <Paper elevation={3} style={paperStyle}>
      <h1 style={{ fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}>Korisnici</h1>
      <Grid container spacing={2} style={{alignContent: 'center', justifyContent: 'center'}}>
              <Grid item xs={12}>
              <label>Ime i prezime:  </label>
              <Input
                  type="text"
                  name="imeprezime"
                  onChange={this.changeHandlerImeprezime}
                  value={this.state.imeprezime}
                ></Input>
              </Grid>
              <Grid item xs={12}>
                <label>Datum rođenja:  </label>
              <Input
                  type="date"
                  name="datumrodjenja"
                  onChange={this.changeHandlerDatumrodjenja}
                  value={this.state.datumrodjenja}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Telefon:   </label>
                <Input
                  type="tel"
                  name="telefon"
                  onChange={this.changeHandlerTelefon}
                  value={this.state.telefon}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Email:   </label>
              <Input
                  type="email"
                  name="email"
                  onChange={this.changeHandlerEmail}
                  value={this.state.email}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Adresa stanovanja:   </label>
              <Input
                  type="text"
                  name="adresa"
                  onChange={this.changeHandlerAdresa}
                  value={this.state.adresa}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Uloga:   </label>
              <Input
                  type="text" 
                  name="uloga"
                  placeholder='(admin, trener, clan)'
                  onChange={this.changeHandlerUloga}
                  value={this.state.uloga}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Korisničko ime:   </label>
              <Input
                  type="text"
                  name="korisnickoime"
                  onChange={this.changeHandlerKorisnickoime}
                  value={this.state.korisnickoime}
                ></Input>
               </Grid>
               <Grid item xs={12}>
               <label>Lozinka:   </label>
                <Input
                  type="text"
                  name="lozinka"
                  onChange={this.changeHandlerLozinka}
                  value={this.state.lozinka}
                ></Input>
               </Grid>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Button
                    type="submit"
                    color="secondary"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={this.handleInsert}
                    >
                      Dodaj
                    </Button>
                  </Grid>
              </Grid>
          </Grid>
      </Paper>
    </Container>
        )
    }
}