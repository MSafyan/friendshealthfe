// material
import React from 'react'
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
// import Page from '../components';
// import Layout from '../components/layout/Index'
import { connect } from "react-redux";

import {
  // AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  // AppNewsUpdate,
  // AppWeeklySales,
  // AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  // AppTrafficBySite,
  // AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

 function DashboardApp({revenueData,loading}) {
  return (
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={6} md={3}> */}
            {/* <AppWeeklySales /> */}
          {/* </Grid> */}
          <Grid item xs={12} sm={6} md={4}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppBugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            {
              revenueData &&
            <AppWebsiteVisits />
            }
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {
              revenueData && 
            <AppCurrentVisits />
            }
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            {
              !loading && <AppConversionRates />
              }
          </Grid>

        </Grid>
      </Container>
  );
}

const mapStateToProps = state => ({
  revenueData: state.order.revenueData,
  loading:state.customer.loading,
  customerYearly:state.customer.customerYearly
});

export default connect(
  mapStateToProps,
  null
)(DashboardApp);