import React, { useState, useEffect } from "react";
import { Button, Grid } from '@material-ui/core';

import Proizvod from "./Proizvod/Proizvod";

import proteinc from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/protein-c.png";
import proteinv from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/protein-v.jpg";

import useStyles from './styles';
//import axios from "../../http-common"
import useAxiosPrivate from "../../services/useAxiosPrivate";
import service from 'C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/services/proizvod-service.js'
import useRefreshToken from "../../services/useRefreshToken";

const Proizvodi = () => {
    const axiosPrivate = useAxiosPrivate();

    const classes = useStyles();

    const [proizvodi, setProizvode] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getAll = async () => {
            try {
                const response = await axiosPrivate.get('proizvod', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setProizvode(response.data);
            } catch (err) {
                console.log(err);
            }

            getAll();

            return () => {
                isMounted = false;
                controller.abort();
            }
        }
    }, []);

    /*useEffect(() => {
        axios.get(service.getAll()).then(res => {
            console.log()
            setProizvode(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])*/

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            {proizvodi?.length 
            ? (
            <Grid container justifyContent="center" spacing={4}>
                {proizvodi.map((proizvod) => (
                    <Grid item key={proizvod.idproizvod} xs={12} sm={6} lg={3}>
                        <Proizvod proizvod={proizvod}/>
                    </Grid>
                ))}
            </Grid>) : <p>Nema proizvoda za prikazivanje</p>
            }
        </main>
    )
}

export default Proizvodi;