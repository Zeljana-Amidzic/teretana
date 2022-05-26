import React from "react";
import { Grid } from '@material-ui/core';

import Proizvod from "./Proizvod/Proizvod";

import proteinc from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/protein-c.png";
import proteinv from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/protein-v.jpg";

import useStyles from './styles';

const proizvodi = [
    {idproizvod: 1, naziv: "Protein cokolada", cena: 198.89, netotezina:"100 gr", vrstaproizvoda:"Proteini", stanje: 2, slika: proteinc},
    {idproizvod: 2, naziv: "Protein vanila", cena: 148.89, netotezina:"100 gr", vrstaproizvoda:"Proteini", stanje: 20, slika: proteinv}
]

const Proizvodi = () => {
    const classes = useStyles();

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