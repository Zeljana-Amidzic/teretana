import React, { Component } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';
import Stripe from "react-stripe-checkout";
import { stripePayment, stripeKey } from "../../Stripe/StripeHelp";
import proteinc from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/protein-c.png";

import useStyles from './styles';
import Axios from "axios";
import { insertKupovina } from "../../../services/kupovina-service";

class Proizvod extends Component {

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
    }

    handleToken = (token) => {
        let kupovina = {idkupovina: 100, datum: "2022-11-11", iznos: this.state.cena * 1, placeno: true, proizvod: this.state.idproizvod};
        Axios.post("http://localhost:8083/teretana/payment/charge", "", {
            headers: {
                token: token.id,
                amount: this.state.cena,
            },
        }).then(() => {
            alert("Uspesna kupovina");
        }).catch((err) => {
            console.log(err);
        });
        insertKupovina(kupovina);
    }

    render = () => {
        const proizvod = this.state;

        return (

            <Card className={useStyles.root}>
                <CardMedia className={useStyles.media} image={proteinc} title={proizvod?.naziv}/>
                <CardContent>
                    <div className={useStyles.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {proizvod?.naziv}
                        </Typography>
                        <Typography variant="h6">
                            {proizvod.cena} rsd
                        </Typography>
                        <Typography variant="h6">
                            Neto tezina: {proizvod.netotezina}
                        </Typography>
                        <Typography variant="h6">
                            Dostupno: {proizvod.stanje}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary">
                        {proizvod.vrstaproizvoda}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={useStyles.cardActions}>
                    <Stripe stripeKey={stripeKey} token={this.handleToken}
                    billingAddress shippingAddress amount={proizvod.cena}/>
                </CardActions>
            </Card>
        )
    }
}

export default Proizvod