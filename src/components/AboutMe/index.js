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
      }}/>

      <Typography variant="h5">
        Sou Engenheiro Eletricista e Desenvolvedor. Iniciei na programação durante a faculdade através de oportunidades de desenvolvedor scripts e programas que possam automatizar, realizar cálculos complexos e tratar e coletar dados na área de Engenharia. Além disso, já atuei profissionalmente como Desenvolvedor Fullstack utilizando, principalmente, os frameworks <span style={{ color: "#CC0000" }}>Django (Python)</span> e <span style={{ color: "#CC0000" }}>Vue (Typescript).</span> Atualmente, estou focando meus estudos no <span style={{ color: "#CC0000" }}>backend</span> com <span style={{ color: "#CC0000" }}>C#</span> e <span style={{ color: "#CC0000" }}>Python</span>. Mas também, não deixando de lado o frontend, o entendendo como funciona.
      </Typography>

    </Box >
  )
}