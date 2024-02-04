import { Typography } from "@mui/material";
import "./App.css";
import Grid from '@mui/material/Grid';
import MyList from "./components/MyList";

function App() {
  return (
    <div>
      <div className="space">
      </div>

      <div className="app">
        <Grid container spacing={2}>

          <Grid item md={6} display="flex" justifyContent="center">
            <img src="images/profile2.png" alt="logo" class="frameworks" />
          </Grid>

          <Grid item md={6} container justifyContent="center">
            <Typography variant="h4">
              Rafael Moraes
            </Typography>
            <Typography mt={2} variant="h6">
              Bem vindo(a) a minha página! Sou desenvolvedor backend com foco em Python.
            </Typography>
            <MyList />
          </Grid>

          <Grid item md={12}>
            <Typography m={4} variant="h3">
              Projetos
            </Typography>
          </Grid>

          <Grid item md={12}>
            <Typography variant="h3">
              Projetos
            </Typography>
          </Grid>

        </Grid>

      </div>

    </div>
  );
}

export default App;
