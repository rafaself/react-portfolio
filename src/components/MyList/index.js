import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Divider, ListItemButton, Typography } from '@mui/material';

export default function MyList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'transparent', paddingY: '32px' }}>

      <ListItem sx={{ paddingX: 0 }}>
        <Typography variant="h4">
        Bem vindo(a), me chamo Rafael!
        </Typography>
      </ListItem>

      <ListItem sx={{ paddingX: 0 }}>
        <Typography variant="h6">
          Meus contatos
        </Typography>
      </ListItem>

      <ListItem sx={{
        bgcolor: () => 'rgba(0, 119, 181, 0.15)',
        borderRadius: 3,
        marginTop: 1
      }}>

        <ListItemButton component="a" href="https://www.linkedin.com/in/rafael-fontenele/" target="_blank">

          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#cce4f6" }}>
              <LinkedInIcon sx={{ color: "#0077B5" }} />
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primary="LinkedIn"
            secondary="https://www.linkedin.com/in/rafael-fontenele/"
            secondaryTypographyProps={{
              color: 'FFFFFF',
              fontWeight: 'medium',
              variant: 'body2',
            }}
          />

        </ListItemButton>

      </ListItem>

      <Divider sx={{
        bgcolor: () => 'rgba(255, 0, 0, 0.5)',
        marginY: 1
      }} />

      <ListItem sx={{
        bgcolor: () => 'rgba(255, 255, 255, 0.15)',
        borderRadius: 3
      }}>

        <ListItemButton component="a" href="https://github.com/rafaself" target="_blank">

          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#FFFFFF" }}>
              <GitHubIcon sx={{ color: "#000000" }} />
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primary="GitHub"
            secondary="https://github.com/rafaself"
            secondaryTypographyProps={{
              color: 'FFFFFF',
              fontWeight: 'medium',
              variant: 'body2',
            }}
          />

        </ListItemButton>

      </ListItem>

      <Divider sx={{
        bgcolor: () => 'rgba(255, 0, 0, 0.5)',
        marginY: 0.5
      }} />

      <ListItem sx={{
        bgcolor: () => 'rgba(37, 211, 102, 0.15)',
        borderRadius: 3
      }}>

        <ListItemButton component="a" href="https://wa.me/63981189986" target="_blank">

          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#EEEEEE" }}>
              <WhatsAppIcon sx={{ color: "#25D366" }} />
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primary="WhatsApp"
            secondary="(63) 9 8118-9986"
            secondaryTypographyProps={{
              color: 'FFFFFF',
              fontWeight: 'medium',
              variant: 'body2',
            }}
          />

        </ListItemButton>

      </ListItem>

      <Divider sx={{
        bgcolor: () => 'rgba(255, 0, 0, 0.5)',
        marginY: 1
      }} />

      <ListItem sx={{
        bgcolor: () => 'rgba(255, 0, 0, 0.15)',
        borderRadius: 3
      }}>

        <ListItemButton component="a" href="mailto:rafaondjango@gmail.com" target="_blank">

          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#EEEEEE" }}>
              <MailIcon sx={{ color: "#FF0000" }} />
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primary="Email"
            secondary="rafaondjango@gmail.com"
            secondaryTypographyProps={{
              color: '#FFFFFF',
              fontWeight: 'medium',
              variant: 'body2',
            }}
          />

        </ListItemButton>

      </ListItem>

    </List>
  );
}
