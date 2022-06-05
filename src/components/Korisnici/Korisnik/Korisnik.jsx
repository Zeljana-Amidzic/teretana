import { Container, makeStyles, Paper, responsiveFontSizes, TextField } from "@material-ui/core";
import React, { Component, useState } from "react";
import { getAccountFromToken } from "../../../services/auth-one";
import authService from "../../../services/auth-service";
import { getAllKorisnike, getKorisnik, updateKorisnik } from "../../../services/korisnik-service";
import { setAxiosInterceptors } from "../../../services/auth-one";
import { Button, Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import useStyles from './korisnik-style';
import { Input } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Clan from "./Clan";
import Zaposlen from "./Zaposlen";
import { Link } from "react-router-dom";
import { getByIdZaposleni } from '../../../services/zaposleni-service';
import { ContactSupport } from "@material-ui/icons";

const PAGE_SIZE = 2;
const INITAL_PAGE = 1;
const sortBy = "idkorisnik";
//const currentUser = getAccountFromToken();

const keyword = '';
export default  class Korisnik extends Component {
    constructor(props){
        super(props);
        this.state = {
            korisnik: [],
        };
        this.child = React.createRef();
    }

    componentDidMount(){
        const currentUser = getAccountFromToken();

        this.showUsersProfile(currentUser);
        setAxiosInterceptors();
    }

    /*handleUpdate = (korisnik) => (e) => {
        this.child.current.setState({
            edit: true,
            ...korisnik,
        });
    }*/
    handleUpdate = (korisnik, idkorisnik) => {
      console.log(idkorisnik);
      updateKorisnik(korisnik,idkorisnik).then((resp) => {
        alert("Uspesna izmena podataka");
      });
    }

    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }

    logout = () => {
      this.setState({korisnik: []}, () => {
        //localStorage.removeItem("user");
        localStorage.clear();
      });
    }

    showUsersProfile(currentUser){

        console.log(currentUser);
        getAllKorisnike(INITAL_PAGE, PAGE_SIZE, sortBy, currentUser).then((resp) => {
            this.setState({
                ...this.state,
                korisnik: resp.data,
            });
        }).catch((e) => console.log(e));
    }

    render = () => {
        const {korisnik} = this.state;
        console.log(korisnik);
        return (
            <Container component="main" maxWidth="xs">
                {korisnik?.length 
            ? (
            <Grid container justifyContent="center" spacing={4}>
                {korisnik.map((k) => (
                    <Box
                    sx={{
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" gutterBottom>
                                Profilna stranica: <strong>{k?.imeprezime} ({k?.uloga})</strong>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box component="form" noValidate sx={{ mt: 3 }}></Box>
                    <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="imeprezime"
                  required
                  fullWidth
                  id="imeprezime"
                  label="Ime i prezime"
                  autoFocus
                  onChange={this.changeHandler}
                  value={k?.imeprezime}
                />
              </Grid>
              <Grid item xs={12}>
              <Input
                  placeholder={k?.adresa}
                  type="text"
                  name="adresa"
                  onChange={this.changeHandler}
                ></Input>
              </Grid>
              <Grid item xs={12}>
                <Input
                  placeholder={k?.email}
                  type="text"
                  name="email"
                  onChange={this.changeHandler}
                ></Input>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="datumrodjenja"
                  fullWidth
                  id="datumrodjenja"
                  label="Datum rođenja"
                  autoFocus
                  onChange={this.changeHandler}
                  value={k?.datumrodjenja}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="telefon"
                  fullWidth
                  id="telefon"
                  label="Kontakt telefon"
                  autoFocus
                  onChange={this.changeHandler}
                  value={k?.telefon}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="korisnickoime"
                  required
                  fullWidth
                  id="korisnickoime"
                  label="Korisničko ime"
                  autoFocus
                  onChange={this.changeHandler}
                  value={k?.korisnickoime}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="uloga"
                  required
                  fullWidth
                  id="uloga"
                  label="Uloga"
                  autoFocus
                  onChange={this.changeHandler}
                  value={k?.uloga}
                />
              </Grid>
              {k?.uloga === 'clan' &&
                <Clan clan={k}/>
              }
              {k?.uloga === 'admin' &&
                <Zaposlen idkorisnik={k?.idkorisnik}/>
              }
              {k?.uloga === 'trener' &&
                <p>Trener</p>
              }
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => this.handleUpdate(k, k?.idkorisnik)}
                    >
                        Potvrdi
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                    type="submit"
                    color="secondary"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={this.logout}
                    >
                      Odjavi se
                    </Button>
                  </Grid>
              </Grid>
              </Grid>
              </Box>))}
            </Grid>) :
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'
                }}>
                <h1>Niste prijavljeni...</h1>
                <Link to="/prijava" className="btn btn-primary">
                Prijavi se
                </Link>
                </div>
            }
            </Container>
        );
    }
};