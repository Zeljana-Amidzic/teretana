import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from '../../pics/logo.png';

import useStyles from './styles.js';
import { Link } from "react-router-dom";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                        Teretana Shop
                    </Typography>
                    <div className={classes.grow}/>
                    <div>
                        <ul>
                            <Link to={"/home"} style={linkStyle}>Pocetna</Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                        <Link to={"/prijava"} style={linkStyle}>Prijava</Link>
                        </ul>
                    </div>
                    <div>
                        <Link to={"/registracija"} style={linkStyle}>Registruj se</Link>
                    </div>
                    <div className={classes.button}>
                        <IconButton aria-label="Prikazi korpu" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar