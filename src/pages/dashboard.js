import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout/Index'
import DashboardApp from './test';
import { connect } from "react-redux";
import {ORDER_FEATURED, ORDER_REVENUE} from '../actions/orderAction'
import { CUSTOMER_INFO,CUSTOMER_YEARLY } from '../actions/customerAction';
import { COUPON_LIST } from '../actions/couponAction';


// const useStyles = makeStyles((theme) => ({
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: 'flex',
//     overflow: 'auto',
//     flexDirection: 'column',
//   },
//   fixedHeight: {
//     height: 240,
//   },
// }));

function Dashboard({COUPON_LIST,CUSTOMER_INFO,CUSTOMER_YEARLY ,ORDER_REVENUE,ORDER_FEATURED,revenueData,loading}) {
  // const classes = useStyles();
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  React.useEffect(()=>{
    ORDER_REVENUE();
    ORDER_FEATURED();
    
    CUSTOMER_YEARLY();
    CUSTOMER_INFO();
    COUPON_LIST();
    // eslint-disable-next-line
  },[])

  return (<>
        <Layout>
            <DashboardApp/>
        </Layout>
  </>
  );
}

const mapStateToProps = state => ({
  revenueData: state.order.orderRevenue,
  loading:state.order.loading
});


export default connect(
  mapStateToProps,
  {ORDER_REVENUE,ORDER_FEATURED,CUSTOMER_INFO,CUSTOMER_YEARLY,COUPON_LIST}
)(Dashboard);