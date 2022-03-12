import React from 'react';
import {FormGroup} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BgTilt from '../../components/layout/bgTilt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { NavLink } from 'react-router-dom'

import { ErrorMessage,Field, Form, Formik } from 'formik';
import { object, string } from 'yup';

import { connect } from "react-redux";
import { SENDER_INFO } from "../../actions/senderAction";

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
    width:'80%',
    borderRadius:theme.spacing(4),
    fontSize:"1.8rem",
    fontWeight:"bold",
    display:'flex',
    alignItems:"center",
    textDecoration:'none'
  }
}));

function FriendInfo({sender, SENDER_INFO}) {
  const classes = useStyles();

  const formState=()=>{
    const INITIAL_FORM_STATE = {
      firstName:'',
      lastName: '',
      reason:'',
    };
  
    const EDIT_FORM_STATE={
      firstName: sender?.firstName,
      lastName: sender?.lastName,
      reason:sender?.reason,
    }
  
    if(sender===null){
      return INITIAL_FORM_STATE;
    }else{
      return EDIT_FORM_STATE;
    }
  }

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
          About you, and why?
        </Typography>
        <Formik
          validationSchema={
            object({
              firstname: string().required('first name is mandatory!!!').min(1).max(100),
              lastname: string().min(1).max(100),
              reason: string().max(200),
            })
          }
        initialValues={formState()}
        >
          {({ isSubmitting, isValidating,values,handleSubmit  }) => (
            <Form className={classes.form}>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="firstName" as={TextField} label="Your FirstName" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="firstName" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="lastName" as={TextField} label="Your lastName" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="lastName" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="reason" as={TextField} label="Reason..." variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="reason" />
                </FormGroup>
              </Box>
              <NavLink to="/friendInfo" variant="body2" className={classes.font} style={{ textDecoration: 'none' }}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.submitButton}
                  color="primary"
                  onClick={()=>{
                    console.log('hi')
                    SENDER_INFO({form:values});
                    handleSubmit();
                  }}
                >
                  Next
                </Button>
              </NavLink>

            </Form>
          )}
        </Formik>
      </BgTilt>
  );
}

const mapStateToProps = state => ({
  sender: state.sender.sender,
});

export default connect(
  mapStateToProps,
  { SENDER_INFO }
)(FriendInfo);