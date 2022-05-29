import React, { useState, useEffect, Component } from "react";
import { Button, Grid } from '@material-ui/core';
import Proizvod from "./Proizvod/Proizvod";

import proteinc from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/protein-c.png";
import proteinv from "C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/pics/protein-v.jpg";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
//import axios from "../../http-common"
import useAxiosPrivate from "../../services/useAxiosPrivate";
import service, { deleteProizvod, getAllProizvode } from 'C:/Users/Zeljana/Desktop/faks/ERP/TeretanaFE/teretana/src/services/proizvod-service.js';
import { API_PROIZVOD } from "../../api_routes";
import useRefreshToken from "../../services/useRefreshToken";
import { useNavigate, useLocation } from "react-router-dom";
import { setAxiosInterceptors } from "../../services/auth-one";

const PAGE_SIZE = 2;
const INITAL_PAGE = 1;
const sortBy = "idproizvod";
const keyword = "";

class Proizvodi extends Component{
    constructor(props){
        super(props);
        this.state = {
            proizvodi: [],
            ukupno: '',
        };
        this.child = React.createRef();
        this.child2 = React.createRef();
    }

    componentDidMount(){
        setAxiosInterceptors();
        this.loadProizvode();
    }

    /*loadProizvode = (page, PAGE_SIZE, sortBy, keyword) => {
        getAllProizvode(page, PAGE_SIZE, sortBy, keyword).then((resp) => {
            this.setState({
                ...this.state,
                proizvodi: resp.data,
            });
        })
        .catch((e) => console.log(e));
    };*/
    loadProizvode = () => {
        getAllProizvode().then((resp) => {
            this.setState({
                ...this.state,
                proizvodi: resp.data,
            });
        })
        .catch((e) => console.log(e));
    };

    handleEditProizvod = (proizvod) => {
        this.child.current.setState({
            edit: true,
            ...proizvod,
        });
    };

    handleDeleteProizvod = (id) => {
        deleteProizvod(id).then(this.refreshProizvode).catch((e) => console.log(e));
    };

    setUkupno = () => {
        getAllProizvode().then((resp) => {
            this.setState({
                ukupno: resp.data.length,
            });
        }).catch((e) => console.log(e));
    };

    refreshProizvode = () => {
        this.setUkupno();
        this.child2.current.setState({
            ...this.child2.current.state,
            isDataChanged: true,
        });
    }

    render = () => {
        const {proizvodi} = this.state;
        console.log(proizvodi);
        return(
            <main className="">
            <div className=""/>
            {proizvodi?.length 
            ? (
            <Grid container justifyContent="center" spacing={4}>
                {proizvodi.map((proizvod) => (
                    <Grid item key={proizvod.idproizvod} xs={12} sm={6} lg={3}>
                        <Proizvod idproizvod={proizvod?.idproizvod}
                        naziv={proizvod?.naziv}
                        cena={proizvod?.cena}
                        netotezina={proizvod?.netotezina}
                        vrstaproizvoda={proizvod?.vrstaproizvoda}
                        stanje={proizvod.stanje}/>
                    </Grid>
                ))}
            </Grid>) : <p>Nema proizvoda za prikazivanje</p>
            }
        </main>
        )
    }
}

export default Proizvodi;