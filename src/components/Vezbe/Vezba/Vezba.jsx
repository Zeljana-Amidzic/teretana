import React, { useState } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import AddBoxIcon  from '@material-ui/icons/AddBox';
import '../style.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paginate from 'react-paginate';

import useStyles from './vezba-style';

const Vezba = ({ vezbeS }) => {
    const [vezbe, setVezbe] = useState(vezbeS.slice(0,4));
    const vezbePerPage = 4;
    const [pageNumber, setPageNumber] = useState(1);
    // Get current posts
    const pageVisited = pageNumber * vezbePerPage;
    const currentVezbe = vezbe.slice(pageVisited, pageVisited + vezbePerPage);
    const pageCount = Math.ceil(vezbe.length / vezbePerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };

    return(
        <>
            <Paginate
            previousLabel={"Prethodna"}
            nextLabel={"Sledeca"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
        </>
    )
}

export default Vezba;