import { Box, Divider, Grid, Typography } from "@mui/material";
import MyCard from "../MyCard";
import { cardsInfo } from "./data";

export default function Projects() {

    return (
        <Box marginBottom={4}>

            <Typography variant="h4">
                Meus projetos e scripts
            </Typography>

            <Divider sx={{
                bgcolor: () => 'rgba(255, 0, 0, 0.5)',
                marginY: 2,
            }} />

            <Grid container marginTop={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                {cardsInfo.map((card, index) => (
                    <Grid
                        key={index + 1}
                        item
                        md={4}
                        marginBottom={3}
                        display="flex"
                        justifyContent={(index % 3 === 0 ? 'flex-start' : index % 3 === 1 ? 'center' : 'flex-end')}
                    >
                        <MyCard card={card} />
                    </Grid>

                ))}
            </Grid>

            <Grid container marginTop={4} sx={{ display: { xs: 'flex', md: 'none' } }}>
                {cardsInfo.map((card, index) => (
                    <Grid
                        key={index + 1}
                        item
                        xs={12}
                        marginBottom={3}
                        display="flex"
                        justifyContent='center'
                    >
                        <MyCard card={card} />
                    </Grid>
                ))}
            </Grid>

        </Box>
    )
}