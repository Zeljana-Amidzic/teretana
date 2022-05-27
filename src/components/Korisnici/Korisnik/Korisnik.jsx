import { Container, makeStyles, Paper, TextField } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default  function Korisnik() {
    const paperStyle = {padding: '50px 20px', width: 600, margin: '20px auto'};

    const classes = useStyle();

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>

            </Paper>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="" variant="outlined"/>
                <TextField id="standard-basic" label="" variant="outlined"/>
                <TextField id="standard-basic" label="" variant="outlined"/>
                <TextField id="standard-basic" label="" variant="outlined"/>
                <TextField id="standard-basic" label="" variant="outlined"/>
                <TextField id="standard-basic" label="" variant="outlined"/>
            </form>
        </Container>
    );
};