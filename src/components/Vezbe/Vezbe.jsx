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
        this.child.current.setState({
            edit: true,
            ...vezba,
        });
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
        const {vezbe} = this.state;
        const totalCount = vezbe.length;
        
    // Get current posts
        const pageVisited = INITAL_PAGE * PAGE_SIZE;
        const currentVezbe = vezbe.slice(pageVisited, pageVisited + PAGE_SIZE);
        const pageCount = Math.ceil(totalCount / PAGE_SIZE);

        return(
            
            <div className="container" style={{display: 'flex', flexFlow: 'column', alignItems: 'center', maxWidth: '1120px', width: '90%', margin: '0 auto'}}>
            <TableContainer component={Paper}>
                    <Button type="submit"
                        color="primary"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 30, mb: 25 }}
                        style={{ padding: 12, elevation: 3, margin: 8, display: 'flex', flexDirection: 'column', width: '250px' }}
                        >
                            Dodaj vežbu
                    </Button>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead style={{backgroundColor: '#b8babc', margin: 5, padding: 10}}>
                        <TableRow>
                            <TableCell style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white' }}>Naziv vežbe</TableCell>
                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white'}}>Težina izvođenja</TableCell>
                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white'}}>Grupa mišića</TableCell>
                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}></TableCell>
                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                {currentVezbe.map((vezba) => (
                    <TableRow
                        key={vezba?.naziv}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {vezba?.naziv}
                        </TableCell>
                        <TableCell align="center">{vezba?.tezina}</TableCell>
                        <TableCell align="center">{vezba?.grupamisica}</TableCell>
                        <TableCell align="right">
                            <Button type="submit"
                                color="default"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}>
                                Izmeni
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button type="submit"
                                color="secondary"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}>
                            Obriši
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
                </Table>
            </TableContainer>
            <br/>
            <ReactPaginate
            previousLabel={"Prethodna"}
            nextLabel={"Sledeća"}
            pageCount={pageCount}
            onPageChange={this.changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
        </div>)
    }
}

export default Vezbe;