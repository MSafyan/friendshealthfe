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

import { ErrorMessage,Field, Form, Formik} from 'formik';
import { object, string,number } from 'yup';

import { connect } from "react-redux";
import { RECEIVER_INFO } from "../../actions/receiverAction";

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

function FriendInfo({receiver,history, RECEIVER_INFO}) {
  const classes = useStyles();

  const formState=()=>{
    const INITIAL_FORM_STATE = {
      firstName:'',
      lastName: '',
      phoneNumber: '',
      info:'',
    };
  
    const EDIT_FORM_STATE={
      firstName:receiver?.firstName,
      lastName: receiver?.lastName,
      phoneNumber: receiver?.phoneNumber,
      info:receiver?.info,
    }
  
    if(receiver===null){
      return INITIAL_FORM_STATE;
    }else{
      return EDIT_FORM_STATE;
    }
  }

  return (
    <BgTilt>
        <Grid container>
          <Grid item className={classes.backButton}>
            <NavLink to="/senderInfo" variant="body2" className={classes.font}>
              <ArrowBackIcon/>
              <Typography variant='body2'>
                Go Back
              </Typography>
            </NavLink>
          </Grid>
        </Grid>
        <Typography component="h1" variant="h4" className={classes.heading}>
          Tell us about your friend
        </Typography>
        <Formik
          validationSchema={
            object({
              firstname: string().required('first name is mandatory!!!').min(1).max(100),
              lastname: string().min(1).max(100),
              phoneNumber: number().integer().typeError('Please enter valid phone number').required('phone number is mandatory').min(999999999),
              info: string().max(200),
            })
          }
        initialValues={formState()}
        >
          {({ values,handleSubmit }) => (
            <Form className={classes.form}>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="firstName" as={TextField} label="Friends FirstName" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="firstName" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="lastName" as={TextField} label="Friends lastName" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="lastName" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="phoneNumber" as={TextField} label="Friends PhoneNumber" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="phoneNumber" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="info" as={TextField} label="Additional Info" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="info" />
                </FormGroup>
              </Box>
              <NavLink to="/treatmentOptions" variant="body2" className={classes.font} style={{ textDecoration: 'none' }}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.submitButton}
                  color="primary"
                  onClick={()=>{
                    RECEIVER_INFO({form:values,history});
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
  receiver:state.receiver.receiver
});

export default connect(
  mapStateToProps,
  { RECEIVER_INFO }
)(FriendInfo);