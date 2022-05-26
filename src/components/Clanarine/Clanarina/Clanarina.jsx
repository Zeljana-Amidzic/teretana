import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './clanarina-style';

const Clanarina = ({clanarina}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} title={clanarina.naziv}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {clanarina.naziv}
                    </Typography>
                    <Typography variant="h6">
                        {clanarina.cena}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    {clanarina.opis}
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

export default Clanarina;