import React from 'react'
import {Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BgTilt from '../../components/layout/bgTilt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { NavLink } from 'react-router-dom';

import { connect } from "react-redux";


const useStyles = makeStyles((theme) => ({
  backButton:{
    padding:'20px 0px'
  },
  font:{
    color:'white'
  },
  img:{
    paddingBottom:theme.spacing(0),
  },
  heading:{
    textAlign:'center',
    paddingBottom:theme.spacing(0),
    color:theme.palette.primary.main
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
  imgIcon:{
    width:'2rem',
    marginRight:theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginRight:theme.spacing(1),
    }
  },
  bColor:{
    color:'black',
    textTransform:"none"
  },
  itemWrapper:{
    display:'flex',
    alignItems:"center",
    textAlign:'left',
    padding:theme.spacing(1)
  },
}));

const list =[
  'Thank you for order.',
  'We will be contacting your friend.',
  'Order Information: xxx12345',
]

const Index = () => {
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
        <Typography component="h1" variant="h4" className={classes.heading}>
          Friendly
        </Typography>
        <div className={classes.img}>
          <img src='heart.PNG' width='40%' alt=''/>
        </div>
        {
        list.map((val,i)=>{
          return <div key={i} className={classes.itemWrapper}> 
            <Typography variant='h6'>
              {val}
            </Typography>
          </div>
        })
      }
    </BgTilt>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  {  }
)(Index);