import "./App.css";
import Grid from '@mui/material/Grid';
import MyList from "./components/MyList";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { ImageList, ImageListItem } from "@mui/material";

function App() {

  return (
    <div className="main">
      <div className="space">
      </div>

      <div className="app">
        <Grid container spacing={2}>

          <Grid item md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <img src="images/profile2.png" alt="logo" className="frameworks" height="450" />
            <span>Está página foi desenvolvida utilizando React</span>
          </Grid>

          <Grid item md={6} alignItems="center">
            <MyList />
          </Grid>

          <Grid item md={6}>
            <AboutMe />
          </Grid>

          <Grid item md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }} >
            {/* <img src="images/git-rocket.svg" alt="logo" /> */}
            <ImageList sx={{ width: 500, height: 300 }} cols={1} rowHeight={"auto"}>

              <ImageListItem>
                <img src="images/git-rocket.svg" alt="logo" />
              </ImageListItem>
            </ImageList>
          </Grid>


          {/*

          <Grid item md={12} xs={12}>
            <Projects />
          </Grid> */}

        </Grid>

      </div>

    </div>
  );
}

export default App;
