import React, { Component } from "react";
import Paper from '@mui/material/Paper';
import { Container , Button, Grid} from '@material-ui/core';
import { Input } from "@mui/material";
import { insertVezba } from "../../../services/vezba-service";

const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}

export default class AddVezba extends Component {
    constructor(props) {
        super(props);
        this.state = {
          idvezba: 100,
          naziv: props.naziv,
          tezina: props.tezina,
          grupamisica: props.grupamisica
        };
        this.changeNaziv = this.changeNaziv.bind(this);
        this.changeTezina = this.changeTezina.bind(this);
        this.changeGrupamisica = this.changeGrupamisica.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    changeNaziv = (e) => {
        this.setState({ naziv: e.target.value })
    }
    changeTezina = (e) => {
        this.setState({ tezina: e.target.value })
    }
    changeGrupamisica = (e) => {
        this.setState({ grupamisica: e.target.value })
    }

    handleAdd = (e) => {
        e.preventDefault();
        let vezba = {idproizvod: 100, naziv: this.state.naziv, tezina: this.state.tezina, grupamisica: this.state.grupamisica};

        insertVezba(vezba);
        this.setState({ naziv: " " });
        this.setState({ tezina: " " });
        this.setState({ grupamisica: " " });
    }

    render = () => {
        return(
            <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}>Proizvod</h1>
                <Grid container spacing={2} style={{alignContent: 'center', justifyContent: 'center'}}>
                    <Grid item xs={12}>
                    <label>Naziv:  </label>
                    <Input
                    type="text"
                    name="naziv"
                    onChange={this.changeNaziv}
                    style={{width: "370px"}}
                    value={this.state.naziv}
                    ></Input>
                </Grid>
              <Grid item xs={12}>
              <label>Težina:   </label>
                <Input
                  type="text"
                  name="tezina"
                  onChange={this.changeTezina}
                  style={{width: "330px"}}
                  value={this.state.tezina}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Grupa mišića:   </label>
              <Input
                  type="text"
                  name="grupamisica"
                  onChange={this.changeGrupamisica}
                  style={{width: "300px"}}
                  value={this.state.grupamisica}
                ></Input>
              </Grid>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                  <Button type="submit"
                        color="primary"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 30, mb: 25 }}
                        style={{ padding: 12, elevation: 3, margin: 8, display: 'flex', flexDirection: 'column', width: '550px' }}
                        onClick={this.handleAdd}
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