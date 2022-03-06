import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,CssBaseline} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer:{
    height:'100vh',
    display:'flex',
    alignItems:'center'
  },
  container:{
    padding:theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      width:'100%',
      padding:theme.spacing(3)
    }
  },
  wave:{
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    overflow: 'hidden',
    lineHeight: '0',
    transform: 'rotate(180deg)',
    zIndex:'-1',
    borderRadius:'1rem'
  },
  waveSvg:{
    position: 'relative',
    display: 'block',
    width: 'calc(100% + 1.3px)',
    height: '500px',
    transform: 'rotateY(180deg)',
  },
  shapeFill:{
    fill: "#301A3E"
  },  
  card:{
    background:'#241534',
    borderRadius:"1rem",
    [theme.breakpoints.down('xs')]: {
      height:'100vh',
      display:'flex',
      alignItems:'center'
    },
  },
}));

const BgTilt = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.wave}>
        <svg className={classes.waveSvg} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className={classes.shapeFill} d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
        </svg>
      </div>
      <Container className={classes.card} style={{padding:'1rem'}} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.container}>
          {props.children}
        </div>
      </Container>
    </div>
  )
}

export default BgTilt