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
import AddPlan from "./Plan/AddPlan";
import UpdatePlan from "./Plan/UpdatePlan";

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
            sortBy: sortBy,
            keyword: keywords,
        };
        this.child = React.createRef();
        this.child2 = React.createRef();
        this.child3 = React.createRef();
        this.handleEditPlan = this.handleEditPlan.bind(this);
    }

    componentDidMount(){
        setAxiosInterceptors();
        //this.loadVezbe(INITAL_PAGE, PAGE_SIZE, sortBy, keywords);
        this.loadPlanove(INITAL_PAGE, PAGE_SIZE, this.state.sortBy, this.state.keyword);
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
        console.log("menjala bih proizvod sa id" + idplan);
        this.props.history.push(`http://localhost:3000/updateplan/${idplan}`);
    };

    handleDeletePlan = (id) => {
        deletePlan(id).then(this.refreshPlan).catch((e) => console.log(e));
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
            <div>
            <div className="row" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
                <div className="column" style={{display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: '1'}}>
                    <AddPlan/>
                </div>
                <div className="column" style={{display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: '1'}}>
                    <UpdatePlan/>
                </div>
            </div>
            </div>
            <div className="container" style={{display: 'flex', flexFlow: 'column', alignItems: 'center', maxWidth: '1120px', width: '90%', margin: '0 auto'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableBody>
                        <TableHead style={{backgroundColor: '#b8babc', margin: 5, padding: 10}}>
                            <TableRow>
                                <TableCell style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white' }}>Naziv plana</TableCell>
                                <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white'}}>Grupa misica</TableCell>
                                <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white'}}>Broj vežbi</TableCell>
                                <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white' }}>Trajanje</TableCell>
                                <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}></TableCell>
                                <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        {planovi.map((p) => (
                            <TableRow key={p?.idplan}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{p?.naziv}</TableCell>
                                <TableCell align="center">{p?.grupamisica}</TableCell>
                                <TableCell align="center">{p?.brojvezbi}</TableCell>
                                <TableCell align="center">{p?.trajanje}</TableCell>
                                <TableCell align="right">
                            <Button type="submit"
                                color="default"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick = {() => this.handleEditPlan(p?.idplan)}>
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
        </div>
        </>)
    }
}