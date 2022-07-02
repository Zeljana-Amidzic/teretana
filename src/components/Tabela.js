import { Table, TableCell, TableHead, TableRow, TableBody, TableContainer } from "@mui/material";
import React, { Component } from "react";
import { setAxiosInterceptors } from "../services/auth-one";
import { Pagination } from "./Pagination";
import { Paper } from "@mui/material";

const INITIAL_PAGE = 1;
const PAGE_SIZE = 2;
const totalPages = 10;
class Tabela extends Component{
    constructor(props){
        super(props);
        this.state = {
            page: INITIAL_PAGE,
            sortBy: '',
            keyword: "",
            isDataChanged: false,
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

    onPageChanged = (p) => {
        this.setState({
            ...this.state,
            page: p,
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

        return(
            <div className="">
                <br/>
                <div className="py-5 text-center">
                    <h2>{title}</h2>
                </div>
                <div className="col-md-12 order-md-1" style={{display: 'flex', flexFlow: 'column', alignItems: 'center', maxWidth: '1120px', width: '90%', margin: '0 auto'}}>
                    <div className="card-body py-4 bg-dark">
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead style={{backgroundColor: '#b8babc', margin: 5, padding: 10}}>
                                <TableRow>
                                    {headerTitles.map((headerTitle, i) => {
                                        return(
                                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed', color: 'white'}} key={i} scope="col" className="clickable" onClick={() => this.onSortByChanged(headerTitleProperties[i])}>
                                                {headerTitle}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, i) => {
                                    return(
                                        item && (
                                            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                {item.map((content, j) => {
                                                    return(
                                                        <TableCell key={j} component="th" scope="row" align="center">{content}</TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        )
                                    );
                                })}
                            </TableBody>
                        </Table>
                        <Pagination onPageChanged={this.onPageChanged}
                        totalPages={totalCount < PAGE_SIZE ? 1 : Math.ceil(totalCount / PAGE_SIZE) ?? totalPages}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tabela; 