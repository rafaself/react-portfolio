import { Box, Typography } from "@mui/material";

export default function AboutMe() {

    let aboutMe = "Sou Engenheiro Eletricista e Desenvolvedor. Iniciei na programação durante a faculdade através de oportunidades de desenvolvedor scripts e programas que possam automatizar, realizar cálculos complexos e tratar e coletar dados na área de Engenharia. Além disso, já atuei profissionalmente como Desenvolvedor Fullstack."

    return (
        <Box>
            <Typography variant="h3">
              Sobre mim
            </Typography>
            <Typography m={4} variant="h5">
              {aboutMe}
            </Typography>
        </Box>
    )
}