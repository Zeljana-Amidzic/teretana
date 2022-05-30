import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { setAxiosInterceptors } from "../../services/auth-one";
import { deleteVezba, getAllVezbe } from "../../services/vezba-service";
import { Button } from "@material-ui/core";

class Vezbe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vezbe: [],
            ukupno: '',
        };
        this.child = React.createRef();
        this.child2 = React.createRef();
    }

    componentDidMount(){
        setAxiosInterceptors();
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

    render = () => {
        const {vezbe} = this.state;
        console.log(vezbe);

        const columns = ["ID","Naziv","Tezina","Grupa misica"]

        return(
            <TableContainer component={Paper}>
                    <Button type="submit">Dodaj vezbu</Button>
                    <Button type="submit">Obrisi vezbu</Button>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}>Naziv vežbe</TableCell>
                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}>Težina izvođenja</TableCell>
                            <TableCell align="right" style={{ fontSize: 25, fontWeight: "bold", fontFamily: 'sans-serif-condensed' }}>Grupa mišića</TableCell>
                        </TableRow>
                    </TableHead>
            <TableBody>
                {vezbe.map((vezba) => (
                    <TableRow
                        key={vezba?.naziv}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {vezba?.naziv}
                        </TableCell>
                        <TableCell align="right">{vezba?.tezina}</TableCell>
                        <TableCell align="right">{vezba?.grupamisica}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
    }
}

export default Vezbe;