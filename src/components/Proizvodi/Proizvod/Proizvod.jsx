import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Proizvod = ({proizvod}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={proizvod.slika} title={proizvod.naziv}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {proizvod.naziv}
                    </Typography>
                    <Typography variant="h6">
                        {proizvod.cena}
                    </Typography>
                    <Typography variant="h6">
                        {proizvod.netotezina}
                    </Typography>
                    <Typography variant="h6">
                        {proizvod.stanje}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    {proizvod.vrstaproizvoda}
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

export default Proizvod