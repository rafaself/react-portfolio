import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MyCard(props) {
  return (
    <Card sx={{ width: "380px", bgcolor: "rgba(230,230,230,1)" }}>

      <CardMedia
        sx={{ height: 140 }}
        image={props.card.image}
        title={props.card.imageTitle}
      />

      <div style={{display: "flex", flexGrow: 1, flexDirection: "column", justifyContent: "space-between", height:"220px"}}>
        <CardContent sx={{ height: 140 }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.card.description}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", flexDirection: "row-reverse", justifyContent: "space-between" }}>
          <Button size="small" component="a" href={props.card.url} target="_blank">Ver projeto</Button>
          {props.card.urlResult && <Button size="small" component="a" href={props.card.urlResult} target="_blank">Ver resultado</Button>}
        </CardActions>
      </div>

    </Card>
  );
}
