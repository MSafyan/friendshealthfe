import React from 'react'
import {Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BgTilt from '../components/layout/bgTilt';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import RedeemIcon from '@material-ui/icons/Redeem';

import { NavLink } from 'react-router-dom';

import { connect } from "react-redux";
import { LOGOUT } from "../actions/authActions";


const useStyles = makeStyles((theme) => ({
  container:{
    padding:theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      width:'100%',
      padding:theme.spacing(3)
    }
  },
  img:{
    paddingBottom:theme.spacing(0),
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
  heading:{
    textAlign:'center',
    paddingBottom:theme.spacing(0),
    color:theme.palette.primary.main
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
    textTransform:"none",
    fontWeight:'bold'
  },
  icon:{
    marginRight:theme.spacing(3),
    color:'black',
    [theme.breakpoints.down('xs')]: {
      marginRight:theme.spacing(1),
    }
  }
}));

const Index = ({isAuthenticated,LOGOUT}) => {
  const classes = useStyles();

  return (
    <BgTilt>
        <Typography component="h1" variant="h4" className={classes.heading}>
          Friendly
        </Typography>
        <div className={classes.img}>
          <img src='heart.PNG' width='40%' alt=''/>
        </div>
        <NavLink to='/senderInfo' style={{ textDecoration: 'none' }}>
          <div className={classes.item}>
            <Button>
              <RedeemIcon fontSize='large' className={classes.icon}/>
              <Typography variant='h5' className={classes.bColor}>
                Send a Friendly
              </Typography>
            </Button>
          </div>
        </NavLink>

        <NavLink to='/qrCode' style={{ textDecoration: 'none' }}>
          <div className={classes.item}>
            <Button>
              {/* <FaceIcon fontSize='large' className={classes.icon}/> */}
              <img src='redeem.png' className={classes.imgIcon} alt='redeem'/>
              <Typography variant='h5' className={classes.bColor}>
                Redeem
              </Typography>
            </Button>
          </div>
        </NavLink>

        {
          isAuthenticated ? (
            <div className={classes.item}>
              <Button onClick={()=>LOGOUT()}>
              <LockOutlinedIcon fontSize='large' className={classes.icon}/>
                <Typography variant='h5' className={classes.bColor}>
                  Log-Out
                </Typography>
              </Button>
            </div>
          ): 
          (<NavLink to='/login' style={{ textDecoration: 'none' }}>
          <div className={classes.item}>
            <Button>
              <LockOutlinedIcon fontSize='large' className={classes.icon}/>
              <Typography variant='h5' className={classes.bColor}>
                Log-In
              </Typography>
            </Button>
          </div>
        </NavLink>)
        }
    </BgTilt>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { LOGOUT }
)(Index);