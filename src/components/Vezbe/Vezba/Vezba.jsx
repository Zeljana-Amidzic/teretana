import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import AddBoxIcon  from '@material-ui/icons/AddBox';

import useStyles from './vezba-style';

const Vezba = ({vezba}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={vezba.slika} title={vezba.naziv}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {vezba.naziv}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Dodaj na plan">
                    <AddBoxIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Vezba;