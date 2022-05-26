import React from "react";
import { Grid } from '@material-ui/core';

import Vezba from './Vezba/Vezba';

import proteinc from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/protein-c.png";
import proteinv from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/protein-v.jpg";

import useStyles from './vezbe-style';

const vezbe = [
    {idvezba: 1, naziv: "Zgib", slika: proteinc},
    {idvezba: 2, naziv: "Sklek", slika: proteinv}
]

const Vezbe = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justifyContent="center" spacing={4}>
                {vezbe.map((vezba) => (
                    <Grid item key={vezba.idproizvod} xs={12} sm={6} lg={3}>
                        <Vezba vezba={vezba}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Vezbe;