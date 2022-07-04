import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import './style.css';
import { setAxiosInterceptors } from "../../services/auth-one";
import { deleteVezba, getAllVezbe } from "../../services/vezba-service";
import { Button } from "@material-ui/core";
import { Pagination } from '../Pagination.js';
import { useStepContext } from "@mui/material";
import Vezba from "./Vezba/Vezba";
import ReactPaginate from "react-paginate";
import AddVezba from "./Vezba/AddVezba";
import Tabela from "../Tabela";

const totalPages = 10;
const keywords = "";
const sortBy = "idvezba";
const PAGE_SIZE = 2;
const INITAL_PAGE = 1;

class Vezbe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vezbe: [],
            ukupno: '',
            page: INITAL_PAGE,
            sortBy: "idvezba",
            keyword: "",
        };
        this.child = React.createRef();
        this.child2 = React.createRef();
        this.child3 = React.createRef();
    }

    componentDidMount(){
        setAxiosInterceptors();
        //this.loadVezbe(INITAL_PAGE, PAGE_SIZE, sortBy, keywords);
        this.loadVezbe();
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
    /*loadVezbe = (page, size, sort, keyword) => {
        getAllVezbe(page, size, sort, keyword).then((resp) => {
            this.setState({
                ...this.state,
                vezbe: resp.data,
            });
        })
        .catch((e) => console.log(e));
    };*/

    loadVezbe = () => {
        getAllVezbe().then((resp) => {
            this.setState({
                ...this.state,
                vezbe: resp.data,
            });
        })
        .catch((e) => console.log(e));
    };

    handleEditVezbe = (vezba) => {
        /*this.child.current.setState({
            edit: true,
            ...vezba,
        });*/
        console.log("edit vezba " + vezba.naziv);
    };

    handleDeleteVezba = (id) => {
        deleteVezba(id).then(this.refreshVezba).catch((e) => console.log(e));
    };

    setUkupno = () => {
        getAllVezbe().then((resp) => {
            this.setState({
                ukupno: resp.data.length,
            });
        }).catch((e) => console.log(e));
    };

    refreshVezbe = () => {
        this.setUkupno();
        this.child2.current.setState({
            ...this.child2.current.state,
            isDataChanged: true,
        });
    }

    setCurrentPage(num){
        this.currentPage = num; 
    }

    /*changePage = (selected) => {
        this.setState({
            ...this.state,
            INITAL_PAGE: selected,
        });
    };*/

    changePage = ({ selected }) => {
        this.setState({
            ...this.state,
            page: selected,
        });
    };

    render = () => {

        return(
            <>
            <AddVezba />
            <Tabela
                ref={this.child2}
                data={this.state.vezbe.map(vezba => [vezba.idvezba, vezba.naziv, vezba.tezina, vezba.grupamisica,
                <button type="submit" className="btn btn-info save-btn" onClick={this.handleEditVezbe(vezba)}>
                    Izmeni
                </button>,
                <button type="button" className="btn btn-danger save-btn" onClick={this.handleDeleteVezba(vezba.idvezba)}>
                    Obriši
                </button>])}
                load={this.loadVezbe}
                title={'Vežbe'}
                headerTitles={['ID', 'Naziv vežbe', 'Težina izvođenja', 'Grupa mišića']}
                headerTitleProperties={['idvezba', 'naziv', 'tezina', 'grupamisica']}
                totalCount={this.state.ukupno}/>
            </>
        )
    }
}

export default Vezbe;