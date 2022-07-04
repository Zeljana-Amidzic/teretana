import { Table, TableCell, TableHead, TableRow, TableBody, TableContainer } from "@mui/material";
import React, { Component } from "react";
import { setAxiosInterceptors } from "../services/auth-one";
import { Pagination } from "./Pagination";
import { Paper } from "@mui/material";
import ReactPaginate from "react-paginate";

const INITIAL_PAGE = 1;
const PAGE_SIZE = 20;
const totalPages = 10;
class Tabela extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            currentData: [],
            page: INITIAL_PAGE,
            sortBy: '',
            keyword: "",
        };
        this.child = React.createRef();
    }

    componentDidMount(){
        setAxiosInterceptors();
        this.props.load(this.state.page, PAGE_SIZE, this.state.sortBy, this.state.keyword);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.page !== this.state.page || prevState.sortBy !== this.state.sortBy || prevState.keyword !== this.state.keyword){
            this.props.load(this.state.page, PAGE_SIZE, this.state.sortBy, this.state.keyword);
        }
        if(this.state.isDataChanged){
            this.setState({
                ...this.state,
                isDataChanged: false,
            });
        }
    }

    onPageChanged = ({ selected }) => {
        this.setState({
            ...this.state,
            currentData: this.state.data.slice(selected, selected + PAGE_SIZE),
            page: selected,
        });
    };

    onSortByChanged = (s) => {
        this.setState({
            ...this.state,
            sortBy: s,
        });
    };


    render(){
        const { data, title, headerTitles, headerTitleProperties, totalCount } = this.props;
        const {total} = data.length;
        console.log("total "+totalCount);
        const initialData = data.slice(INITIAL_PAGE, INITIAL_PAGE + PAGE_SIZE);
        const pageCount = Math.ceil(total / PAGE_SIZE);
        return(
            <div>
                <br/>
                <div className="container" style={{display: 'flex', flexFlow: 'column', alignItems: 'center', maxWidth: '1120px', width: '90%', margin: '0 auto'}}>
                <div className="py-5 text-center">
                    <h2 style={{fontSize: 40, fontWeight: "bold", fontFamily: 'sans-serif-condensed'}}>{title}</h2>
                </div>
                <br/>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead style={{backgroundColor: '#b8babc', margin: 5, padding: 10}}>
                                <TableRow>
                                    {headerTitles.map((headerTitle, i) => {
                                        return(
                                            <TableCell align="justify" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white'}} key={i} scope="col" className="clickable" onClick={() => this.onSortByChanged(headerTitleProperties[i])}>
                                                {headerTitle}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            </TableHead>
                            {this.state.page === 1 &&
                            <TableBody>
                                {initialData.map((item, i) => {
                                    return(
                                        item && (
                                            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                {item.map((content, j) => {
                                                    return(
                                                        <TableCell key={j} component="th" scope="row" align="justify">{content}</TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        )
                                    );
                                })}
                            </TableBody>}
                            {this.state.page !== 1 && 
                            <TableBody>
                                {this.state.currentData.map((item, i) => {
                                    return(
                                        item && (
                                            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                {item.map((content, j) => {
                                                    return(
                                                        <TableCell key={j} component="th" scope="row" align="justify">{content}</TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        )
                                    );
                                })}
                            </TableBody>
                            }
                        </Table>
                        <ReactPaginate
                        previousLabel={"Prethodna"}
                        nextLabel={"Sledeća"}
                        pageCount={pageCount}
                        onPageChange={this.onPageChanged}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                    </TableContainer>
                </div>
            </div>
        );
    }
}

export default Tabela; 