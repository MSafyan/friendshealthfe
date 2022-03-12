import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 275,
    textAlign:'left',
    background:"white",
    color:'black',
    marginBottom:theme.spacing(1)
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function OutlinedCard({option}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4" style={{fontWeight:'bold'}} component="h2">
          {option.heading}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='primary' variant='outlined' style={{color:"black"}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
