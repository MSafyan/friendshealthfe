import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Typography,CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BgTilt from '../../components/layout/bgTilt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { NavLink } from 'react-router-dom'

import { connect } from "react-redux";
import { SENDER_INFO_BE } from "../../actions/senderAction";
import { RECEIVER_INFO_BE } from "../../actions/receiverAction";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backButton:{
    padding:'20px 0px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  font:{
    color:'white'
  },
  heading:{
    textAlign:'left',
    paddingBottom:theme.spacing(2),
    color:theme.palette.primary.main
  },
  submitButton:{
    margin:`${theme.spacing(3)}px auto`,
    padding:theme.spacing(1),
    width:'100%',
    borderRadius:theme.spacing(4),
    fontSize:"1.8rem",
    fontWeight:"bold",
    display:'flex',
    alignItems:"center",
    textDecoration:'none'
  }
}));

function FriendInfo({loading,history,sender,receiver, RECEIVER_INFO_BE,SENDER_INFO_BE}) {
  const classes = useStyles();

  return (
    <BgTilt>
        <Grid container>
          <Grid item className={classes.backButton}>
            <NavLink to="/treatmentOptions" variant="body2" className={classes.font}>
              <ArrowBackIcon/>
              <Typography variant='body2'>
                Go Back
              </Typography>
            </NavLink>
          </Grid>
        </Grid>
        <Typography component="h1" variant="h4" className={classes.heading}>
          Payment Form
        </Typography>
        <div style={{height:'40vh',background:'white'}}></div>
          <Button
            disabled={loading}
            variant="contained"
            className={classes.submitButton}
            color="primary"
            startIcon={
              loading ? (
                <CircularProgress size="1rem" />
              ) : undefined
            }
            onClick={()=>{
              if(sender!==null && receiver!==null){
                // SENDER_INFO_BE(sender);
                RECEIVER_INFO_BE({sender,receiver,history});
              }
            }}
          >
            Continue to Payment
          </Button>
      </BgTilt>
  );
}

const mapStateToProps = state => ({
  receiver:state.receiver.receiver,
  sender: state.sender.sender,
  loading:state.receiver.loading
});

export default connect(
  mapStateToProps,
  { RECEIVER_INFO_BE,SENDER_INFO_BE }
)(FriendInfo);