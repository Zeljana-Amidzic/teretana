import React from "react";
import { Grid } from '@material-ui/core';

import Plan from "./Plan/Plan";

import useStyles from './planovi-style';

const planovi = [
    {idplan: 1, naziv: "Trening snage", grupamisica:"Celo telo", brojvezbi: 12, trajanje: "95 minuta"},
    {idplan: 1, naziv: "Trening za gluteus", grupamisica:"Gluteus/noge", brojvezbi: 8, trajanje: "90 minuta"}
]

const Planovi = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justifyContent="center" spacing={4}>
                {planovi.map((plan) => (
                    <Grid item key={plan.idplan} xs={12} sm={6} lg={3}>
                        <Plan plan={plan}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Planovi;