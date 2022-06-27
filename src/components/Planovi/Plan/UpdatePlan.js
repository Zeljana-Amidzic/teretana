import React, { Component } from "react";
import Paper from '@mui/material/Paper';
import { Container , Button, Grid, ThemeProvider} from '@material-ui/core';
import { Input } from "@mui/material";
import { setAxiosInterceptors } from "../../../services/auth-one";
import { getPlanById, updatePlan } from "../../../services/plan-service";

const paperStyle={padding:'50px 20px', width:500, margin:"20px auto"};
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");

export default class UpdatePlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
          idplan: id,
          naziv: props.naziv,
          grupamisica: props.grupamisica,
          brojvezbi: props.brojvezbi,
          trajanje: props.trajanje
        };
        this.changeNaziv = this.changeNaziv.bind(this);
        this.changeGrupamisica = this.changeGrupamisica.bind(this);
        this.changeBrojvezbi = this.changeBrojvezbi.bind(this);
        this.changeTrajanje = this.changeTrajanje.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount(){
      setAxiosInterceptors();
        getPlanById(this.state.idplan).then(resp => {
            let plan = resp.data;
            this.setState({naziv: plan.naziv, grupamisica: plan.grupamisica, brojvezbi: plan.brojvezbi,
            trajanje: plan.trajanje});
        });
    }

    changeNaziv = (e) => {
        this.setState({ naziv: e.target.value })
    }
    changeGrupamisica = (e) => {
        this.setState({ cena: e.target.value })
    }
    changeBrojvezbi = (e) => {
        this.setState({ netotezina: e.target.value })
    }
    changeTrajanje = (e) => {
        this.setState({ vrstaproizvoda: e.target.value })
    }

    handleUpdate = (e) => {
        e.preventDefault();
        let plan = {idplan: this.state.idplan, naziv: this.state.naziv, grupamisica: this.state.grupamisica, brojvezbi: this.state.brojvezbi, trajanje: this.state.trajanje};

        updatePlan(plan).then(res => {
            console.log(JSON.stringify(plan));
        });
    }

    render = () => {
        return(
            <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}>Izmeni proizvod</h1>
                <Grid container spacing={2}>
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
                <label>Grupa misica:  </label>
              <Input
                  type="text"
                  name="grupamisica"
                  onChange={this.changeGrupamisica}
                  style={{width: "370px"}}
                  value={this.state.grupamisica}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Broj vezbi:   </label>
                <Input
                  type="text"
                  name="brojvezbi"
                  onChange={this.changeBrojvezbi}
                  style={{width: "330px"}}
                  value={this.state.brojvezbi}
                ></Input>
              </Grid>
              <Grid item xs={12}>
              <label>Trajanje:   </label>
              <Input
                  type="text"
                  name="trajanje"
                  onChange={this.changeTrajanje}
                  style={{width: "300px"}}
                  value={this.state.trajanje}
                ></Input>
              </Grid>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                  <Button type="submit"
                        color="primary"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 30, mb: 25 }}
                        style={{ padding: 12, elevation: 3, margin: 8, display: 'flex', flexDirection: 'column', width: '420px', alignContent: 'center' }}
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