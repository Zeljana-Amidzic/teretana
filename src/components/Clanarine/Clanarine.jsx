import React from "react";
import { Grid } from '@material-ui/core';

import Clanarina from "./Clanarina/Clanarina";

import useStyles from './clanarine-style';

const clanarine = [
    {idclanarina: 1, cena: 4000, naziv: "VIP", opis: "VIP clanarina"},
    {idclanarina: 2, cena: 3000, naziv: "Regularana", opis: "Regularna, muska clanarina"},
    {idclanarina: 3, cena: 2500, naziv: "Regularana", opis: "Regularna, zenska clanarina"}
]

const Clanarine = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justifyContent="center" spacing={4}>
                {clanarine.map((clanarina) => (
                    <Grid item key={clanarina.idproizvod} xs={12} sm={6} lg={3}>
                        <Clanarina clanarina={clanarina}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Clanarine;