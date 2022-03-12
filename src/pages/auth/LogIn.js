import React from 'react';
import {FormGroup,Avatar,CircularProgress} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BgTilt from '../../components/layout/bgTilt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { NavLink } from 'react-router-dom'

import { ErrorMessage,Field, Form, Formik} from 'formik';
import { object, string } from 'yup';

import { connect } from "react-redux";
import { SIGN_IN } from "../../actions/authActions";

const initialValues = {
  identifier: '',
  password: '',
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer:{
    marginTop:"3rem"
  },
  backButton:{
    padding:'20px 0px'
  },
  avatar: {
    // margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    margin:'auto'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
    background:'#241534'
  },
  font:{
    color:'white'
  },
  submitButton:{
    margin:theme.spacing(3),
    paddingRight:theme.spacing(4),
    paddingLeft:theme.spacing(4),
    fontWeight:"bold",
    fontSize:'1.2rem',
  }
}));

function SignIn({isAuthenticated,loading,history, SIGN_IN}) {
  const classes = useStyles();

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <BgTilt>
        <Grid container > 
          <Grid item className={classes.backButton}>
            <NavLink to="/" variant="body2" className={classes.font}>
              <ArrowBackIcon/>
              <Typography variant='body2'>
                Go Back
              </Typography>
            </NavLink>
          </Grid>
        </Grid>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon style={{fill:'black'}}/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          validationSchema={
            object({
              password: string().required('password should be minimum 8character!!!').min(8),
              identifier: string().required('Your email is mandatory!!!').min(2).max(100),
            })
          }
        initialValues={initialValues}
        onSubmit={async (values,{setSubmitting}) => {
          // console.log(values);
          SIGN_IN(values)
          ;
        
        }}>
          {({ isSubmitting, isValidating }) => (
            <Form className={classes.form}>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="identifier" as={TextField} label="Your Email Address" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="identifier" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field
                    InputProps={{
                      className: classes.multilineColor
                    }}
                  name="password" type="password" as={TextField} label="Your password" variant='outlined' />
                  <ErrorMessage component='div' style={{color:"red"}} name="password" />
                </FormGroup>
              </Box>
            
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
                {loading ? 'Submitting' : 'Submit'}
              </Button>
              <Grid container>
                <Grid item xs md={6}>
                  <Link href="/forgot" variant="body2" className={classes.font}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item md={6}>
                  <Link href="/register" variant="body2" className={classes.font}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      <Box mt={8}>
        <Copyright />
      </Box>
    </BgTilt>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading:state.auth.loading
});

export default connect(
  mapStateToProps,
  { SIGN_IN }
)(SignIn);