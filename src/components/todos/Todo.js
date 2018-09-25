import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import PaperHeader from "../layout/paper/PaperHeader";
import PaperBody from "../layout/paper/PaperBody";
import PaperFooter from "../layout/paper/PaperFooter";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { todoStyles } from "./styles";
import Grid from "@material-ui/core/Grid";

class Todo extends React.Component {
  state = {
    title: "",
    completed: 0,
    created_at: new Date()
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
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
              Todo
            </Typography>
          </div>
          <Divider />
        </PaperHeader>
        <PaperBody>
          <form noValidate autoComplete="off">
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="todo-title"
                  label="Title"
                  className={classes.textField}
                  value={this.state.title}
                  helperText="add a descriptive title"
                  onChange={this.handleChange("title")}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  className={classes.completedField}
                  control={
                    <Checkbox
                      checked={false}
                      onChange={this.handleChange("completed")}
                      value="0"
                      color="primary"
                    />
                  }
                  label="Completed"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="todo-comment"
                  label="Comment"
                  style={{ margin: 8 }}
                  placeholder="add a comment"
                  helperText="try to be specific"
                  onChange={this.handleChange("comment")}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </PaperBody>
        <PaperFooter>
          <Button color="primary" variant="contained">
            Save
          </Button>
          <Button color="secondary" variant="contained">
            Cancel
          </Button>
        </PaperFooter>
      </Paper>
    );
  }
}

export default withStyles(todoStyles)(Todo);
