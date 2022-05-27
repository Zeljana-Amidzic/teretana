import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { API_KORISNIK } from '../../api_routes';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Korisnici() {
    const uloge = ['admin', 'clan', 'trener'];
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[imeprezime,setImeprezime]=useState('')
    const[datumrodjenja,setDatumrodjenja]=useState(new Date())
    const[telefon,setTelefon]=useState('')
    const[email,setEmail]=useState('')
    const[adresa,setAdresa]=useState('')
    const[uloga,setUloga]=useState('')
    const[korisnickoime,setKorisnickoime]=useState('')
    const[lozinka,setLozinka]=useState('')
    const[korisnici,setKorisnike]=useState([])
    const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const korisnik={imeprezime, datumrodjenja, telefon, email, adresa, uloga, korisnickoime, lozinka}
    console.log(korisnik)
    fetch(API_KORISNIK,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(korisnik)

  }).then(()=>{
    console.log("Novi korisnik je dodat.")
  })
}

useEffect(()=>{
  fetch(API_KORISNIK)
  .then(res=>res.json())
  .then((result)=>{
    setKorisnike(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1>Dodaj korisnika</h1>

            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Ime i prezime" variant="outlined" fullWidth 
            value={imeprezime}
            onChange={(e)=>setImeprezime(e.target.value)}
            />
            <DatePicker label="Datum rodjenja" selected={datumrodjenja} onChange={datumrodjenja=>setDatumrodjenja(datumrodjenja)}/>
            <TextField id="outlined-basic" label="Telefon" variant="outlined" fullWidth
            value={telefon}
            onChange={(e)=>setTelefon(e.target.value)}
            />
            <TextField id="outlined-basic" label="Email adresa" variant="outlined" fullWidth
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField id="outlined-basic" label="Adresa" variant="outlined" fullWidth
            value={adresa}
            onChange={(e)=>setAdresa(e.target.value)}
            />
            <TextField id="outlined-basic" label="Uloga (admin, clan, trener)" variant="outlined" fullWidth
            value={uloga}
            onChange={(e)=>setUloga(e.target.value)}
            />
            <TextField id="outlined-basic" label="Korisnicko ime" variant="outlined" fullWidth
            value={korisnickoime}
            onChange={(e)=>setKorisnickoime(e.target.value)}
            />
            <TextField id="outlined-basic" label="Lozinka" variant="outlined" fullWidth
            value={lozinka}
            onChange={(e)=>setLozinka(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={handleClick}>
                Potvrdi
            </Button>
        </form>
    </Paper>

    <Paper elevation={3} style={paperStyle}>
    <h1>Korisnici</h1>
      {korisnici.map(korisnik=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={korisnik.idkorisnik}>
         idkorisnik:{korisnik.idkorisnik}<br/>
         imeprezime:{korisnik.imeprezime}<br/>
         datumrodjenja:{korisnik.datumrodjenja}<br/>
         telefon:{korisnik.telefon}<br/>
         email:{korisnik.email}<br/>
         adresa:{korisnik.adresa}<br/>
         uloga:{korisnik.uloga}<br/>
         korisnickoime:{korisnik.korisnickoime}

        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}