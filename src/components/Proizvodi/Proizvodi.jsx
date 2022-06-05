import React, { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { setAxiosInterceptors } from "../../services/auth-one";
import { Button } from "@material-ui/core";
import { Pagination } from '../Pagination.js';
import { useStepContext } from "@mui/material";
import ReactPaginate from "react-paginate";
import { deleteProizvod, getAllProizvode } from "../../services/proizvod-service";

const totalPages = 10;
const keywords = "";
const sortBy = "idvezba";
const PAGE_SIZE = 2;
const INITAL_PAGE = 1;
export default class Proizvodi extends Component{
    constructor(props){
        super(props);
        this.state = {
            proizvodi: [],
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
    /*loadVezbe = (page, size, sort, keyword) => {
        getAllVezbe(page, size, sort, keyword).then((resp) => {
            this.setState({
                ...this.state,
                vezbe: resp.data,
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
        deleteProizvod(id).then(this.refreshVezba).catch((e) => console.log(e));
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
        const {proizvodi} = this.state;
        const totalCount = proizvodi.length;
        
    // Get current posts
        const pageVisited = INITAL_PAGE * PAGE_SIZE;
        const currentProizvodi = proizvodi.slice(pageVisited, pageVisited + PAGE_SIZE);
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
                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white'}}>Cena</TableCell>
                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white'}}>Neto težina</TableCell>
                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white' }}>Vrsta</TableCell>
                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white' }}>Na stanju</TableCell>
                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}></TableCell>
                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                {currentProizvodi.map((proizvod) => (
                    <TableRow
                        key={proizvod?.naziv}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {proizvod?.naziv}
                        </TableCell>
                        <TableCell align="center">{proizvod?.cena}</TableCell>
                        <TableCell align="center">{proizvod?.netotezina}</TableCell>
                        <TableCell align="center">{proizvod?.vrstaproizvoda}</TableCell>
                        <TableCell align="center">{proizvod?.stanje}</TableCell>
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