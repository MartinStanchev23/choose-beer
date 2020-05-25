import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { simpleAction } from "./actions/simpleAction";
import { configureAxios } from "./config/axios";
import { Grid, Typography, Box } from "@material-ui/core";
import { RandomBeer, IKnowMyBeer, FindMyBeer } from "./containers/index";

configureAxios();
class App extends Component {
  render() {
    return (
      <>
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justify="center"
          style={{ minHeight: "99vh", maxWidth: "100vw" }}
        >
          <Grid item xs={12} space={0}>
            <Typography variant="h3" align="center" color="textPrimary">
              <Box fontStyle="" fontWeight="fontWeightMedium">What beer to drink today?</Box>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <RandomBeer />
          </Grid>
          <Grid item xs={3}>
            <IKnowMyBeer />
          </Grid>
          <Grid item xs={3}>
            <FindMyBeer />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
