import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BgTilt from '../../components/layout/bgTilt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container:{
    padding:theme.spacing(4)
  },
  heading:{
    display:'flex',
    padding:`${theme.spacing(6)}px 10px 10px 10px`
  },
  item:{
    background:theme.palette.primary.main,
    padding:theme.spacing(2),
    margin:theme.spacing(3),
    borderRadius:'2rem',
    color:'black',
    fontWeight:'bold',
  },
  itemWrapper:{
    display:'flex',
    alignItems:"center",
    textAlign:'left',
    padding:theme.spacing(2)
  },
  digit:{
    background:theme.palette.primary.light,
    borderRadius:'1rem',
    marginRight:theme.spacing(3),
    padding:`${theme.spacing(0)}px ${theme.spacing(1)}px`
  }
}));

const list =[
  'We will kindly reach out to your friend.',
  'We will do aur best to understand their struggles and get them and get them help',
  'We will let you know once they have begin their theropy',
]

const HowWorks = () => {
  const classes = useStyles();

  return (
    <BgTilt>
      <div className={classes.heading}>
        <img width='30px' src='heart.PNG' alt=''/>
        <Typography variant='h5'>
          How it works
        </Typography>
      </div>
      {
        list.map((val,i)=>{
          return <div key={i} className={classes.itemWrapper}> 
            <Typography variant='h6' className={classes.digit}>
              {++i}
            </Typography>
            <Typography variant='h6'>
              {val}
            </Typography>
          </div>
        })
      }
      <div>
        <NavLink to='/friendInfo' style={{ textDecoration: 'none' }}>
          <div className={classes.item}>
            <Typography variant='h5'>
              Continue to Payment
            </Typography>
          </div>
        </NavLink>
      </div>

    </BgTilt>
  )
}

export default HowWorks