import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core';

import Proizvod from "./Proizvod/Proizvod";

import proteinc from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/protein-c.png";
import proteinv from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/protein-v.jpg";

import useStyles from './styles';
import axios from "axios";
import service from 'C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/services/proizvod-service.js'

function Proizvodi() {

    const classes = useStyles();

    const [proizvodi, setProizvode] = useState([]);

    useEffect(() => {
        axios.get(service.getAll()).then(res => {
            console.log()
            setProizvode(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justifyContent="center" spacing={4}>
                {proizvodi.map((proizvod) => (
                    <Grid item key={proizvod.idproizvod} xs={12} sm={6} lg={3}>
                        <Proizvod proizvod={proizvod}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Proizvodi;