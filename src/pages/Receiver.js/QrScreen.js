import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Button,Grid} from '@material-ui/core';
import BgTilt from '../../components/layout/bgTilt';
import { NavLink } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  container:{
    padding:theme.spacing(4)
  },
  backButton:{
    padding:'20px 0px'
  },
  font:{
    color:'white'
  },
  img:{
    // paddingBottom:theme.spacing(4),
    // width:theme.spacing(20)
    margin:'auto'
  },
  item:{
    background:theme.palette.primary.main,
    padding:theme.spacing(1),
    margin:theme.spacing(3),
    borderRadius:'2rem',
    color:'black',
    fontWeight:'bold',
    display:'flex',
    alignItems:'center'
  },
  bColor:{
    color:'black',
    textTransform:"none"
  },
  heading:{
    paddingBottom:theme.spacing(4)
  }
}))

const QrScreen = () => {
  const classes = useStyles();

  return (
    <BgTilt>
      <Grid container>
        <Grid item className={classes.backButton}>
          <NavLink to="/" variant="body2" className={classes.font}>
            <ArrowBackIcon/>
            <Typography variant='body2'>
              Go Back
            </Typography>
          </NavLink>
        </Grid>
      </Grid>
      <Typography variant='h4' className={classes.heading}>
        Scan the QR code on your Gift Card to redeem.
      </Typography>
      <div className={classes.img}>
        <img src='qrcode.png' alt='' width='220px'/>
      </div>
      {/* <NavLink to='#' style={{ textDecoration: 'none' }}>
          <div className={classes.item}>
            <Button>
              <Typography variant='h5' className={classes.bColor}>
                Scan Now
              </Typography>
            </Button>
          </div>
      </NavLink> */}
    </BgTilt>
  )
}

export default QrScreen