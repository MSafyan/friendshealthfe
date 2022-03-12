import React from 'react';
import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BgTilt from '../../components/layout/bgTilt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { NavLink } from 'react-router-dom'

import Card from '../../components/treatmentOption/Card'

import { connect } from "react-redux";
import { SIGN_UP } from "../../actions/authActions";


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

const treatmentOptions = [
  {heading:"how it works",},
  {heading:"how it works 2",}
]

function TreatmentOption({isAuthenticated,loading,history, SIGN_UP}) {
  const classes = useStyles();
  React.useEffect(() => {
    // if (isAuthenticated) {
    //   history.push('/login');
    // }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <BgTilt>
      
        <Grid container>
          <Grid item className={classes.backButton}>
            <NavLink to="/friendInfo" variant="body2" className={classes.font}>
              <ArrowBackIcon/>
              <Typography variant='body2'>
                Go Back
              </Typography>
            </NavLink>
          </Grid>
        </Grid>
        <Typography component="h1" variant="h4" className={classes.heading}>
          Treatment Options
        </Typography>
        {
          treatmentOptions.map((val,i)=>{
            return <Card key={i} option={val} />
          })
        }
        <NavLink to="/paymentForm" variant="body2" className={classes.font} style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            className={classes.submitButton}
            color="primary"
          >
            Continue to Payment
          </Button>
        </NavLink>
      </BgTilt>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated || false,
});

export default connect(
  mapStateToProps,
  { SIGN_UP }
)(TreatmentOption);