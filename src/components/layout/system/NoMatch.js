import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const NoMatch = props => {
  return (
    <Grid container style={{ paddingTop: "40px" }}>
      <Grid item xs={9} sm={9} lg={6} xl={6}>
        <Typography variant="body2">No route match :(</Typography>
      </Grid>
    </Grid>
  );
};

export default NoMatch;
