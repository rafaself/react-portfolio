import { Box, Typography } from "@mui/material";
import MyCard from "../MyCard";

export default function() {

    const cardsInfo = [{
        title: "Regex (scripts)",
        description: "Scripts para realizar verificações e validações de padrões.",
        image: "/images/regex.png",
        imageTitle: "regex"
    }]

    return (
        <Box>

            <Typography variant="h4">
                Meus projetos e scripts
            </Typography>

            { 
            cardsInfo.map(card => 
                <MyCard card={card} />
            )
            }

        </Box>
    )
}