import "./App.css";
import Grid from '@mui/material/Grid';
import MyList from "./components/MyList";
import AboutMe from "./components/AboutMe";

function App() {

  return (
    <div class="main">
      <div className="space">
      </div>

      <div className="app">
        <Grid container spacing={2} paddingX={8}>

          <Grid item md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>  
            <img src="images/profile2.png" alt="logo" class="frameworks" height="450"/>
          </Grid>

          <Grid item md={6} alignItems="center">
            <MyList />
          </Grid>

          <Grid item md={6}>
            <AboutMe />
          </Grid>

          <Grid item md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>  
            <img src="images/git-rocket.svg" alt="logo" height="450"/>
          </Grid>

        </Grid>

      </div>

    </div>
  );
}

export default App;
