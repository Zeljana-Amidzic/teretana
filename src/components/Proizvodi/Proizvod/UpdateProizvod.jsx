import React, { Component } from "react";
import Paper from '@mui/material/Paper';
import { Container , Button, Grid, ThemeProvider} from '@material-ui/core';
import { Input } from "@mui/material";
import { getProizvodById, updateProizvod } from "../../../services/proizvod-service";
import { setAxiosInterceptors } from "../../../services/auth-one";

const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}

export default class UpdateProizvod extends Component {
    constructor(props) {
        super(props);
        this.state = {
          idproizvod: props.idproizvod,
          naziv: props.naziv,
          cena: props.cena,
          netotezina: props.netotezina,
          vrstaproizvoda: props.vrstaproizvoda,
          stanje: props.stanje
        };
        this.changeNaziv = this.changeNaziv.bind(this);
        this.changeCena = this.changeCena.bind(this);
        this.changeNetotezina = this.changeNetotezina.bind(this);
        this.changeVrstaproizvoda = this.changeVrstaproizvoda.bind(this);
        this.changeStanje = this.changeStanje.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount(){
      setAxiosInterceptors();
        getProizvodById(this.state.idproizvod).then(resp => {
            let proiz = resp.data;
            this.setState({naziv: proiz.naziv, cena: proiz.cena, netotezina: proiz.netotezina,
            vrstaproizvoda: proiz.vrstaproizvoda, stanje: proiz.stanje});
        });
    }

    changeNaziv = (e) => {
        this.setState({ naziv: e.target.value })
    }
    changeCena = (e) => {
        this.setState({ cena: e.target.value })
    }
    changeNetotezina = (e) => {
        this.setState({ netotezina: e.target.value })
    }
    changeVrstaproizvoda = (e) => {
        this.setState({ vrstaproizvoda: e.target.value })
    }
    changeStanje = (e) => {
        this.setState({ stanje: e.target.value })
    }

    handleUpdate = (e) => {
        e.preventDefault();
        let proizvod = {idproizvod: this.state.idproizvod, naziv: this.state.naziv, cena: this.state.cena, netotezina: this.state.netotezina, vrstaproizvoda: this.state.vrstaproizvoda, stanje: this.state.stanje};

        updateProizvod(proizvod, proizvod.idproizvod).then(res => {
            console.log(JSON.stringify(proizvod));
        });
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
                <label>Cena:  </label>
              <Input
                  type="text"
                  name="cena"
                  onChange={this.changeCena}
                  style={{width: "370px"}}
                  value={this.state.cena}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Neto težina:   </label>
                <Input
                  type="text"
                  name="netotezina"
                  onChange={this.changeNetotezina}
                  style={{width: "330px"}}
                  value={this.state.netotezina}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Vrsta proizvoda:   </label>
              <Input
                  type="text"
                  name="vrstaproizvoda"
                  onChange={this.changeVrstaproizvoda}
                  style={{width: "300px"}}
                  value={this.state.vrstaproizvoda}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Na stanju:   </label>
              <Input
                  type="text"
                  name="stanje"
                  onChange={this.changeStanje}
                  style={{width: "345px"}}
                  value={this.state.stanje}
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
                        onClick={this.handleUpdate}
                        >
                           Potvrdi
                    </Button>
                  </Grid>
                </Grid>
                </Grid>
            </Paper>
            </Container>
        )
    }
}