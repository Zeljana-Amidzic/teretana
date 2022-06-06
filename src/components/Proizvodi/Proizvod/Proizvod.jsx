import React, { Component } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';

import proteinc from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/protein-c.png";

import useStyles from './styles';

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

    handleKupovinu = () => {
        console.log("kupovina");
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
                    <IconButton aria-label="Dodaj u korpu" onClick={this.handleKupovinu}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}

export default Proizvod