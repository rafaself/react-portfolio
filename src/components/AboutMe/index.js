import { Box, Typography } from "@mui/material";

export default function AboutMe() {

  let aboutMe = ""

  return (
    <Box>
      <Typography variant="h3">
        Sobre mim
      </Typography>
      <Typography m={4} variant="h5">
        Sou Engenheiro Eletricista e Desenvolvedor. Iniciei na programação durante a faculdade através de oportunidades de desenvolvedor scripts e programas que possam automatizar, realizar cálculos complexos e tratar e coletar dados na área de Engenharia. Além disso, já atuei profissionalmente como Desenvolvedor Fullstack utilizando, principalmente, os frameworks <span style={{ color: "#CC0000" }}>Django (Python)</span> e <span style={{ color: "#CC0000" }}>Vue (Typescript).</span>
      </Typography>
    </Box >
  )
}