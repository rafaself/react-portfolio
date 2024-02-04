import "./App.css";
import Grid from '@mui/material/Grid';
import MyList from "./components/MyList";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {

  return (
    <div class="main">
      <div className="space">
      </div>

      <div className="app">
        <Grid container spacing={2} paddingX={8}>

          <Grid item md={6} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>  
            <img src="images/profile2.png" alt="logo" class="frameworks" height="450"/>
            <span>Está página foi desenvolvida utilizando React.js</span>
          </Grid>

          <Grid item md={6} alignItems="center">
            <MyList />
          </Grid>

          <Grid item md={6}>
            <AboutMe />
          </Grid>

          <Grid item md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>  
            <img src="images/git-rocket.svg" alt="logo" height="400"/>
          </Grid>

          <Grid item>
            <Projects />
          </Grid>

        </Grid>

      </div>

    </div>
  );
}

export default App;
