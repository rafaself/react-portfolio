import { Box, Typography } from "@mui/material";

export default function AboutMe() {

    let aboutMe = "Sou engenheiro e desenvolvedor com experiência no uso de bibliotecas e frameworks em Python e Vue.js. Atualmente, estou buscando me especializar na linguagem Python, aprofundando meu conhecimento em suas funções internas, explorando bibliotecas e frameworks. Além disso, estudo ferramentas DevOps para melhorar os aspectos da aplicação a ser criada. Atualmente, levo como hobbie estudos sobre Data Science e Machine Learning com Python. Me considero uma pessoa proativa em equipe, versátil, compromissada com o trabalho e sempre bu"

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