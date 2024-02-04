import { Box, Divider, Typography } from "@mui/material";

export default function AboutMe() {

  return (
    <Box>

      <Typography variant="h4">
        Sobre mim
      </Typography>

      <Divider sx={{
        bgcolor: () => 'rgba(255, 0, 0, 0.5)',
        marginY: 2,
        width: "500px"
      }}/>

      <Typography variant="h5">
        Sou Engenheiro Eletricista e Desenvolvedor. Iniciei na programação durante a faculdade através de oportunidades de desenvolvedor scripts e programas que possam automatizar, realizar cálculos complexos e tratar e coletar dados na área de Engenharia. Além disso, já atuei profissionalmente como Desenvolvedor Fullstack utilizando, principalmente, os frameworks <span style={{ color: "#CC0000" }}>Django (Python)</span> e <span style={{ color: "#CC0000" }}>Vue (Typescript).</span>
      </Typography>

    </Box >
  )
}