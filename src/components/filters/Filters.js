import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PaperHeader from "../layout/paper/PaperHeader";
import PaperBody from "../layout/paper/PaperBody";
import PaperFooter from "../layout/paper/PaperFooter";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "./styles";

class Filters extends React.Component {
  state = {
    filters: []
  };

  handleFilter = name => event => {
    this.setState({
      filters: this.state.filters.concat([
        {
          name,
          value: event.target.value
        }
      ])
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper elevation={2} square className={classes.container}>
        <PaperHeader>
          <div className={classes.flexContainer}>
            <Typography
              className={classes.heading}
              align="left"
              gutterBottom={true}
              variant="headline"
            >
              Filters
            </Typography>
          </div>
          <Divider />
        </PaperHeader>
        <PaperBody>
          <form noValidate autoComplete="off">
            <Grid container>
              <Grid item xs={6}>
                <FormControlLabel
                  className={classes.completedField}
                  control={
                    <Checkbox
                      onChange={this.handleFilter("completed")}
                      color="primary"
                    />
                  }
                  label="Completed"
                />
              </Grid>
            </Grid>
          </form>
        </PaperBody>
        <PaperFooter>
          <Button color="secondary" variant="contained">
            Filter
          </Button>
        </PaperFooter>
      </Paper>
    );
  }
}

Filters.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Filters);
