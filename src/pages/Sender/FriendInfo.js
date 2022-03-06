import React from 'react';
import {FormGroup,Avatar,CircularProgress} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
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
import { SIGN_UP } from "../../actions/authActions";

const initialValues = {
  firstname:'',
  lastname: '',
  phoneNumber: '',
  info:'',
}


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
  submitButton:{
    margin:`${theme.spacing(3)}px auto`,
    paddingRight:theme.spacing(4),
    paddingLeft:theme.spacing(4),
    fontWeight:"bold",
    fontSize:'1.2rem',
    display:'flex',
    alignItems:"center"
  }
}));

function FriendInfo({isAuthenticated,loading,history, SIGN_UP}) {
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
            <NavLink to="/" variant="body2" className={classes.font}>
              <ArrowBackIcon/>
              <Typography variant='body2'>
                Go Back
              </Typography>
            </NavLink>
          </Grid>
        </Grid>
        <Typography component="h1" variant="h5">
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
        initialValues={initialValues}
        onSubmit={async (values) => {
          // console.log(values);
          SIGN_UP(values);
        
        }}>
          {({ isSubmitting, isValidating }) => (
            <Form className={classes.form}>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="firstname" as={TextField} label="Friends FirstName" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="firstname" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="lastname" as={TextField} label="Friends lastName" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="lastname" />
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
              <NavLink to="/" variant="body2" className={classes.font}>
                <Button
                  disabled={loading}
                  type="submit"
                  variant="contained"
                  className={classes.submitButton}
                  color="primary"
                  startIcon={
                    loading ? (
                      <CircularProgress size="1rem" />
                    ) : undefined
                  }
                >
                  {loading ? 'Submitting' : 'Next'}
                </Button>
              </NavLink>

            </Form>
          )}
        </Formik>
      </BgTilt>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated || false,
  loading:state.auth.loading
});

export default connect(
  mapStateToProps,
  { SIGN_UP }
)(FriendInfo);