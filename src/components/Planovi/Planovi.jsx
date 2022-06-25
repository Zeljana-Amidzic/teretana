import React, { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container , Button, Grid} from '@material-ui/core';
import { Input } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { setAxiosInterceptors } from "../../services/auth-one";
import { Pagination } from '../Pagination.js';
import { useStepContext } from "@mui/material";
import ReactPaginate from "react-paginate";
import { deletePlan, getAllPlanove } from "../../services/plan-service";

const totalPages = 10;
const keywords = "";
const sortBy = "idplan";
const PAGE_SIZE = 20;
const INITAL_PAGE = 1;
let searchTerm = "";
const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
export default class Planovi extends Component{
    constructor(props){
        super(props);
        this.state = {
            planovi: [],
            ukupno: '',
            page: INITAL_PAGE,
            sortBy: "idplan",
            keyword: "",
        };
        this.child = React.createRef();
        this.child2 = React.createRef();
        this.child3 = React.createRef();
        this.handleEditProizvod = this.handleEditProizvod.bind(this);
    }

    componentDidMount(){
        setAxiosInterceptors();
        //this.loadVezbe(INITAL_PAGE, PAGE_SIZE, sortBy, keywords);
        this.loadPlanove();
    }

    loadPlanove = (page, PAGE_SIZE, sortBy, keyword) => {
        getAllPlanove(page, PAGE_SIZE, sortBy, keyword).then((resp) => {
            this.setState({
                ...this.state,
                planovi: resp.data,
            });
        })
        .catch((e) => console.log(e));
    };

    /*loadProizvode = () => {
        getAllProizvode().then((resp) => {
            this.setState({
                ...this.state,
                proizvodi: resp.data,
            });
        })
        .catch((e) => console.log(e));
    };*/

    handleEditPlan = (idplan) => {
        console.log("menjala bih proizvod sa id" + idproizvod);
        this.props.history.push(`http://localhost:3000/updateplan/${idplan}`);
    };

    handleDeleteProizvod = (id) => {
        deleteProizvod(id).then(this.refreshPlan).catch((e) => console.log(e));
    };

    setUkupno = () => {
        getAllPlanove().then((resp) => {
            this.setState({
                ukupno: resp.data.length,
            });
        }).catch((e) => console.log(e));
    };

    refreshPlan = () => {
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

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    searchHandler = (e) => {
        searchTerm = e.target.value;
    }

    render = () => {
        const {planovi} = this.state;
        const totalCount = planovi.length;
        
    // Get current posts
        const pageVisited = INITAL_PAGE * PAGE_SIZE;
        const currentProizvodi = planovi.slice(pageVisited, pageVisited + PAGE_SIZE);
        const pageCount = Math.ceil(totalCount / PAGE_SIZE);

        return(
            <>
            
            <div className="container" style={{display: 'flex', flexFlow: 'column', alignItems: 'center', maxWidth: '1120px', width: '90%', margin: '0 auto'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableBody>
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
        </div>
        </>)
    }
}