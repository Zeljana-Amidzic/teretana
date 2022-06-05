import React, { useEffect, useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container , Paper, Button, Grid} from '@material-ui/core';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@mui/material";

import { API_KORISNIK } from '../../api_routes';
import Clan from './Korisnik/Clan';
import Users from './Users';
import { setAxiosInterceptors } from '../../services/auth-one';
import { getAllKorisnike } from '../../services/korisnik-service';
import { Label } from '@material-ui/icons';

const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
const PAGE_SIZE = 20;
const INITAL_PAGE = 1;
const sortBy = "idkorisnik";
const keyword = "";
const uloge = ['admin', 'clan', 'trener'];

export default class Korisnici extends Component {
  constructor(props){
    super(props);
    this.state = {
      korisnici: [],
    };
    this.child = React.createRef();
  }

  useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  /*handleClick=(e)=>{
    e.preventDefault()
    const korisnik={imeprezime, datumrodjenja, telefon, email, adresa, uloga, korisnickoime, lozinka}
    console.log(korisnik)
    fetch(API_KORISNIK,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(korisnik)

  }).then(()=>{
    console.log("Novi korisnik je dodat.")
  })}*/

  componentDidMount(){
    setAxiosInterceptors();
    this.loadKorisnike();
  }

  loadKorisnike = () => {
    getAllKorisnike(INITAL_PAGE, PAGE_SIZE, sortBy, keyword).then((resp) => {
        this.setState({
            ...this.state,
            korisnici: resp.data,
        });
    })
    .catch((e) => console.log(e));
  };

  handleInsert = () => {
    console.log("insert");
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render = () => {
    let imeprezime;
    const {korisnici} = this.state;
    return (
      <>
      <Container>
      <Paper elevation={3} style={paperStyle}>
      <h1 style={{ fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}>Korisnici</h1>
      <Grid container spacing={2} style={{alignContent: 'center', justifyContent: 'center'}}>
              <Grid item xs={12}>
              <label>Ime i prezime:  </label>
              <Input
                  type="text"
                  name="imeprezime"
                  onChange={this.changeHandler}
                ></Input>
              </Grid>
              <Grid item xs={12}>
                <label>Datum rođenja:  </label>
              <Input
                  type="date"
                  name="datumrodjenja"
                  onChange={this.changeHandler}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Telefon:   </label>
                <Input
                  type="tel"
                  name="telefon"
                  onChange={this.changeHandler}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Email:   </label>
              <Input
                  type="email"
                  name="email"
                  onChange={this.changeHandler}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Adresa stanovanja:   </label>
              <Input
                  type="text"
                  name="adresa"
                  onChange={this.changeHandler}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Uloga:   </label>
              <Input
                  type="text" 
                  name="uloga"
                  placeholder='(admin, trener, clan)'
                  onChange={this.changeHandler}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Korisničko ime:   </label>
              <Input
                  type="text"
                  name="korisnickoime"
                  onChange={this.changeHandler}
                ></Input>
               </Grid>
               <Grid item xs={12}>
               <label>Lozinka:   </label>
                <Input
                  type="text"
                  name="lozinka"
                  onChange={this.changeHandler}
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
                      Dodaj korisnika
                    </Button>
                  </Grid>
              </Grid>
          </Grid>
      </Paper>
    </Container>
      <Container>
      <Paper elevation={3} style={paperStyle}>
      <h1 style={{ fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}>Korisnici</h1>
        {korisnici.map(korisnik=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={korisnik.idkorisnik}>
           <Users idkorisnik={korisnik?.idkorisnik}
            imeprezime={korisnik?.imeprezime}
            datumrodjenja={korisnik?.datumrodjenja}
            telefon={korisnik?.telefon}
            email={korisnik?.email}
            adresa={korisnik?.adresa}
            uloga={korisnik?.uloga}
            korisnickoime={korisnik?.korisnickoime}
            lozinka={korisnik?.lozinka}
            authorities={korisnik?.authorities}
            username={korisnik?.username}
            password={korisnik?.password}
            isaccountnonexpired={korisnik?.isaccountnonexpired}
            isaccountnonlocked={korisnik?.isaccountnonlocked}
            iscredentialsnonexpired={korisnik?.iscredentialsnonexpired}
            isenabled={korisnik?.isenabled}/>
          </Paper>
        ))
      }
      </Paper>
    </Container>
      </>
  )
}
}