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
import { DataGrid, GridColDef, gridDensityRowHeightSelector, GridValueGetterParams } from '@mui/x-data-grid';
import { setAxiosInterceptors } from "../../services/auth-one";
import { Pagination } from '../Pagination.js';
import { useStepContext } from "@mui/material";
import ReactPaginate from "react-paginate";
import { deletePlan, getAllPlanove } from "../../services/plan-service";
import AddPlan from "./Plan/AddPlan";
import UpdatePlan from "./Plan/UpdatePlan";
import Plan from "./Plan/Plan";
import Tabela from "../Tabela";

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

    handleEditPlan = (plan) => {
        console.log("menjala bih proizvod sa id" + plan);
        //this.props.history.push(`http://localhost:3000/updateplan/${idplan}`);
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

    render() {
        return(
            <>
                <Tabela
                ref={this.child2}
                data={this.state.planovi.map(plan => [plan.idplan, plan.naziv, plan.grupamisica, plan.brojvezbi, plan.trajanje,
                <button type="submit" className="btn btn-info save-btn" onClick={this.handleEditPlan(plan)}>
                    Izmeni
                </button>,
                <button type="button" className="btn btn-danger save-btn" onClick={this.handleDeletePlan(plan.idplan)}>
                    Obrisi
                </button>])}
                load={this.loadPlanove}
                title={'Planovi'}
                headerTitles={['ID', 'Naziv plana', 'Grupa misica', 'Broj vezbi', ' Trajanje (min)']}
                headerTitleProperties={['idplan', 'naziv', 'grupamisica', 'brojvezbi', 'trajanje']}
                totalCount={this.state.ukupno}/>
            </>
        );
    }
}