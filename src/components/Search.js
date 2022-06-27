import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container , Button, Grid} from '@material-ui/core';
import UpdateProizvod from "./Proizvodi/Proizvod/UpdateProizvod";
import { useNavigate } from "react-router-dom";


export default function Search({ proizvodi }){
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleEditProizvod = (idproizvod) => {
    // 👇️ navigate to /contacts
        console.log("id: " + idproizvod);
        navigate(`/updateproizvod/${idproizvod}`);
    };

    return (
        <div>
            <input
            style={{margin: '20px', width: '1000px', height: '40px', fontSize: '20px', padding: '10px'}}
            type="text"
            placeholder="Pretraga..."
            onChange={(e) => {setSearchTerm(e.target.value);}}/>
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
            {
                proizvodi.filter((val) => {
                    if(searchTerm == ""){
                        return val
                    }else if(val.naziv.toLowerCase().includes(searchTerm.toLowerCase()) || val.vrstaproizvoda.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((val, key) => {
                    return(
                        <TableRow
                        key={key}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {val?.naziv}
                        </TableCell>
                        <TableCell align="center">{val?.cena}</TableCell>
                        <TableCell align="center">{val?.netotezina}</TableCell>
                        <TableCell align="center">{val?.vrstaproizvoda}</TableCell>
                        <TableCell align="center">{val?.stanje}</TableCell>
                        <TableCell align="right">
                            <Button type="submit"
                                color="default"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => handleEditProizvod(val?.idproizvod)}>
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
                    );
                })
            }
        </div>
    )
}