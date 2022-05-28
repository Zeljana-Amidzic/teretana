import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import authService from "../../../services/auth-service";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Teretana
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Prijava() {
    const theme = createTheme();
    const [korisnickoime, setKorisnickoime] = useState("");
    const [lozinka, setLozinka] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(korisnickoime, lozinka).then(
        () => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Prijava
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="korisnickoime"
              label="Korisnicko ime"
              name="korisnickoime"
              autoComplete="username"
              value={korisnickoime}
              onChange={(e) => setKorisnickoime(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lozinka"
              label="Lozinka"
              type="password"
              id="lozinka"
              autoComplete="current-password"
              value={lozinka}
              onChange={(e) => setLozinka(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Zapamti me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Prijava
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Zaboravljena lozinka?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Nemate nalog? Registrujte se."}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Prijava;