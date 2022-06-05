import React, { Component } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart, PanToolSharp } from '@material-ui/icons';
import { Button, Grid } from '@material-ui/core';
import { Input } from "@mui/material";

import useStyles from './plan-style';

class Plan extends Component {
    constructor(props){
        super(props);
        this.state = {
            idplan: props.idplan,
            naziv: props.naziv,
            grupamisica: props.grupamisica,
            brojvezbi: props.brojvezbi,
            trajanje: props.trajanje
        };
    }

    render = () => {
        const {plan} = this.state;
        return (
            <Card className="">
                <CardMedia className="" title={plan.naziv}/>
                <CardContent>
                    <div className="">
                        <Typography variant="h5" gutterBottom>
                            {plan.naziv}
                        </Typography>
                    </div>
                    <Typography variant="h6">
                        Broj vezbi: {plan.brojvezbi}
                    </Typography>
                    <Typography variant="h6">
                        Trajanje treninga: {plan.trajanje}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Grupa misica: {plan.grupamisica}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className="">
                    <IconButton aria-label="Dodaj u korpu">
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}

export default Plan;