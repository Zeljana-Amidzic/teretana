import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './plan-style';

const Plan = ({plan}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} title={plan.naziv}/>
            <CardContent>
                <div className={classes.cardContent}>
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
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Dodaj u korpu">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Plan;