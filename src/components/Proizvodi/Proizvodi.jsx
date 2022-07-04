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
import ReactPaginate from "react-paginate";
import { deleteProizvod, getAllProizvode } from "../../services/proizvod-service";
import AddProizvod from "./Proizvod/AddProizvod";
import Search from "../Search";
import UpdateProizvod from "./Proizvod/UpdateProizvod";

const totalPages = 10;
const keywords = "";
const sortBy = "idproizvod";
const PAGE_SIZE = 2;
const INITAL_PAGE = 1;
let searchTerm = "";
const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
const {zaglavlja} = ["Naziv vežbe", "Cena", "Neto težina", "Vrsta", "Na stanju", " ", " "];
export default class Proizvodi extends Component{
    constructor(props){
        super(props);
        this.state = {
            proizvodi: [],
            ukupno: '',
            currentProizvodi: [],
            page: INITAL_PAGE,
            sortBy: "idproizvod",
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
        console.log("menjala bih proizvod sa id" + proizvod);
        //this.props.history.push(`http://localhost:3000/updateproizvod/${idproizvod}`);
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
            currentProizvodi: this.state.proizvodi.slice(selected, selected + PAGE_SIZE),
            page: selected,
        });
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    searchHandler = (e) => {
        searchTerm = e.target.value;
    }

    handleIzmenu = (p) => {

    }

    render = () => {
        const {proizvodi} = this.state;
        const totalCount = proizvodi.length;
        const pageVisited = INITAL_PAGE * PAGE_SIZE;
        const pageCount = Math.ceil(totalCount / PAGE_SIZE);

        return(
            <>
            <div>
            <div className="row" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
                <div className="column" style={{display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: '1'}}>
                    <AddProizvod/>
                </div>
                <div className="column" style={{display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: '1'}}>
                    <UpdateProizvod/>
                </div>
            </div>
            </div>
            <div className="container" style={{display: 'flex', flexFlow: 'column', alignItems: 'center', maxWidth: '1120px', width: '90%', margin: '0 auto'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableBody>
                        {this.state.page === 1 && <Search proizvodi={this.state.proizvodi.slice(INITAL_PAGE, INITAL_PAGE + PAGE_SIZE)}/>}
                        {this.state.page !== 1 && <Search proizvodi={this.state.currentProizvodi}/>}
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